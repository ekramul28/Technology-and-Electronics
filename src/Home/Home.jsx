import AboutUs from "../Components/About us/Aboutus";
import Banner from "../Components/Banner/Banner";
import Brand from "../Components/Brands/Brands";
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return (
        <div className="dark:bg-slate-800" >
            <Banner></Banner>
            <Brand></Brand>
            <Welcome></Welcome>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;