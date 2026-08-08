"use client"
import { useParams } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"

const UserName = () => {

    const params = useParams()
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (!session) {
        return <p>User not logged in</p>;
    }

    return (
        <>
            <div className="relative">

                <img className="w-full h-75" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=3x00VDsaNIgXAyrIZGL0ZVuRLQUDiIHpGjpkn-3_ZOg%3D&token-time=1788480000" alt="" />

                <div className="absolute -bottom-15 left-[47.5%] border-4 rounded-full border-yellow-500">
                    <img width={70} height={70} className="object-cover rounded-full" src={session.user.image} alt="" />
                </div>

            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="text-center font-bold mt-18">
                    @{params.username}
                </div>

                <div className="text-gray-500">
                    Creating Animated art for VTT's
                </div>

                <div className="text-gray-500">
                    26,547 members - 113 posts - €14,370/release
                </div>

                <div className="payment flex gap-5 w-[80%] py-10">

                    <div className="supporters w-1/2 bg-slate-900 rounded-2xl p-5">

                        <h2 className="text-2xl font-bold underline mb-4">Our Supporter's :</h2>
                        <ul className="mx-5">
                            <li className="my-2 flex items-center gap-2">
                                <img width={25} src="avatar.gif" alt="" />
                                <span className="text-sm">Apple Donated <span className="font-semibold">50$</span> With A Message "Small Contribution From Me ❤️" </span>
                            </li>
                            <li className="my-2 flex items-center gap-2">
                                <img width={25} src="avatar.gif" alt="" />
                                <span className="text-sm">Samsung Donated <span className="font-semibold">50$</span> With A Message "Small Contribution From Me ❤️" </span>
                            </li>
                            <li className="my-2 flex items-center gap-2">
                                <img width={25} src="avatar.gif" alt="" />
                                <span className="text-sm">LG Donated <span className="font-semibold">50$</span> With A Message "Small Contribution From Me ❤️" </span>
                            </li>
                            <li className="my-2 flex items-center gap-2">
                                <img width={25} src="avatar.gif" alt="" />
                                <span className="text-sm">OPPO Donated <span className="font-semibold">50$</span> With A Message "Small Contribution From Me ❤️" </span>
                            </li>
                        </ul>

                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-2xl p-5">
                        <h2 className="text-2xl font-bold underline mb-4">Payment :</h2>

                        <div className="flex flex-col gap-3">
                            <input className="w-full p-3 rounded-lg border border-white" type="text" placeholder="Enter The Name" />
                            <input className="w-full p-3 rounded-lg border border-white" type="text" placeholder="Enter The Message" />
                            <input className="w-full p-3 rounded-lg border border-white" type="text" placeholder="Enter The Amount" />
                            <button type="button" className="text-white hover:cursor-pointer rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>
                        </div>


                    </div>

                </div>

            </div>


        </>
    )
}

export default UserName
