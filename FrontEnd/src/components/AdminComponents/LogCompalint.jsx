import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function LogCompalint() {
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const navigate = useNavigate();
    const handleFileChange1 = (event) => {
        setSelectedFile1(event.target.files[0]);
    };
    const handleFileChange2 = (event) => {
        setSelectedFile2(event.target.files[0]);
    };
    const handleFileChange3 = (event) => {
        setSelectedFile3(event.target.files[0]);
    };
    const [inv, setInv] = useState("")
    async function checkInvoice(e) {
        const invoiceNoValue = e.target.value;
        setInvoiceNO(invoiceNoValue);
        try {
            const res = await axios.post("http://localhost:8000/dealer/check-Invoice", {
                InvoiceNo: invoiceNoValue,
            });
            console.log(res.data.message);

            if (res.status === 201) {
                setInv("Already Registered with this Invoice Number");
            } else {
                setInv("");
            }
        } catch (err) {
            console.error(err);
        }
    }


    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    // const [responsible, setResponsible] = useState('')
    const [ConcernedDept, setConcernedDept] = useState("");
    const [batchNo, setBatchNumber] = useState(0);
    const [InvoiceNo, setInvoiceNO] = useState(null);
    const [InvoiceDate, setInvoiceDate] = useState(null);
    const [IssueDescription, setIssueDescription] = useState("");
    const [SKUCode, setSKUCode] = useState(0);
    const [DealerRemark, setDealerRemark] = useState("");
    const [Quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState();
    const [subCategory, setSubCategory] = useState();
    const [Repetitive, setRepetitive] = useState('No');
    const storedDealer = JSON.parse(localStorage.getItem("currentUser"));
    const [isUploading, setIsUploading] = useState(false);
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get(
                "http://localhost:8000/dealer/categories"
            );
            setCategories(response.data);
            setConcernedDept(response.data.departmentName);
        };
        fetchCategories();
    }, []);
    async function makeCompalint() {
        setIsUploading(true);
        console.log(selectedFile1);
        try {
            const formData = new FormData();
            formData.append("UserName", storedDealer.UserName);
            formData.append("batchNo", batchNo);
            formData.append("InvoiceNo", InvoiceNo);
            formData.append("IssueDescription", IssueDescription);
            formData.append("SKUCode", SKUCode || 0);
            formData.append("DealerRemark", DealerRemark);
            formData.append("Quantity", Quantity);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            if (InvoiceDate) {  

                formData.append("InvoiceDate", InvoiceDate);
            }
            formData.append("Repetitive", Repetitive);
            formData.append("ConcernedDept", ConcernedDept);
            if (selectedFile1) formData.append("Image1", selectedFile1);
            if (selectedFile2) formData.append("Image2", selectedFile2);
            if (selectedFile3) formData.append("Image3", selectedFile3);
            const res = await axios.post(
                "http://localhost:8000/dealer/complaint",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(res.data);
            Swal.fire({
                title: `Compalint Registred`,
                showClass: {
                    popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
                },
                hideClass: {
                    popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
                },
            });
            window.location.href = 'https://udaan.kritiindia.com/#/';
        } catch (error) {

            Swal.fire({
                title: `Something Went Wrong`,
                showClass: {
                    popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
                },
                hideClass: {
                    popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
                },
            });
        } finally {
            setIsUploading(false);
        }
    }


    const handleCategoryChange = async (e) => {
        const categoryId = e.target.value;
        const selectedCategory = categories.find(
            (cat) => cat.id === parseInt(categoryId, 10)
        );
        setCategory(selectedCategory?.name);
        setConcernedDept(selectedCategory?.departmentName);
        const response = await axios.get(
            `http://localhost:8000/dealer/categories/${categoryId}/subcategories`
        );
        setSubcategories(response.data);
    };
    return (
        <>
            <div className="container mx-auto p-1">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold mb-2">Issue Detail</h2>
                        <label className="block mb-1 text-xs font-semibold">
                            Issue Category <span className="text-red-500"> * </span>
                        </label>
                        <select
                            className="border rounded p-2 w-full text-sm "
                            onChange={(e) => {
                                setCategory(e.target.options[e.target.selectedIndex].text);
                                handleCategoryChange(e);
                            }}
                        >
                            <option className="text-sm" value="">
                                Select Category
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <label className="block mb-1 mt-4 text-xs font-semibold ">
                            Issue Sub Category *
                        </label>
                        <select
                            className="border rounded p-2 w-full text-sm"
                            onChange={(e) =>
                                setSubCategory(e.target.options[e.target.selectedIndex].text)
                            }
                        >
                            <option value="" className="text-sm">
                                Select Sub Category
                            </option>
                            {subcategories.map((subcategory) => (
                                <option key={subcategory.id} value={subcategory.id}>
                                    {subcategory.name}
                                </option>
                            ))}
                        </select>

                        <div className="relative mb-3 mt-4" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                Responsibility
                            </label>
                            <input
                                type="text"
                                className="peer block min-h-[auto] bg-gray-200 w-full rounded border-0  px-3 py-[0.32rem] leading-[2.15] outline-none  focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput2"
                                placeholder="Responsibility"
                            />
                        </div>
                        <div className="relative mb-3 mt-4" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                Concerned Dept *
                            </label>
                            <input
                                type="text"
                                className="peer block min-h-[auto] bg-gray-200 w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-none focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Concerned Dept "
                                defaultValue={ConcernedDept}
                                disabled
                            />
                        </div>
                        <div className="relative mb-3 mt-4" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                Batch No.
                            </label>
                            <input
                                onChange={(e) => setBatchNumber(e.target.value)}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border border-black px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-black focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Batch No"
                            // defaultValue={batchNo}
                            />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold mb-2">Invoice Details</h2>
                        <label className="block mb-1 mt-2 text-xs font-semibold">
                            Issue Description
                        </label>
                        <textarea
                            onChange={(e) => setIssueDescription(e.target.value)}
                            className="border rounded p-2 w-full"
                            rows="4"
                        ></textarea>
                        <div className="relative mb-3 mt-2" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                SKU Code
                            </label>
                            <input
                                onChange={(e) => setSKUCode(e.target.value)}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border border-black px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-black focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="SKU Code"
                            // defaultValue={SKUCode}
                            />
                        </div>
                        <label className="block mb-1 text-xs mt-2 font-semibold">
                            Dealer Remarks <span className="text-red-600">*</span>{" "}
                        </label>
                        <textarea
                            onChange={(e) => setDealerRemark(e.target.value)}
                            className="border rounded p-2 w-full"
                            rows="4"
                        ></textarea>
                        <div className="relative mb-3 mt-4" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                Invoice No.
                            </label>
                            <input
                                onChange={(e) => checkInvoice(e)}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border border-black px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-black focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Invoice No"
                            />
                            {inv && <p className="text-red-600" >{inv}</p>}
                        </div>
                        <label className="block mb-1 mt-2 text-xs font-semibold ">
                            Invoice Date
                        </label>
                        <input
                            onChange={(e) => setInvoiceDate(e.target.value || null)}
                            type="date"
                            className="border rounded p-2 w-full"
                            max={new Date().toISOString().split("T")[0]}
                        />
                        <div className="relative mb-3 mt-4" data-twe-input-wrapper-init>
                            <label
                                className="text-xs font-semibold"
                                htmlFor="exampleFormControlInput2"
                            >
                                Quality
                            </label>
                            <input
                                onChange={(e) => setQuantity(e.target.value)}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border border-black px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-black focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Quality"
                            />

                            <label className="block mb-1 mt-3 text-xs font font-semibold">
                                Repetitive
                            </label>

                            <select
                                className="border rounded p-2 w-full text-sm"
                                onChange={(e) => setRepetitive(e.target.value)}
                                value={Repetitive}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold mb-2">Picture Upload</h2>
                        <label className="block mb-1">Picture 1</label>
                        <input
                            type="file"
                            className="border rounded p-1 w-full text-sm bg-slate-100"
                            onChange={handleFileChange1}
                        />
                        <span className="text-zinc-500 text-sm">No file chosen</span>
                        <label className="block mb-1 mt-2">Picture 2</label>
                        <input
                            type="file"
                            className="border rounded p-1 w-full text-sm bg-slate-100"
                            onChange={handleFileChange2}
                        />
                        <span className="text-zinc-500 text-sm">No file chosen</span>
                        <label className="block mb-1 mt-2">Picture 3</label>
                        <input
                            type="file"
                            className="border rounded p-1 w-full text-sm bg-slate-100"
                            onChange={handleFileChange3}
                        />
                        <span className="text-zinc-500 text-sm">No file chosen</span>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button

                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Reset
                    </button>
                    <button
                        onClick={makeCompalint}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {" "}
                        {isUploading ? "Please wait..." : "Submit"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default LogCompalint;
