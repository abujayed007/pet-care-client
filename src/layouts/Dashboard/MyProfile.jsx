import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                console.log(data);
            })
    }, [user])
    return (
        <div className="flex mx-auto m-10">

            <div className="shadow-2xl p-10 rounded-xl">

                <div >
                    <h2 className="text-4xl text-center font-bold my-10">My Profile</h2>
                </div>


                <div className="flex justify-center">
                    {userInfo?.image ? <img className='w-14 h-14 border border-gray-300 my-8 rounded-full' src={userInfo?.image} /> : <img className='w-14 h-14 border border-gray-300 my-8  rounded-full' src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' />}
                </div>
                <div className="my-5 flex justify-center">
                    <Link to={`/dashboard/profile/edit/${userInfo?._id}`} className=" btn bg-blue-500 w-1/2  text-md text-white">Edit Profile</Link>
                </div>
                <div>
                    <h2 className="text-xl">Name : {userInfo?.name}</h2>
                    <h2 className="text-xl">Email : {userInfo?.email}</h2>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;