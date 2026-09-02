'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

import AuthLogo from './AuthLogo'
import GoogleButton from './GoogleButton'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        <AuthLogo />

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Selamat Datang Kembali
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Masuk ke akun Anda untuk melanjutkan
          </p>
        </div>

        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="email"
                placeholder="Masukkan email"
                className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <Link
                href="#"
                className="text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                Lupa password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password"
                className="h-12 w-full rounded-lg border border-slate-300 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600"
            />
            Ingat saya
          </label>

          {/* Login */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
          >
            Masuk
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs text-slate-400">atau</span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Google */}
          <GoogleButton />
        </form>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Belum punya akun?{' '}
          <Link
            href="/auth/register"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        © 2026 NewsPortal. All rights reserved.
      </p>
    </div>
  )
}
