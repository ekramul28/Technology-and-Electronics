import { useLoaderData } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";

const BrandProducts = () => {
    const brandProducts = useLoaderData();

    return (
        <div>

            <div>
                <div className="carousel w-full md:h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/r41hVjC/laptop-cover-digital-device.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="text-white ">❮</a>
                            <a href="#slide2" className="text-white ">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative  w-full">
                        <img src="https://i.ibb.co/j4TYgkC/landscape-nature-scene-tv-appliance-generative-ai.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-white ">❮</a>
                            <a href="#slide3" className=" text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative   w-full">
                        <img src="https://i.ibb.co/VTwJdGh/headphones-stereo-equipment-single-object-technology-generated-by-ai.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className=" ">❮</a>
                            <a href="#slide4" className=" ">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative  w-full">
                        <img src="https://i.ibb.co/R7zyQq2/blank-phone-screen-purple-background.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className=" ">❮</a>
                            <a href="#slide1" className=" ">❯</a>
                        </div>
                    </div>
                </div>
            </div>
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