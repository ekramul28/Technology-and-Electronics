
const Banner = () => {
    return (
        <div className="mx-2">

            <div className="hero  h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/G3mPyd0/laughing-man-using-smarpthone-street.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  ">
                    <div className="md:mr-80">
                        <h1 className="mb-5 text-5xl text-white font-bold">Top Trending
                            Drone Cam 2023</h1>
                        <p className="mb-5 text-white">Exclusive Offer <span className="text-yellow-500"> -10% </span> Off This Week.</p>
                        <button className="btn bg-yellow-500 border-none text-white">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;