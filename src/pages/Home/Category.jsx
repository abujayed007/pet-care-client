import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch('https://pet-care-server-snowy.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategoryData(data)
            })
    }, [])
    return (
        <div className="flex justify-center">

            <div>
                <div>
                    <h2 className="text-3xl text-center  font-extrabold">Categories</h2>
                </div>
                <div className="lg:grid grid-cols-4  gap-5">
                    {
                        categoryData.map(data => <CategoryCard key={data._id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;


