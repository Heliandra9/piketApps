import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DropdownMenuRadio } from '@/components/dropdown-menu-radio';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Jadwal Piket',
    },
];

export default function Jadwal() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative dark:text-white text-black p-4 justify-center flex flex-col rounded-xl border border-sidebar-border/70 hover:scale-105 dark:hover:bg-white/70 transition-all dark:bg-white/10 bg-gray-50 hover:bg-gray-100 dark:border-sidebar-border">
                    <div className="flex justify-center items-center gap-2">                            
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-slate-700 dark:text-slate-300">Pilih Kelas</p>
                            <DropdownMenuRadio/>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
