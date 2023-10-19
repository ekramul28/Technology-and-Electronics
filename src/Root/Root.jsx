import { Outlet } from "react-router-dom";
import NavBer from "../Components/header/Navber";
import AOS from 'aos';
import Footer from "../Components/footer/Footer";
const Root = () => {
    AOS.init();
    return (
        <div className="container mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;