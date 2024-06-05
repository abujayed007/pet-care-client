import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthProvider";
import Swal from "sweetalert2";


const AddPets = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const location = form.location.value
        const breed = form.breed.value
        const age = form.age.value
        const color = form.color.value
        const image = form.image.value
        const type = form.type.value
        const details = form.details.value
        const food = form.food.value

        const petInfo = {
            email,
            name,
            location,
            breed,
            age,
            color,
            image,
            type,
            details,
            food
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You want to add",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Posted it"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('https://pet-care-server-wheat.vercel.app/pets', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                        authorization:`Bearer ${token}`
                    },
                    body: JSON.stringify(petInfo)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                Swal.fire({
                    title: "Added!",
                    text: "Your file has been added successfully.",
                    icon: "success"
                });
            }
        });


        // console.log(petInfo);
    }
    return (
        <div className="w-full shadow-slate-300  p-10">
            <h2 className="text-5xl text-center font-bold my-6">Add Your Pet</h2>
            <form onSubmit={handleSubmit}>
                <div className="lg:grid w-full grid-cols-2 gap-x-6">

                    <div hidden>
                        <label>User Email</label>
                        <input type="text" required name="email" defaultValue={user?.email} disabled className="w-full border text-opacity-30 p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Pet Name</label>
                        <input type="text" required name="name" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" required name="location" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Breed Name</label>
                        <input type="text" required name="breed" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="text" required name="age" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Food Habit</label>
                        <input type="text" required name="food" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Color</label>
                        <input type="text" required name="color" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" required name="image" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Type</label>
                        <select required name="type" className="w-full border border-gray-500 p-1 rounded">
                            <option>Select--</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="bird">Bird</option>
                        </select>

                    </div>
                    <div>
                        <label>Other Details</label>
                        <textarea type="text" required name="details" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                </div>
                <div className="flex justify-center items-center my-5">
                    <input type="submit" className="btn text-white font-semibold text-2xl bg-[#20A8D2]" value="Add Pet" />
                </div>
            </form>
        </div>
    );
};

export default AddPets