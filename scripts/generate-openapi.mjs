import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, '..')
const API_DIR = path.join(ROOT, 'app', 'api')
const OUTPUT_DIR = path.join(ROOT, 'public')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'openapi.json')

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

function getRouteFiles(dir) {
  const files = []

  if (!fs.existsSync(dir)) {
    return files
  }

  for (const item of fs.readdirSync(dir, {
    withFileTypes: true,
  })) {
    const fullPath = path.join(dir, item.name)

    if (item.isDirectory()) {
      files.push(...getRouteFiles(fullPath))
    }

    if (
      item.isFile() &&
      (item.name === 'route.js' ||
        item.name === 'route.jsx' ||
        item.name === 'route.ts' ||
        item.name === 'route.tsx')
    ) {
      files.push(fullPath)
    }
  }

  return files
}

function routeToOpenApiPath(filePath) {
  const relative = path.relative(API_DIR, filePath)

  const routePath = relative
    .replace(/[/\\]route\.(js|jsx|ts|tsx)$/, '')
    .split(path.sep)
    .filter(Boolean)
    .map((segment) => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        return `{${segment.slice(1, -1)}}`
      }

      return segment
    })
    .join('/')

  return `/api/${routePath}`
}

function getMethods(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')

  const methods = []

  for (const method of HTTP_METHODS) {
    const regex = new RegExp(`export\\s+(?:async\\s+)?function\\s+${method}\\b`)

    if (regex.test(content)) {
      methods.push(method.toLowerCase())
    }
  }

  return methods
}

function getParameters(routePath) {
  const parameters = []

  const matches = routePath.matchAll(/\{([^}]+)\}/g)

  for (const match of matches) {
    parameters.push({
      name: match[1],
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    })
  }

  return parameters
}

function createOperation(method, routePath) {
  const tag = routePath.replace('/api/', '').split('/')[0].replace(/-/g, ' ')

  const operation = {
    tags: [tag],
    responses: {
      200: {
        description: 'Successful response',
      },
    },
  }

  const parameters = getParameters(routePath)

  if (parameters.length > 0) {
    operation.parameters = parameters
  }

  return operation
}

const routeFiles = getRouteFiles(API_DIR)

const paths = {}

for (const file of routeFiles) {
  const routePath = routeToOpenApiPath(file)
  const methods = getMethods(file)

  if (!paths[routePath]) {
    paths[routePath] = {}
  }

  for (const method of methods) {
    paths[routePath][method] = createOperation(method, routePath)
  }
}

const openapi = {
  openapi: '3.0.3',

  info: {
    title: 'NewsPortal API',
    description: 'REST API untuk aplikasi NewsPortal',
    version: '1.0.0',
  },

  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development',
    },
  ],

  paths,
}

fs.mkdirSync(OUTPUT_DIR, {
  recursive: true,
})

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(openapi, null, 2))

console.log(`OpenAPI berhasil dibuat: ${OUTPUT_FILE}`)

console.log(`Total endpoint: ${Object.keys(paths).length}`)
