

const AddProduct = () => {
    return (
        <div className="w-full shadow-slate-300  p-10">
            <h2 className="text-5xl text-center font-bold my-6">Add Your Product</h2>
            <form>
                <div className="lg:grid w-full grid-cols-2 gap-x-6">
                    <div>
                        <label>Type</label>
                        <input type="text" name="type" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Expire Date</label>
                        <input type="text" name="expire" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                    <div>
                        <label>Other Details</label>
                        <textarea type="text" name="type" className="w-full border p-1 border-gray-500 rounded" />
                    </div>
                </div>
                <div className="flex justify-center items-center my-5">
                    <input className="btn text-white font-semibold text-2xl bg-[#20A8D2]" value="Add Pet" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;