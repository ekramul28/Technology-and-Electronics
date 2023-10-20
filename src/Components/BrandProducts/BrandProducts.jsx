import { useLoaderData } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";
import Carousel from "../Carousel/Carousel";

const BrandProducts = () => {
    const brandProducts = useLoaderData();

    return (
        <div>
            <Carousel></Carousel>
            <div >

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  ">
                    {
                        brandProducts?.map(brandProduct => <BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>)

                    }
                </div>

            </div>
        </div>
    );
};

export default BrandProducts;