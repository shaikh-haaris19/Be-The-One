"use client"
import { useParams } from "next/navigation";

const UserName = () => {

    const params = useParams()

    return (
        <div className='text-white'>
            Hello : {params.username}
        </div>
    )
}

export default UserName
