import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center">
                {/*<AppLogoIcon className="size-5 fill-current text-white dark:text-black" />*/}
                <div className="h-8 w-7 inset-0 bg-[url('/logoSmk-removebg-preview.png')] bg-cover"></div>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    Piket Apps
                </span>
            </div>
        </>
    );
}
