import  { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { Link } from 'react-router-dom';
import TotalPets from './TotalPets';

const AllPets = () => {
    const [pets, setPets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://pet-care-server-gilt.vercel.app/pets')
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(data);
            })
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        // const searchData = e.target.search.value;
        // fetch(`https://pet-care-server-gilt.vercel.app/pets?name=${search}`)
        // .then(res => res.json())
        //     .then(data => {
        //         setSearch(data)
        //         console.log(data);
        //     })
        // console.log(searchData);
    }


    return (
        <div className="flex justify-center ">
            <div>

                <h2 className="text-3xl text-center font-bold my-10 mt-20">All Pets</h2>
                <div className="flex justify-center my-10">
                    <form onSubmit={handleSearch} className="flex space-x-5 ">
                        <input type="search" name="search" className="border border-slate-600 p-2 rounded-md w-[400px]" id="" />
                        <input type="submit" value="Search" className="btn bg-slate-500 p-2 rounded-xl text-white" />
                    </form>
                </div>
                <div>
                    <div className="lg:grid grid-cols-3 gap-5">
                        {
                            pets.map(pet => <TotalPets key={pet._id} pet={pet} />)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllPets;