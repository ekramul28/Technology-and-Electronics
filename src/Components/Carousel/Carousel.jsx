
const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full md:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/r41hVjC/laptop-cover-digital-device.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-white ">❮</a>
                        <a href="#slide2" className="text-white ">❯</a>
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <div className="ml-10">
                            <h1 className="mb-5 text-5xl text-white font-bold">Top Trending
                                Drone Cam 2023</h1>
                            <p className="mb-5 text-white">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                            <button className="btn bg-yellow-500 border-none text-white">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative  w-full">
                    <img src="https://i.ibb.co/j4TYgkC/landscape-nature-scene-tv-appliance-generative-ai.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white ">❮</a>
                        <a href="#slide3" className=" text-white">❯</a>
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <div className="ml-10">
                            <h1 className="mb-5 text-5xl text-white font-bold">Top Trending
                                Drone Cam 2023</h1>
                            <p className="mb-5 text-white">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                            <button className="btn bg-yellow-500 border-none text-white">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative   w-full">
                    <img src="https://i.ibb.co/VTwJdGh/headphones-stereo-equipment-single-object-technology-generated-by-ai.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className=" ">❮</a>
                        <a href="#slide4" className=" ">❯</a>
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <div className="ml-10">
                            <h1 className="mb-5 text-5xl text-white font-bold">Top Trending
                                Drone Cam 2023</h1>
                            <p className="mb-5 text-white">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                            <button className="btn bg-yellow-500 border-none text-white">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative  w-full">
                    <img src="https://i.ibb.co/R7zyQq2/blank-phone-screen-purple-background.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className=" ">❮</a>
                        <a href="#slide1" className=" ">❯</a>
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <div className="ml-10">
                            <h1 className="mb-5 text-5xl text-slate-700 font-bold">Top Trending
                                Drone Cam 2023</h1>
                            <p className="mb-5 text-slate-700">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                            <button className="btn bg-yellow-500 border-none ">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;