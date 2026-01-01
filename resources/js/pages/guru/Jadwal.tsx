import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DropdownMenuRadio } from '@/components/dropdown-menu-radio';
import { useState } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Jadwal Piket',
    },
];

export default function Jadwal() {

    const [selectedkelas, setSelectedKelas] = useState<string | null>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative dark:text-white text-black p-4 justify-center flex flex-col rounded-xl border border-sidebar-border/70 transition-all dark:bg-white/10 bg-gray-50 dark:border-sidebar-border">
                    <div className="flex justify-center items-center gap-2">                            
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-slate-700 dark:text-slate-300">Pilih Kelas</p>
                            <DropdownMenuRadio onChange={setSelectedKelas}/>
                        </div>
                    </div>
                </div>
                {selectedkelas ? (
                    <>
                        <h1 className="font-bold text-lg">Senin</h1>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-lg">Selasa</h1>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-lg">Rabu</h1>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-lg">Kamis</h1>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-lg">Jumat</h1>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 gap-2 rounded-lg dark:bg-white/10 bg-black-50 border border-sidebar-border shadow">
                                    <div className="border-b border-sidebar-border">
                                        <img className="bg-cover size-14 sm:size-24" src={'/logoSmk-removebg-preview.png'} alt="seseorang"/>  
                                    </div>
                                    <p className="line-clamp-2 text-lg w-24 text-center">Sesorang</p>
                                </div>
                            </div>
                    </>
                    ): ''}
            </div>
        </AppLayout>
    );
}
