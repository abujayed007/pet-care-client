/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SinglePetCards = ({ pet, onDelete }) => {
    const token = localStorage.getItem('token')
    const { name, image, breed, location, food, _id } = pet


    const handleDelete = () => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pet-care-server-wheat.vercel.app/pets/${_id}`, {
                    method: 'DELETE',
                    headers:{
                        'Content-type':'application/json',
                        authorization:`Bearer ${token}`
                    }
                }).then(data => {
                    onDelete(_id)
                    console.log(data)

                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    }
    return (
        <div className="card w-80  bg-base-100 shadow-xl ">
            <figure><img className='h-80 w-80' src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} ({breed})</h2>
                <div className="card-actions grid">
                    <p>Location  : {location}</p>
                    <p>Food Habit : {food}</p>
                </div>
                <div className='flex justify-around '>
                    <Link to={`/pets/${_id}`} className='btn text-white font-semibold bg-[#007AB9]'>Details</Link>
                    <Link to={`/dashboard/edit/${_id}`} className='btn text-white font-semibold bg-[#c8e043]'>Edit</Link>
                    <Link onClick={handleDelete} className='btn text-white font-semibold bg-[#eb3d3d]'>Delete</Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePetCards;