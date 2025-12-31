import { Home, Calendar, Users, Settings, BookOpen } from "lucide-react"
import { Link, usePage } from "@inertiajs/react"

export function MobileBottomNav() {
  const { url } = usePage()

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
  
  const navItems = [
    { 
      icon: Home,
      label: "Beranda",
      href: getDashboardRoute() 
    },
    ...(user?.role === 'guru' ? [
            {
                icon: BookOpen,
                label: 'Jadwal',
                href: '/guru/jadwal',
            },
        ] : []),
        ...(user?.role === 'siswa' ? [
            {
                icon: BookOpen,
                label: 'Mata Pelajaran',
                href: '/siswa/subjects',
            },
        ] : []),
  ]

  const isActive = (href) => {
    if (href === "/") {
      return url === "/"
    }
    return url.startsWith(href)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-200 md:hidden shadow-lg">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                active ? "text-black dark:text-white" : "dark:text-white text-gray-500"
              }`}
            >
              <div className={`p-2 rounded-full transition-colors ${
                active ? "dark:bg-slate-500 bg-black/50" : ""
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-xs ${
                active ? "font-semibold" : "font-medium"
              }`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}