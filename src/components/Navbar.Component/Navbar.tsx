import Link from 'next/link';
import React, { FC } from 'react';
import Logo from '../Logo';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

interface NavbarProps {
  show: boolean;
}

const Navbar: FC<NavbarProps> = ({show}) => {
  const inActiveLink = "flex gap-2 p-1";
  const activeLink = "bg-white text-black rounded-tl-lg rounded-bl-lg " + inActiveLink;
  const inactiveIcon = 'h-6 w-6';
  const activeIcon = inactiveIcon + ' text-primary';
  const router = useRouter();
  const {pathname} = router;

  const logout = async () => {
    await router.push('/');
    await signOut();
  };
  return (
    <nav className={(show?'left-0':'-left-full') + ' flex items-center justify-between p-1 bg-white shadow-md'}>
      <Logo/>
      <div className="flex items-center">
        <Link href="/results" className="inline-block px-4 py-6 ml-1 text-sm font-bold text-white bg-blue-900 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            Results
        </Link>
        <Link href="/current_tasks" className="inline-block px-4 py-6 ml-1 text-sm font-bold text-white bg-blue-900 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            Current Tasks
        </Link>
        <Link href="/about_page" className="inline-block px-4 py-6 ml-1 text-sm font-bold text-white bg-blue-900 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            About JUSTICE
        </Link>
        
        <button className="flex px-4 py-6 ml-1 text-sm font-bold text-white bg-blue-900 rounded hover:bg-blue-700 transition duration-300 ease-in-out" onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
                Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
