'use client'

import {
  FormField,
  Input,
  Select,
  Textarea,
} from '@/components/admin/FormField'

export default function TambahAgendaPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-slate-800">Tambah/Edit Agenda</h1>

      <p className="mb-5 text-[10px] text-slate-400">
        Kelola informasi agenda NewsPortal.
      </p>

      <div className="rounded-lg border bg-white p-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-4">
            <FormField label="Judul" required>
              <Input placeholder="Masukkan judul agenda" />
            </FormField>

            <FormField label="Slug" required>
              <Input placeholder="otomatis dibuat dari judul" />
            </FormField>

            <FormField label="Deskripsi">
              <Textarea placeholder="Masukkan deskripsi agenda" />
            </FormField>

            <FormField label="Gambar">
              <div className="flex h-32 items-center justify-center rounded-md border border-dashed bg-slate-50">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-[9px] text-white">
                  Pilih File
                </button>
              </div>
            </FormField>
          </div>

          <div className="space-y-4">
            <FormField label="Tanggal & Lokasi" required>
              <Input type="datetime-local" />
            </FormField>

            <FormField label="Lokasi">
              <Input placeholder="Masukkan lokasi acara" />
            </FormField>

            <FormField label="Status">
              <Select>
                <option>UPCOMING</option>
                <option>FINISHED</option>
                <option>CANCELLED</option>
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
