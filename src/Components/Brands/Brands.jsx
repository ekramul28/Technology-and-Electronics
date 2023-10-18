import { useEffect, useState } from "react";
import Brand from "../brand/Brand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/src/brand.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })
    }, [])
    console.log(brands);
    return (
        <div className="grid md:grid-cols-2 gap-4 my-8 lg:grid-cols-3">
            {
                brands?.map(brand => <Brand key={brand._id} brands={brand}></Brand>)
            }
        </div>
    );
};

export default Brands;