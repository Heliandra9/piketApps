import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="fixed inset-0 bg-[url('/smkn_2_tasikmalaya_cover.jpeg')] bg-cover"></div>
            <div className="fixed inset-0 backdrop-blur-sm bg-black/10 dark:bg-black/50"></div>
            <div className="w-full dark:bg-black/10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-8 max-w-2xl border border-white/20 z-10 max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="mb-1 flex items-center justify-center rounded-md">
                                <div className="sm:h-24 sm:w-21 h-18 w-16 inset-0 bg-[url('/logoSmk-removebg-preview.png')] bg-cover"></div>
                            </div>
                            <span className="sr-only dark:text-white text-black">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-center text-sm dark:text-white text-black">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
