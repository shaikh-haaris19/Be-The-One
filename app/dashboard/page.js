"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {

    //Pending
    // const router = useRouter()

    // useEffect(() => {
    //     const { data: session } = useSession()

    //     if (!session) {
    //         return (
    //             router.push('/login')
    //         )
    //     }

    // }, [session])
    return (
        <div>
            DashBoard
        </div>
    )
}

export default Dashboard
