
const Welcome = () => {
    return (
        <div className="my-10">
            <div data-aos="fade-down" className="md:flex items-center justify-center">
                <div className="md:w-1/2">
                    <h1 className="font-bold text-center p-3 md:text-left text-2xl lg:text-4xl my-8">WELCOME TO <span className="text-yellow-500">Random</span></h1>
                    <p className="font-normal lg:text-lg p-3">Welcome to the exciting world of technology! In a rapidly evolving digital landscape, we are thrilled to have you join us on this journey of innovation and discovery. Whether you're a seasoned tech enthusiast or just starting to explore the vast realm of possibilities, our mission is </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center" >
                    <img src="https://i.ibb.co/rySBPhD/OIF.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;