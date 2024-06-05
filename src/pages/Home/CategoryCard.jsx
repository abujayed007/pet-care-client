
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
    console.log(data);
    return (
        <Link to={`/type/${data?.type}`}>
            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{data?.name}</h2>
                </div>
                <figure><img className='w-72 h-72 rounded-lg' src={data?.imageUrl} alt="Shoes" /></figure>
            </div>
        </Link>
    );
};

export default CategoryCard;