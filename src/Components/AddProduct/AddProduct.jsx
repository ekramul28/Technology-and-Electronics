import Swal from 'sweetalert2'
const AddProduct = () => {
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

        fetch('https://technology-and-electronics-server-iaxlkmjhg.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Product add successful',
                        'You clicked the button!',
                        'success'
                    )
                    form.reset();
                }
                console.log(data);
            })

    }
    return (
        <div>
            <form onSubmit={handelForm} className="bg-slate-300 p-20">
                <h1 className="text-center mb-6 font-bold text-3xl">You can <span className='text-yellow-500'>Add Product</span> Hear</h1>

                <div className=" md:flex justify-center gap-8 ">
                    <div className='w-80 md:w-[300px] lg:w-[400px]'>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Name</span>
                                </label>
                                <div className="">
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-60 md:w-[300px] lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your Product Image</span>
                                </label>
                                <div className="">
                                    <input type="text" name="image" placeholder="Image" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Type</span>
                                </label>
                                <div className="">
                                    <input type="text" name="type" placeholder="Type" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
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
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Brand Name</span>
                                </label>
                                <div className="">
                                    <input type="text" name="branName" placeholder="Brand Name" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Rating</span>
                                </label>
                                <div className="">
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
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
                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-60 md:w-[550px] lg:w-[835px] pr-16" required />
                        </div>
                    </fieldset>
                </div>
                <div className="flex justify-center pt-10">
                    <input type="submit" value="Add Product " className="btn bg-yellow-500 text-white md:w-[550px] lg:w-[835px] border-none" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;