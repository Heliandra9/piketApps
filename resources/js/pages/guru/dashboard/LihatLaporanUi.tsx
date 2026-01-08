import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { CircleAlert, BookOpenText, ChartColumn, StepBack } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
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
            	<a href="/dashboard" className="flex gap-2 hover:bg-white/10 rounded-lg w-fit p-2 hover:cursor-pointer">
            		<StepBack/>
            		Kembali
            	</a>
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
                    <div className="relative flex w-full rounded-lg bg-gray-50 dark:bg-white/10 p-1 overflow-hidden">
                      <div
                        className={`
                          absolute inset-y-1 left-1
                          w-1/3
                          rounded-md bg-white/20
                          transition-transform duration-300 ease-in-out
                          ${
                            stat === 'semua'
                              ? 'translate-x-0'
                              : stat === 'sudah'
                              ? 'translate-x-full'
                              : 'translate-x-[200%]'
                          }
                        `}
                      />
                      <button
                        onClick={() => setStat('semua')}
                        className={`
                          relative z-10 flex-1 py-2 text-center font-bold rounded-md
                          transition-colors
                          ${
                            stat === 'semua'
                              ? 'text-black dark:text-white'
                              : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                          }
                        `}
                      >
                        Semua
                      </button>
                      <button
                        onClick={() => setStat('sudah')}
                        className={`
                          relative z-10 flex-1 py-2 text-center font-bold rounded-md
                          transition-colors
                          ${
                            stat === 'sudah'
                              ? 'text-black dark:text-white'
                              : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                          }
                        `}
                      >
                        Sudah
                      </button>
                      <button
                        onClick={() => setStat('belum')}
                        className={`
                          relative z-10 flex-1 py-2 text-center font-bold rounded-md
                          transition-colors
                          ${
                            stat === 'belum'
                              ? 'text-black dark:text-white'
                              : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                          }
                        `}
                      >
                        Belum
                      </button>
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
                                    <p className="bg-green-300/50 rounded w-fit p-1 flex items-center gap-2"><div className="bg-green-500 size-2 rounded-full"/> Sudah Lapor</p>
                                </div>
                                <div className="flex flex-col items-end justify-center gap-12">
                                    <p className="text-slate-700 dark:text-slate-300">16.00</p>
                                    <Button>Detail</Button>
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
                                    <p className="text-slate-700 dark:text-slate-300">NIS: 1234567</p>
                                    <p className="text-slate-700 dark:text-slate-300">Kelas XII-RPL</p>
                                    <p className="bg-yellow-300/50 rounded w-fit p-1 flex items-center gap-2"><div className="bg-yellow-500 size-2 rounded-full"/> Belum Lapor</p>
                                </div>
                                <div className="flex flex-col w-1/3 items-end justify-center gap-12">
                                    <p className="text-slate-700 dark:text-slate-300">16.00</p>
                                    <Button>Detail</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
    );
}
