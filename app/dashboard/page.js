"use client"
import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


const Dashboard = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {

        console.log(session)

        if (status === "unauthenticated") {
            router.push('/login')
        }

    }, [status])

    return (
        <div className="container">

            <form className="w-screen mx-auto">
            <h2 className="text-3xl font-bold my-5 text-center"> Welcome To Dashboard</h2>
                <div className="w-1/2 bg-slate-900 mx-auto rounded-2xl p-5 my-10">

                    <div className="flex flex-col gap-5">
                        <div className="mx-2">
                            <label htmlFor="Name" className="font-semibold">Name : </label>
                            <input id="Name" className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <div className="mx-2">
                            <label htmlFor="Email" className="font-semibold">Email : </label>
                            <input id="Email" className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <div className="mx-2">
                            <label htmlFor="UserName" className="font-semibold">UserName : </label>
                            <input id="UserName" className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <div className="mx-2">
                            <label htmlFor="Profile-Picture" className="font-semibold">Profile-Picture : </label>
                            <input className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <div className="mx-2">
                            <label htmlFor="Name" className="font-semibold">RazorPay Id : </label>
                            <input className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <div className="mx-2">
                            <label htmlFor="Name" className="font-semibold">RazorPay Secret : </label>
                            <input className="w-full p-2 mt-1 rounded-lg border border-white" type="text" />
                        </div>
                        <button type="button" className="text-white hover:cursor-pointer mx-2 my-3 rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Save</button>
                    </div>


                </div>
            </form>

        </div>
    )
}

export default Dashboard
