'use client'

import { FormField, Input, Select } from '@/components/admin/FormField'

export default function TambahBannerPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-slate-800">Tambah/Edit Banner</h1>

      <p className="mb-5 text-[10px] text-slate-400">
        Kelola banner NewsPortal.
      </p>

      <div className="rounded-lg border bg-white p-5">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <FormField label="Judul">
              <Input placeholder="Masukkan judul banner" />
            </FormField>

            <div className="mt-4">
              <FormField label="Gambar" required>
                <div className="flex h-48 flex-col items-center justify-center rounded-md border border-dashed bg-slate-50">
                  <span className="text-2xl">🖼️</span>

                  <p className="mt-2 text-[9px] text-slate-400">
                    Klik untuk upload atau drag file ke sini
                  </p>

                  <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-[9px] text-white">
                    Pilih File
                  </button>
                </div>
              </FormField>
            </div>
          </div>

          <div className="space-y-4">
            <FormField label="Posisi">
              <Select>
                <option>HOME</option>
                <option>SIDEBAR</option>
                <option>ARTICLE</option>
              </Select>
            </FormField>

            <FormField label="Link">
              <Input placeholder="https://..." />
            </FormField>

            <FormField label="Urutan">
              <Input type="number" defaultValue="1" />
            </FormField>

            <FormField label="Status">
              <Select>
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </Select>
            </FormField>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button className="rounded-md border px-4 py-2 text-[10px]">
            Batal
          </button>

          <button className="rounded-md bg-blue-600 px-5 py-2 text-[10px] text-white">
            Simpan
          </button>
        </div>
      </div>
    </div>
  )
}
