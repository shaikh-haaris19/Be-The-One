import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white bg-black border flex justify-between items-center px-5 h-20'>

            <Link href={'/'}>
                <Image src={'/Logo.png'} width={40} height={40} className='rounded-full ml-10' alt='Logo' />
            </Link>

            <Link href={'/login'}>
                <button type="button" className="text-white mr-5 hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
            </Link>

        </nav>
    )
}

export default Navbar
