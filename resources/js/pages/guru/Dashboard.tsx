import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DashboardUi from './dashboard/dashboard-ui';
import LihatLaporanUi from './dashboard/lihat-laporan-ui';
import { useState } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Piket Apps',
    },
];

export default function Dashboard() {

    const [ui, setUi] = useState('dashboard');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            {
                ui === 'dashboard' ? 
                (<DashboardUi onChange={setUi}/>):
                ui === 'lihat-laporan' &&
                (<LihatLaporanUi onChange={setUi}/>)
            }
        </AppLayout>
    );
}
