'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'

import AuthLogo from './AuthLogo'
import GoogleButton from './GoogleButton'

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        <AuthLogo />

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Buat Akun</h2>

          <p className="mt-2 text-sm text-slate-500">
            Daftar untuk mendapatkan pengalaman terbaik
          </p>
        </div>

        <form className="mt-8 space-y-4">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nama Lengkap
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="h-12 w-full rounded-lg border border-slate-300 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

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
                className="h-12 w-full rounded-lg border border-slate-300 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Buat password"
                className="h-12 w-full rounded-lg border border-slate-300 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Konfirmasi Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Ulangi password"
                className="h-12 w-full rounded-lg border border-slate-300 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 py-1 text-xs text-slate-500">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300"
            />

            <span>Saya menyetujui syarat dan ketentuan NewsPortal.</span>
          </label>

          {/* Register */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
          >
            Daftar
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

        {/* Login */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Sudah punya akun?{' '}
          <Link
            href="/auth/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Masuk sekarang
          </Link>
        </p>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        © 2026 NewsPortal. All rights reserved.
      </p>
    </div>
  )
}
