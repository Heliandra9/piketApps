import { DialogForm } from '@/components/dialog-form';
import { DropdownMenuRadio } from '@/components/dropdown-menu-radio';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

type Kelas = {
    id: number;
    nama_kelas: string;
};

type User = {
    id: number;
    name: string;
};

type JadwalProps = {
    kelas: Kelas[];
    siswa: Siswa[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        href: '/',
        title: 'Jadwal Piket',
    },
];

export default function Jadwal({ kelas, user }: JadwalProps) {
    const [selectedKelas, setSelectedKelas] = useState<string | null>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Jadwal" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative flex flex-col justify-center rounded-xl border border-sidebar-border/70 bg-gray-50 p-4 text-black transition-all dark:border-sidebar-border dark:bg-white/10 dark:text-white">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-slate-700 dark:text-slate-300">
                                Pilih Kelas
                            </p>
                            <DropdownMenuRadio
                                kelas={kelas}
                                onChange={setSelectedKelas}
                            />
                        </div>
                    </div>
                </div>
                <DialogForm
                    title="Tambah Kelas"
                    description="Silahkan isi formulir dibawah ini untuk menambahkan kelas baru."
                    form="kelas"
                    type="post"
                    siswa={[]}
                    kelas={''}
                />
                {selectedKelas ? (
                    <>
                        <div className="flex justify-between">
                            <h1 className="text-lg font-bold">Senin</h1>
                            <DialogForm
                                title="Tambah siswa"
                                description="Silahkan isi formulir di bawah ini untuk menambahkan data siswa."
                                type="post"
                                form="siswa"
                                piket="senin"
                                siswa={user}
                                kelas={selectedKelas}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                            <div className="bg-black-50 flex flex-col items-center justify-center gap-2 rounded-lg border border-sidebar-border p-4 shadow dark:bg-white/10">
                                <div className="border-b border-sidebar-border">
                                    <img
                                        className="size-14 bg-cover sm:size-24"
                                        src={'/logoSmk-removebg-preview.png'}
                                        alt="seseorang"
                                    />
                                </div>
                                <p className="line-clamp-2 w-24 text-center text-lg">
                                    Sesorang
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </AppLayout>
    );
}
