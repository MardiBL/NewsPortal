'use client'

import { Globe, Mail, Bell, Lock, Image } from 'lucide-react'

import { FormField, Input, Textarea } from '@/components/admin/FormField'

const menus = [
  {
    name: 'Umum',
    icon: Globe,
  },
  {
    name: 'SEO',
    icon: Globe,
  },
  {
    name: 'Email',
    icon: Mail,
  },
  {
    name: 'Notifikasi',
    icon: Bell,
  },
  {
    name: 'Keamanan',
    icon: Lock,
  },
]

export default function PengaturanPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-slate-800">Pengaturan</h1>

      <p className="mb-5 text-[10px] text-slate-400">
        Kelola konfigurasi website NewsPortal.
      </p>

      <div className="grid grid-cols-12 gap-5">
        {/* SIDEBAR SETTINGS */}
        <div className="col-span-3 rounded-lg border bg-white p-3">
          {menus.map((item, index) => {
            const Icon = item.icon

            return (
              <button
                key={item.name}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-md
                  px-3
                  py-3
                  text-left
                  text-[10px]
                  ${
                    index === 0
                      ? 'bg-blue-50 font-semibold text-blue-600'
                      : 'text-slate-500 hover:bg-slate-50'
                  }
                `}
              >
                <Icon size={14} />

                {item.name}
              </button>
            )
          })}
        </div>

        {/* SETTINGS FORM */}
        <div className="col-span-9 rounded-lg border bg-white p-5">
          <h2 className="mb-5 text-xs font-bold text-slate-700">
            Pengaturan Umum
          </h2>

          <div className="grid grid-cols-2 gap-5">
            <FormField label="Nama Website">
              <Input defaultValue="NewsPortal" />
            </FormField>

            <FormField label="Alamat Website">
              <Input defaultValue="https://newsportal-lac.vercel.app" />
            </FormField>

            <FormField label="Email">
              <Input defaultValue="admin@newsportal.com" />
            </FormField>

            <FormField label="Telepon">
              <Input defaultValue="+62 812 3456 7890" />
            </FormField>

            <div className="col-span-2">
              <FormField label="Deskripsi Website">
                <Textarea defaultValue="NewsPortal adalah portal berita Indonesia yang menyajikan informasi terkini dan terpercaya." />
              </FormField>
            </div>

            <div className="col-span-2">
              <FormField label="Logo Website">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white">
                    N
                  </div>

                  <button className="rounded-md border px-4 py-2 text-[9px]">
                    Pilih Logo
                  </button>
                </div>
              </FormField>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="rounded-md bg-blue-600 px-5 py-2 text-[10px] font-medium text-white">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
