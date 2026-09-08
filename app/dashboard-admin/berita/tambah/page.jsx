'use client'

import {
  FormField,
  Input,
  Select,
  Textarea,
} from '@/components/admin/FormField'

export default function TambahBeritaPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-lg font-bold text-slate-800">Tambah Berita</h1>

        <p className="text-[10px] text-slate-400">
          Tambahkan berita baru ke NewsPortal.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* LEFT */}
        <div className="col-span-8 rounded-lg border bg-white p-5">
          <div className="space-y-4">
            <FormField label="Judul" required>
              <Input placeholder="Masukkan judul berita" />
            </FormField>

            <FormField label="Slug" required>
              <Input placeholder="otomatis-dibuat-dari-judul" />
            </FormField>

            <FormField label="Kategori" required>
              <Select>
                <option>Pilih kategori</option>
                <option>Nasional</option>
                <option>Daerah</option>
                <option>Politik</option>
                <option>Ekonomi</option>
                <option>Lifestyle</option>
                <option>Olahraga</option>
                <option>Teknologi</option>
                <option>Opini</option>
              </Select>
            </FormField>

            <FormField label="Status">
              <Select>
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
              </Select>
            </FormField>

            <FormField label="Ringkasan">
              <Textarea placeholder="Masukkan ringkasan berita..." />
            </FormField>

            <FormField label="Konten" required>
              <div className="rounded-md border border-slate-200">
                <div className="flex gap-4 border-b bg-slate-50 px-3 py-2 text-[10px] text-slate-500">
                  <b>B</b>
                  <i>I</i>
                  <u>U</u>
                  <span>•</span>
                  <span>🔗</span>
                  <span>H1</span>
                  <span>H2</span>
                </div>

                <textarea
                  className="min-h-[250px] w-full resize-none p-3 text-[11px] outline-none"
                  placeholder="Tulis konten berita..."
                />
              </div>
            </FormField>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-4 space-y-4">
          <div className="rounded-lg border bg-white p-5">
            <h2 className="mb-4 text-xs font-bold">Gambar Utama</h2>

            <div className="flex h-44 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
              <div className="mb-2 text-2xl">🖼️</div>

              <p className="text-[9px] text-slate-400">
                Klik untuk upload atau drag file ke sini
              </p>

              <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-[9px] text-white">
                Pilih File
              </button>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-5">
            <h2 className="mb-4 text-xs font-bold">Meta SEO</h2>

            <div className="space-y-4">
              <FormField label="Meta Title">
                <Input placeholder="Meta title" />
              </FormField>

              <FormField label="Meta Description">
                <Textarea placeholder="Meta description" />
              </FormField>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="rounded-md border px-4 py-2 text-[10px]">
          Batal
        </button>

        <button className="rounded-md bg-blue-600 px-5 py-2 text-[10px] text-white">
          Simpan
        </button>
      </div>
    </div>
  )
}
