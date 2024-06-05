import { useLoaderData } from "react-router-dom";
import PetTypeCard from "./PetTypeCard";
import { useState } from "react";


const PetsTypes = () => {
    const petTypes = useLoaderData()
    const [types, setTypes] = useState(petTypes)
    
    return (
        <div className="min-h-screen  ">
            <div>
                <h2 className="text-4xl text-center font-bold pt-24">Category</h2>
                <div className="lg:grid grid-cols-3 px-20 py-6">
                    {
                        types.map(type => <PetTypeCard key={type._id} type={type} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default PetsTypes;