import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
const Update = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const filter = data.find(product => product._id == id);

    const { name, image, description, price, rating, type, branName } = filter
    console.log(filter);
    const handelForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const branName = form.branName.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const value = { name, image, type, price, branName, rating, description, }
        console.log(value)

        fetch(`https://technology-and-electronics-server-lfdm53ol5.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Product Update successful',
                        'You clicked the button!',
                        'success'
                    )

                }
                console.log(data);
            })

    }
    return (
        <div>
            <form onSubmit={handelForm} className=" p-20 bg-slate-100">
                <h1 className="text-center mb-6 font-bold text-3xl">Update your Product </h1>

                <div className=" md:flex justify-center gap-8  ">
                    <div >
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Name</span>
                                </label>
                                <div className="">
                                    <input type="text" name="name" placeholder="Name" defaultValue={name} className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Image</span>
                                </label>
                                <div className="">
                                    <input type="text" name="image" placeholder="Image" defaultValue={image} className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Type</span>
                                </label>
                                <div className="">
                                    <input type="text" name="type" placeholder="Type" defaultValue={type} className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Price</span>
                                </label>
                                <div className="">
                                    <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Brand Name</span>
                                </label>
                                <div className="">
                                    <input type="text" name="branName" placeholder="Brand Name" defaultValue={branName} className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Rating</span>
                                </label>
                                <div className="">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-64 lg:w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center " >
                    <fieldset className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Enter your Product Short description</span>
                        </label>
                        <div className="">
                            <input type="text" name="description" placeholder="Short description" defaultValue={description} className="input input-bordered w-64 md:w-[550px] lg:w-[835px] pr-16" />
                        </div>
                    </fieldset>
                </div>
                <div className="flex justify-center pt-10">
                    <input type="submit" value="Update Product " className="btn bg-yellow-500 text-white md:w-[550px] lg:w-[835px] border-none" />
                </div>
            </form>
        </div>
    );
};

export default Update;