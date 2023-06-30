import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
    return (
        <Link href={'/'} className="flex p-1 gap-1 items-center">
            <Link href="/" className='flex items-center text-2xl font-bold text-black hover:text-gray-700'>
                <img src="/JUSTICE.ico" alt="Logo" height={40} width={40} />
                <span className='ml-3 text-blue-900'>Testing Platform JUSTICE</span>
            </Link>
        </Link>
    )
}

export default Logo;
