
import { useContext, useEffect, useState } from "react";

import SinglePetCards from "./SinglePetCards";
import { AuthContext } from "../../authContext/AuthProvider";


const MyAllPets = () => {
    const {user} = useContext(AuthContext)
    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch(`https://pet-care-server-snowy.vercel.app/pets`)
        .then(res=>res.json())
        .then(data =>{
            setPets(data)
            console.log(data);
        })
    },[user])

    const handleDeletePet = (id) => {
        setPets(pets.filter((pet) => pet._id !== id));
      };
    
    
    return (
        <div className="flex justify-center pl-4">
        <div>
            
        <h2 className="text-3xl text-center font-bold my-10">Here is your cute pets</h2>
                <div className="lg:grid grid-cols-3 gap-5">
                    {
                        pets.map(pet => <SinglePetCards key={pet._id} pet={pet} onDelete={handleDeletePet}/>)
                    }
                </div>
        </div>
        
        </div>
    );
};

export default MyAllPets;