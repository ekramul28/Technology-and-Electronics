import { useEffect, useState } from "react";
import Brand from "../brand/Brand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })
    }, [])
    console.log(brands);
    return (
        <div className="my-20">
            <h1 className="text-3xl text-center font-extrabold">All Brand</h1>
            <div className="grid md:grid-cols-2 gap-4 my-8 lg:grid-cols-3">
                {
                    brands?.map(brand => <Brand key={brand._id} brands={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Brands;