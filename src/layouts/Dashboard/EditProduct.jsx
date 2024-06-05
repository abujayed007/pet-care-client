import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditProduct = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const pets = useLoaderData()
    const { name, image, breed, location, food, _id, email, type, age, text, color } = pets
    console.log(pets);

    const handleEdit = (e) => {
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
            text: "You want to update your data",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result);
                fetch(`https://pet-care-server-snowy.vercel.app/pets/${_id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-type': 'application/json',
                        authorization:`Bearer ${token}`
                    },
                    body: JSON.stringify(petInfo)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // form.reset("")
                    })
                // console.log(petInfo);
                Swal.fire({
                    title: "Updated",
                    text: "Your file has been updated.",
                    icon: "success"
                });
            }
        });


    }
    return (
        <div className="w-full shadow-slate-300  p-10">
            <h2 className="text-5xl text-center font-bold my-6">Add Your Pet</h2>
            <form onSubmit={handleEdit}>
                <div className="lg:grid w-full grid-cols-2 gap-x-6">

                    <div className="">
                        <label>User Email</label>
                        <input type="text" name="email" defaultValue={email} disabled className="w-full border text-opacity-30 p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Pet Name</label>
                        <input type="text" name="name" defaultValue={name} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" name="location" defaultValue={location} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Breed Name</label>
                        <input type="text" name="breed" defaultValue={breed} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="text" name="age" defaultValue={age} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Food Habit</label>
                        <input type="text" name="food" defaultValue={food} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Color</label>
                        <input type="text" name="color" defaultValue={color} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" name="image" defaultValue={image} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Type</label>
                        <select name="type" defaultValue={type} className="w-full border border-gray-500 p-1 rounded">
                            <option>Select--</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="rabbit">Rabbit</option>
                        </select>

                    </div>
                    <div>
                        <label>Other Details</label>
                        <textarea type="text" name="details" defaultValue={text} className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                </div>
                <div className="flex justify-center items-center my-5">
                    <input type="submit" className="btn text-white font-semibold text-2xl bg-[#20A8D2]" value="Update Pet" />
                </div>
            </form>
        </div>
    );
};

export default EditProduct;