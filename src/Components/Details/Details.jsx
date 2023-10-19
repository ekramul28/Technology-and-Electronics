import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const find = data.find(product => product._id == id);
    const { _id, name, image, description, price, rating, type, branName } = find;
    const handelBtn = () => {

    }
    return (

        <div className="md:card md:card-side bg-base-100 shadow-xl ">
            <div className="">
                <img className=" h-[500px]" src={image} alt="" />

            </div>
            <div className="">
                <div className="card-body h-[500px]  ">
                    <div className="card-body ">
                        <h2 className="text-3xl font-extrabold">Name:{name}</h2>
                        <p className="text-xl font-bold">Price:{price}</p>
                        <p>
                            <div className="rating">
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            </div>
                        </p>
                        <p className="text-xl font-medium">BranName:{branName}</p>
                        <p className="text-xl font-medium">Type:{type}</p>
                        <p className="text-xl">{description}</p>
                        <div className="card-actions justify-end">
                            <button onClick={handelBtn} className="btn bg-yellow-500 border-none text-white">add card</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Details;