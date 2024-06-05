import { useLoaderData } from "react-router-dom";


const TotalPetCardDetails = () => {
    const pet = useLoaderData()
    const { name, image, breed, details, location, food,age,color } = pet

    console.log(pet);
    return (
        <div className="flex justify-center p-20">
            <div className="bg-base-100 shadow-xl rounded-xl p-5">
                <img className="w-[1200px] h-[600px]" src={image} />
                <div className="mt-10">
                    <h2 className="text-3xl">{name} ({breed})</h2>
                    <p>{details}</p>
                    <div>
                        <div >Age : {age}</div>
                        <div >Location : {location}</div>
                        <div >Breed : </div>
                        <div >Color : {color}</div>
                        <div >Food Habit : {food}</div>
                    </div>
                </div>
                <button className="btn bg-blue-500 w-8/12 mx-auto flex text-xl m-3 text-white">Request For Adoption</button>
            </div>
        </div>
    );
};

export default TotalPetCardDetails;