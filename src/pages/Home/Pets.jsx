import PetCard from "../../components/PetCard";
import { useEffect, useState } from "react";


const Pets = () => {
    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/pets')
        .then(res=>res.json())
        .then(data =>{
            setPets(data)
            console.log(data);
        })
    },[])
    
    
    return (
        <div className="flex justify-center my-4">
        <div>
            
        <h2 className="text-3xl text-center font-bold my-10">Here is your cute pets</h2>
                <div className="lg:grid grid-cols-3 gap-5">
                    {
                        pets.map(pet => <PetCard key={pet._id} pet={pet}/>)
                    }
                </div>
        </div>
        
        </div>
    );
};


export default Pets;