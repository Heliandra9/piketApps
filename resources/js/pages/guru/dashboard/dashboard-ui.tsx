import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { SquareCheckBig,CircleAlert, BookOpenText, ChartColumn } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';

type DashboardUiProps = {
  onChange: (value: string) => void
}

export default function DashboardUi({ onChange } : DashboardUiProps) {

    const getInitials = useInitials();

    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative dark:text-white text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                        <div className="flex items-center gap-2">                            
                            <SquareCheckBig size="35"/>
                            <p  className="text-lg dark:text-white text-black">Piket&nbsp;Hari&nbsp;ini</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-lg font-bold">9</p>
                            <p className="text-lg font-bold">Kelas</p>
                        </div>
                    </div>
                    <div className="relative dark:text-white text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                        <div className="flex items-center gap-2">                            
                            <CircleAlert size="35"/>
                            <p  className="text-lg dark:text-white text-black">Belum&nbsp;Lapor</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-lg font-bold">9</p>
                            <p className="text-lg font-bold">Kelas</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-lg dark:text-white text-black font-bold">Aksi Cepat</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div onClick={()=>onChange('lihat-laporan')} className="relative dark:text-white active:dark:bg-white/70 active:bg-gray-100 hover:cursor-pointer text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 hover:scale-105 dark:hover:bg-white/70 transition-all dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                        <div className="flex flex-col items-center gap-2">                            
                            
                            <BookOpenText size="35"/>
                            <p className="text-lg font-bold">Lihat laporan</p>
                        </div>
                    </div>
                    <div className="relative dark:text-white active:dark:bg-white/70 active:bg-gray-100 hover:cursor-pointer text-black justify-center p-4 items-center flex flex-col rounded-xl border border-sidebar-border/70 hover:scale-105 dark:hover:bg-white/70 transition-all dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                        <div className="flex flex-col items-center gap-2">                            
                            <ChartColumn size="35"/>
                            <p className="text-lg font-bold">Riwayat Piket</p>
                        </div>
                    </div>
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
                                <p className="text-slate-700 dark:text-slate-300">Kelas XII-RPL ~ Sudah Lapor</p>
                                <p className="text-slate-800 dark:text-slate-400">10 menit yang lalu</p>
                            </div>
                        </div>
                    </div>
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
                                <p className="text-slate-700 dark:text-slate-300">Kelas XII-RPL ~ Sudah Lapor</p>
                                <p className="text-slate-800 dark:text-slate-400">10 menit yang lalu</p>
                            </div>
                        </div>
                    </div>
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
                                <p className="text-slate-700 dark:text-slate-300">Kelas XII-RPL ~ Sudah Lapor</p>
                                <p className="text-slate-800 dark:text-slate-400">10 menit yang lalu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
