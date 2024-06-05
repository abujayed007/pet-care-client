import { useLoaderData } from "react-router-dom";




const EditProfile = () => {
    const user = useLoaderData()
    console.log(user)
    const token = localStorage.getItem('token')


    const handleUserUpdate = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value
        const age = form.age.value
        const address = form.address.value
        const image = form.image.value

        const userInfo = {
            email,
            name,
            phone,
            age,
            address,
            image

        }

        fetch(`https://pet-care-server-snowy.vercel.app/user/${user?.email}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json',
                authorization:`Bearer ${token}`
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div className="">
            <form onSubmit={handleUserUpdate}>
                <div className="flex flex-wrap justify-center space-x-2">

                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.email} readOnly className="input input-bordered w-full" type="email" name="email" placeholder="Email" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.name} className="input input-bordered w-full" type="text" name="name" placeholder="Name" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Phone</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.phone} className="input input-bordered w-full" type="text" name="phone" placeholder="Mobile" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Age</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.age} className="input input-bordered w-full" type="text" name="age" placeholder="Age" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Address</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.address} className="input input-bordered w-full" type="text" name="address" placeholder="address" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Image URL</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={user?.image} className="input input-bordered w-full" type="text" name="image" placeholder="Image" />
                        </label>
                    </div>

                </div>
                <div className="flex justify-center">
                    <input type="submit" className="btn   bg-[#2a682f] w-1/2 mt-4 text-xl text-white font-semibold" value="Update Profile" />
                </div>

            </form>
        </div>
    );
};

export default EditProfile;