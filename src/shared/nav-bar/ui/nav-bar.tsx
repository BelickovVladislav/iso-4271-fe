'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Route {
  title: string;
  link: string;
}

const routes: Route[] = [
  { title: 'Countries', link: '/countries' },
  { title: 'Currencies', link: '/currencies' },
];

export default function NavBar() {
  const pathname = usePathname();
  const classActive = 'text-blue-500';

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex">
            {routes.map(({ link, title }: Route) => (
              <li key={link}>
                <Link
                  href={link}
                  className={`block py-2 px-3 ${link === pathname ? classActive : ''}`}
                  aria-current="page"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
