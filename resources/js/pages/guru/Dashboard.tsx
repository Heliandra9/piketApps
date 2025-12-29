import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { SquareLibrary } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Piket Apps',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="relative dark:text-white text-black justify-center p-4 items-center flex gap-2 flex-col rounded-xl border border-sidebar-border/70 hover:scale-105 dark:hover:bg-white/70 transition-all dark:bg-white/10 bg-black/10 hover:bg-black/70 dark:border-sidebar-border">
                        <div className="flex items-center gap-2">                            
                            <SquareLibrary size="45"/>
                            <p  className="text-lg text-gray-500">Piket Hari ini</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-lg font-bold">9</p>
                            <p className="text-lg font-bold">Kelas</p>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
