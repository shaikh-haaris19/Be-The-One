"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const { data: session } = useSession()

    return (
        <nav className='text-white bg-black border flex justify-between items-center px-5 h-20'>

            <Link href={'/'}>
                <Image src={'/Logo.png'} width={40} height={40} className='rounded-full ml-10' alt='Logo' />
            </Link>

            <div>
                {session && <Link href={'/dashboard'}>
                    <button type="button" className="text-white mr-5 hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Profile</button>
                </Link>}
                {session && <Link href={'/login'}>
                    <button type="button" onClick={() => signOut()} className="text-white mr-5 hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">SignOut</button>
                </Link>}
            </div>
            {!session && <Link href={'/login'}>
                <button type="button" className="text-white mr-5 hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
            </Link>}

        </nav>
    )
}

export default Navbar
