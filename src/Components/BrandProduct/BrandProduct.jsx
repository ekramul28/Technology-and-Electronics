import { Link } from "react-router-dom";

const BrandProduct = ({ brandProduct }) => {
    console.log(brandProduct);
    const { _id, name, image, description, price, rating, type } = brandProduct;
    return (
        <div className="py-5 ">
            <div className="card  bg-base-100 border hover:shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl h-52 p-3" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Price:{price}</p>
                    <p>Type:{type}</p>
                    <p>
                        <div className="rating">
                            <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                        </div>
                    </p>
                    <p>{description}</p>
                    <div className=" flex gap-2">
                        <Link to={`/details/${_id}`}><button className="btn bg-yellow-500 border-none text-white">Details </button> </Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-yellow-500 border-none text-white">Update </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;