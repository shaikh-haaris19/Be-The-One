"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const { data: session } = useSession()
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <nav className='text-white bg-black shadow-inner shadow-white flex justify-between items-center px-5 h-20'>

            <Link href={'/'}>
                <Image src={'/Logo.png'} width={40} height={40} className='rounded-full ml-10' alt='Logo' />
            </Link>

            <div className='relative'>
                {session && <>

                    <button onBlur={() => {
                        setTimeout(() => {
                            setShowDropDown(false)
                        }, 100);
                    }} id="dropdownAvatarNameButton" onClick={() => setShowDropDown(!showDropDown)} data-dropdown-toggle="dropdownAvatarName" className="flex cursor-pointer hover:bg-gray-500 p-2 items-center text-sm pe-1 font-medium text-heading rounded-full hover:text-fg-brand md:me-0 focus:ring-2 focus:ring-neutral-tertiary" type="button">
                        <span className="sr-only">Open user menu</span>
                        <CgProfile className='w-7 h-7 mx-1' />
                        {session.user.name}

                        <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                    </button>

                    <div id="dropdownAvatarName" className={`z-10 ${showDropDown ? '' : 'hidden'} absolute right-2 my-6 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72`}>
                        <div className="p-2">
                            <div className="flex items-center px-2.5 p-2 space-x-1.5 text-sm bg-neutral-secondary-strong rounded">
                                <CgProfile className='w-7 h-7' />
                                <div className="text-sm">
                                    <div className="font-medium text-heading">{session.user.name}</div>
                                    <div className="truncate text-body">{session.user.email}</div>
                                </div>
                            </div>
                        </div>
                        <ul className="px-2 pb-2 text-sm text-body font-medium" aria-labelledby="dropdownAvatarNameButton">
                            <li className="hover:bg-gray-500">
                                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                                    dashboard
                                </Link>
                            </li>
                            <li className="hover:bg-gray-500">
                                <Link href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" /></svg>
                                    Earnings
                                </Link>
                            </li>
                            <li className="hover:bg-gray-500">
                                <Link href="/login" onClick={() => signOut()} className="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">
                                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" /></svg>
                                    SignOut
                                </Link>
                            </li>
                        </ul>
                    </div>

                </>
                }
            </div>
            {
                !session && <Link href={'/login'}>
                    <button type="button" className="text-white mr-5 hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
                </Link>
            }

        </nav >
    )
}

export default Navbar
