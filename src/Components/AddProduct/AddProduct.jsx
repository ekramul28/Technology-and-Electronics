
const AddProduct = () => {
    return (
        <div>
            <form className="bg-stone-300 p-20">
                <h1 className="text-center mb-6 font-bold text-3xl">You can Add Product Hear</h1>

                <div className="flex justify-center gap-8 ">
                    <div >
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Name</span>
                                </label>
                                <div className="">
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Image</span>
                                </label>
                                <div className="">
                                    <input type="text" name="image" placeholder="Image" className="input input-bordered w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Type</span>
                                </label>
                                <div className="">
                                    <input type="text" name="type" placeholder="Type" className="input input-bordered w-[400px] pr-16" />
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
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Short description</span>
                                </label>
                                <div className="">
                                    <input type="text" name="description" placeholder="Short description" className="input input-bordered w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Product Rating</span>
                                </label>
                                <div className="">
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-[400px] pr-16" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                    <input type="button" value="Submit" className="btn bg-yellow-500 text-white w-[835px] border-none" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;