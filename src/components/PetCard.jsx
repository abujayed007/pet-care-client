import { Link } from "react-router-dom";


const PetCard = ({ pet }) => {
    const {name, image, breed, details , location,food} = pet
    return (
        <div className="card w-80  bg-base-100 shadow-xl ">
            <figure><img className='h-80 w-80' src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} ({breed})</h2>
                <div className="card-actions grid">
                    <p>Location  : {location}</p>
                    <p>Food Habit : {food}</p>
                </div>
              <div className="flex justify-center items-center">
                <Link className="btn bg-[#2FA53D] text-white font-bold w-full">Details</Link>
              </div>
            </div>
        </div>
    );
};

export default PetCard;