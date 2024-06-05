import { Link } from "react-router-dom";
import PetCard from "../../components/PetCard";
import { useEffect, useState } from "react";


const Pets = () => {
    const [pets, setPets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(data);
            })
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        // const searchData = e.target.search.value;
        // fetch(`http://localhost:5000/pets?name=${search}`)
        // .then(res => res.json())
        //     .then(data => {
        //         setSearch(data)
        //         console.log(data);
        //     })
        // console.log(searchData);
    }


    return (
        <div className="flex justify-center my-4">
            <div>

                <h2 className="text-3xl text-center font-bold my-10 mt-20">Here is your cute pets</h2>
                <div className="flex justify-center my-10">
                    <form onSubmit={handleSearch} className="flex space-x-5 ">
                        <input type="search" name="search" className="border border-slate-600 p-2 rounded-md w-[400px]" id="" />
                        <input type="submit" value="Search" className="btn bg-slate-500 p-2 rounded-xl text-white" />
                    </form>
                </div>
                <div>
                    <div className="lg:grid grid-cols-3 gap-5">
                        {
                            pets.slice(0, 3).map(pet => <PetCard key={pet._id} pet={pet} />)
                        }
                    </div>
                    <div className="flex justify-center my-4">
                        <Link to='/pets' className="btn bg-green-500 text-white text-center">See All</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Pets;