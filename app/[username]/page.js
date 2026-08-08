"use client"
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react"
import PaymentPage from "@/Components/PaymentPage";

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
            <PaymentPage UserName={params.username} Image={session.user.image} orderId={params.orderId} paymentDone={params.paymentDone} />
        </>
    )
}

export default UserName
