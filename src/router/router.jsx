import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import Login from "../Components/Login/Login";
import BrandProduct from "../Components/BrandProducts/BrandProducts";
import Update from "../Components/Update/Update";
import Register from "../Components/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/login",
                element: <Login></Login>
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
                element: <Update></Update>,
                loader: () => fetch("http://localhost:5000/product")

            }
        ]


    },
]);

export default router;