import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, House } from 'lucide-react';
import AppLogo from './app-logo';
import { NavUser } from '@/components/nav-user';


export function AppSidebar() {
    // Ambil data user dari Inertia
    const { auth } = usePage().props as any;
    const user = auth?.user;
    
    // Tentukan dashboard route berdasarkan role
    const getDashboardRoute = () => {
        switch(user?.role) {
            case 'guru':
                return '/guru/dashboard';
            case 'siswa':
                return '/siswa/dashboard';
            default:
                return '/dashboard';
        }
    };
    
    // Dynamic nav items berdasarkan role
    const mainNavItems: NavItem[] = [
        {
            title: 'Beranda',
            href: getDashboardRoute(),
            icon: House,
        },
        ...(user?.role === 'guru' ? [
            {
                title: 'Jadwal',
                href: '/guru/jadwal',
                icon: BookOpen,
            },
        ] : []),
        // ...(user?.role === 'siswa' ? [
        //     {
        //         title: 'Mata Pelajaran',
        //         href: '/siswa/subjects',
        //         icon: BookOpen,
        //     },
        // ] : []),
    ];
    
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={getDashboardRoute()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser/>
            </SidebarFooter>
        </Sidebar>
    );
}