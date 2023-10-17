import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-1/4">
                <h1 className="bg-yellow-500 p-5 font-bold text-center text-white">ALL CATEGORIES</h1>
                <div className="list-none p-5 font-semibold ">
                    <li className="p-2"> <Link>Apple</Link></li>
                    <li className="p-2"> <Link>Samsung</Link></li>
                    <li className="p-2"> <Link>Google</Link></li>
                    <li className="p-2"> <Link>Sony</Link></li>
                    <li className="p-2"> <Link>Intel</Link></li>



                </div>
            </div>
            <div className="hero lg:w-3/4 h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/G3mPyd0/laughing-man-using-smarpthone-street.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div data-aos="fade-up-right" className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">Top Trending
                            Drone Cam 2023</h1>
                        <p className="mb-5">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                        <button className="btn bg-yellow-500 border-none text-white">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;