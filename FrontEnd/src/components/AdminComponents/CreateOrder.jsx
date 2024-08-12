function CreateOrder() {
    return (<>

        <div className="container mx-auto p-4">
            <div className="mt-4 grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4 ">
                    <div className="mb-4">
                        <label htmlFor="main-category" className="block text-sm font-medium text-zinc-700">Main Category</label>
                        <select id="main-category" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">
                            <option>Agriculture</option>
                            <option>Soya Nugest</option>
                            <option>Refined Oil</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-zinc-700">Category</label>
                        <select id="category" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">
                            <option>DRIP/LATERAL</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="search" className="block text-sm font-medium text-zinc-700">Select Items</label>
                        <input type="text" id="search" placeholder="Search..." className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded-lg float-end">Add To Cart</button>
                    <h2 className="text-lg font-bold mb-4 mt-8">Sales Order Items</h2>
                    <ul className="space-y-2 ">
                        <li>
                            <input type="checkbox" id="item1" className="mr-2" />
                            <label htmlFor="item1">1/4 COCK WITH MAIL & FEMALE OUT LETS (55000548)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="item2" className="mr-2" />
                            <label htmlFor="item2">12MM className-2 LATERALS (500 MTR) (44001561)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="item3" className="mr-2" />
                            <label htmlFor="item3">16MM className-1 LATERALS (300 MTR) (44001184)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="item4" className="mr-2" />
                            <label htmlFor="item4">16MM className-2 LATERALS 100MTR (44004260)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="item5" className="mr-2" />
                            <label htmlFor="item5">16MM className-2 LATERALS 300MTR (44001185)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="item6" className="mr-2" />
                            <label htmlFor="item6">16MM className-2 LATERALS 300MTR (44005174)</label>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 ">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="h-20 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center  ">
                            <div className="p-2">
                                <select name="cars" id="cars" className="  w-full p-2 border border-border rounded">
                                    <option value="volvo">Pick Location <span className="text-red-900 bg-red-600">*</span> </option>
                                    <option value="volvo">Dewas plant</option>
                                    <option value="saab">Jwalior Depot</option>
                                    <option value="mercedes">Gwalior Depot</option>
                                    <option value="audi">Kandla Depot</option>
                                </select>
                            </div>
                            <div className="text-center  p-3 ">
                                <span>Valid From 24-07-2024 To 10-08-2024</span>
                            </div>


                        </div>

                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">

                        <div className="flex justify-between items-center">
                            <div>
                                <span>Create Item</span>
                            </div>
                            <div className="flex space-x-2 mt-4 text-sm">
                                <button className="bg-sky-600 text-white text-sm hover:bg-gray-500  rounded flex items-center">
                                    {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}
                                    <span>Sample File Download</span>
                                </button>
                                {/* <button className="bg-blue-500 text-white rounded-lg">Sample File Download</button> */}
                                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-1 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Excel Upload</button>
                                {/* <button className="bg-green-500 text-white p-2 rounded-lg">Excel Upload</button> */}
                                {/* <button className="bg-red-500 text-white p ">Reset</button> */}
                                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset</button>
                            </div>

                        </div>
                        <div className="mt-4">
                            <p className="font-medium">GST: <span className="font-normal">0.00</span></p>
                            <p className="font-medium">Total: <span className="font-normal">0.00</span></p>
                            <p className="font-medium">Net Value: <span className="font-normal">0.00</span></p>
                        </div>
                        <div className="flex space-x-2 mt-4 float-end">
                            <button className="bg-zinc-300 text-zinc-700 p-2 rounded-lg">Save As Draft</button>
                            <button className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default CreateOrder;