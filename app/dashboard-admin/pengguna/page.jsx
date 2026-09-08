'use client'

import { Pencil, Trash2 } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import StatusBadge from '@/components/admin/StatusBadge'

const users = [
  ['Admin', 'admin@newsportal.com', 'Super Admin'],
  ['Editor', 'editor@newsportal.com', 'Editor'],
  ['Reporter', 'reporter@newsportal.com', 'Reporter'],
  ['Mardi', 'mardi@newsportal.com', 'Reporter'],
  ['Ahmad Fauzi', 'ahmad@newsportal.com', 'Reporter'],
]

export default function PenggunaPage() {
  return (
    <div>
      <PageHeader
        title="Pengguna"
        description="Kelola pengguna dan administrator NewsPortal."
        buttonText="Tambah Pengguna"
      />

      <div className="mb-4 flex gap-3">
        <input
          placeholder="Cari pengguna..."
          className="h-9 w-72 rounded-md border px-3 text-[10px]"
        />

        <select className="h-9 rounded-md border px-3 text-[10px]">
          <option>Semua Role</option>
          <option>Super Admin</option>
          <option>Editor</option>
          <option>Reporter</option>
          <option>User</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Nama</th>
              <th className="px-4 py-3 text-left text-[9px]">Email</th>
              <th className="px-4 py-3 text-left text-[9px]">Role</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => (
              <tr key={item[1]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-[9px] font-bold">
                      {item[0][0]}
                    </div>

                    <span className="text-[10px] font-medium">{item[0]}</span>
                  </div>
                </td>

                <td className="px-4 py-3 text-[9px] text-slate-500">
                  {item[1]}
                </td>

                <td className="px-4 py-3 text-[9px]">{item[2]}</td>

                <td className="px-4 py-3">
                  <StatusBadge status="ACTIVE" />
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Pencil size={13} className="text-blue-500" />
                    <Trash2 size={13} className="text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
