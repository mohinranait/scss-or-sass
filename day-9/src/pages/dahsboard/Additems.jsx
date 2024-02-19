

const Additems = () => {
    return (
        <div className="w-full">
            <div className="px-12">
                <div className="text-center py-12">
                    <h1 className="text-2xl pb-2 text-blue-600 font-bold">Add some Itesm</h1>
                    <p>if you want to add some items you can add.</p>
                </div>
                <form>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Place Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            {...('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">hwo many star or ratting</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                {...('Ratings', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Locations</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                {...('location', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="thailand">thailand</option>
                                <option value="Privateship">Privateship</option>
                                <option value="Switzerland">Switzerland</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...('Price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipi */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipi Details</span>
                        </div>
                        <textarea
                            {...('descriptionOne', { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Bio"></textarea>
                    </label>

                    <div className="form-control w-full my-6">
                        <input {...('images', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="text-center">
                        <button className="btn hover:bg-blue-600 hover:border-blue-600 hover:text-white w-[300px]">
                            Add items
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Additems