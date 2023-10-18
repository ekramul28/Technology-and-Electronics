import { Link } from "react-router-dom";

const Brand = ({ brands }) => {
    return (
        <Link to={`/product/${brands.name}`}>
            <div>
                <div className="card bg-base-100 hover:shadow-xl border">
                    <figure><img className="h-[100px] p-3" src={brands.image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-center">{brands.name}</h2>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Brand;