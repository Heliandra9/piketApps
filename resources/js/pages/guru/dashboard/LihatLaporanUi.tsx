import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { CircleAlert, BookOpenText, ChartColumn, StepBack } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan Piket',
    },
];

export default function LihatLaporanUi() {

    const getInitials = useInitials();
    const [stat, setStat] = useState("semua")

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            	{/*<div onClick={()=>onChange('dashboard')} className="flex gap-2 hover:bg-white/10 rounded-lg w-fit p-2 hover:cursor-pointer">
            		<StepBack/>
            		Kembali
            	</div>*/}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="relative dark:text-white text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                            <div className="flex items-center gap-2">                            
                                <p  className="text-base dark:text-white text-black font-bold">Total&nbsp;Kelas</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-xl font-bold">9</p>
                                <p className="text-base">Kelas</p>
                            </div>
                        </div>
                        <div className="relative dark:text-white text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                            <div className="flex items-center gap-2">                            
                                <p  className="text-base dark:text-white text-black font-bold">Sudah&nbsp;Lapor</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-xl font-bold">5</p>
                                <p className="text-base">Kelas</p>
                            </div>
                        </div>
                        <div className="relative dark:text-white text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                            <div className="flex items-center gap-2">                            
                                <p  className="text-base dark:text-white text-black font-bold">Belum&nbsp;Lapor</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-xl font-bold">4</p>
                                <p className="text-base">Kelas</p>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-white/10 bg-gray-50 w-full rounded-lg relative flex justify-between p-2">
                    	<div className={`text-center  w-1/3 z-10 ${stat === "semua" ? '' : 'hover:dark:text-black hover:dark:bg-white hover:text-white hover:bg-black hover:rounded-lg'}`}>
                    		<p onClick={()=>setStat("semua")} className="font-bold">Semua</p>
                    	</div>
                    	<div className={`text-center  w-1/3 z-10 ${stat === "sudah" ? '' : 'hover:dark:text-black hover:dark:bg-white hover:text-white hover:bg-black hover:rounded-lg'}`}>
                    		<p onClick={()=>setStat("sudah")} className="font-bold">Sudah</p>
                    	</div>
                    	<div className={`text-center  w-1/3 z-10 ${stat === "belum" ? '' : 'hover:dark:text-black hover:dark:bg-white hover:text-white hover:bg-black hover:rounded-lg'}`}>
                    		<p onClick={()=>setStat("belum")} className="font-bold">Belum</p>
                    	</div>
                    	<div className={`absolute top-2 w-1/3 h-2/3 rounded-lg bg-white/20 transition-all ${stat === 'semua' ? '' : stat === 'sudah' ? 'translate-x-30 sm:translate-x-87' : stat === 'belum' && 'translate-x-60 sm:translate-x-175'}`} />
                    </div>
                    <h1 className="text-lg dark:text-white text-black font-bold">Laporan Terbaru</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="relative dark:text-white active:dark:bg-white/70 active:bg-gray-100 hover:cursor-pointer text-black p-4 justify-center flex flex-col rounded-xl border border-sidebar-border/70 hover:scale-105 dark:hover:bg-white/70 transition-all dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                            <div className="flex items-center gap-2">                            
                                <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                                    <AvatarImage src={`kelas`} alt={`kelas`} />
                                    <AvatarFallback className="rounded-lg text-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                        {getInitials('seseorang')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">Seseorang</p>
                                    <p className="text-slate-700 dark:text-slate-300">Kelas XII-RPL ~ NIS: 1234567</p>
                                    <p className="bg-white/50 rounded w-fit p-1">✔️ Sudah Lapor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
    );
}
