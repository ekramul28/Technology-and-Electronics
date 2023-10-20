import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import Login from "../Components/Login/Login";
import BrandProduct from "../Components/BrandProducts/BrandProducts";
import Update from "../Components/Update/Update";
import Register from "../Components/Register/Register";
import NoPage from "../Components/404 pag/Nopage";
import ProtectRout from "../Components/ProtactRout/ProtactRout";
import Details from "../Components/Details/Details";
import MyCard from "../Components/MyCard/MyCard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NoPage></NoPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <ProtectRout><AddProduct></AddProduct></ProtectRout>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/myCard",
                element: <ProtectRout> <MyCard></MyCard></ProtectRout>,
                loader: () => fetch('http://localhost:5000/card')
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/product/:id",
                element: <BrandProduct></BrandProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <ProtectRout><Update></Update></ProtectRout>,
                loader: () => fetch("http://localhost:5000/product")
                // https://technology-and-electronics-server-lfdm53ol5.vercel.app
            },
            {
                path: '/details/:id',
                element: <ProtectRout><Details></Details></ProtectRout>,
                loader: () => fetch("http://localhost:5000/product")

            }
        ]


    },
]);

export default router;