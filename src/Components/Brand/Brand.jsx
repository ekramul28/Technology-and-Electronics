import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brand = ({ brands }) => {
    return (

        <div>
            <Link to={`/product/${brands.name}`}>
                <div>
                    <div className="card bg-base-100 hover:shadow-xl border-2 mx-2">
                        <figure><img className="h-[100px] m-2 p-3" src={brands.image_url} alt="Shoes" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title text-2xl ">{brands.name}</h2>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Brand.propTypes = {
    brands: PropTypes.object,
}

export default Brand;