// import axios from "axios";
// import { useEffect, useState } from "react";
// import Loader from "./Loader";

// function PendingComplaint() {
//     const [complaints, setComplaints] = useState([]);
//     const [loading, setLoading] = useState(true);
//     async function reOpen(ComplaintID) {
//         try {
//             setComplaints((prevComplaints) =>
//                 prevComplaints.map((complaint) =>
//                     complaint.ComplaintID === ComplaintID
//                         ? {
//                             ...complaint,
//                             state: (
//                                 <>
//                                     <div class="flex  justify-center items-center   gap-2 dark:invert">
//                                         <span class="sr-only">Loading...</span>
//                                         <div class="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
//                                         <div class="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
//                                         <div class="h-2 w-2 bg-black rounded-full animate-bounce"></div>
//                                     </div>
//                                 </>
//                             ),
//                         }
//                         : complaint
//                 )
//             );
//             const res = await axios.post("http://localhost:8000/dealer/reopen", {
//                 ComplaintID,
//             });
//             if (res.status == 200) {
//                 getdata();
//             } else {
//                 console.log(res.data);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         fetchComplaintsByStatus()
//     }, []);

//     // Helper function to convert ArrayBuffer to base64
//     const arrayBufferToBase64 = (buffer) => {
//         let binary = "";
//         const bytes = new Uint8Array(buffer);
//         for (let i = 0; i < bytes.byteLength; i++) {
//             binary += String.fromCharCode(bytes[i]);
//         }
//         return window.btoa(binary);
//     };

//     // Helper function to format date in dd-mm-yy format
//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const day = String(date.getDate()).padStart(2, "0");
//         const month = String(date.getMonth() + 1).padStart(2, "0");
//         const year = String(date.getFullYear()).slice(2);
//         return `${day}-${month}-${year}`;
//     };

//     async function fetchComplaintsByStatus() {
//         setLoading(true);
//         try {
//             const res = await axios.post('http://localhost:8000/dealer/statusComplaint', { status: "Pending" });
//             if (res.status === 200) {
//                 setComplaints(res.data.complaints);
//             } else {
//                 console.log(res.data);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//         finally {
//             setLoading(false);
//         }
//     }

//     if (loading) {
//         return <Loader />;
//     }
//     return (
//         <>
//             <div className="bg-gray-700 ">
//                 <div className="float-end ">

//                 </div>
//                 <div className="relative overflow-x-auto">
//                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
//                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3">
//                                     Sr.No
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Category
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Subcategory
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Department
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Batch No.
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Invoice No
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Invoice Date
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Quantity
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     SKU Code
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Issue Description
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Remark
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Images
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Images
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Images
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Status
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Complaint Date
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="cursor-pointer">
//                             {complaints.map((complaint, index) => (
//                                 <tr
//                                     key={complaint.ComplaintID}
//                                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                                 >
//                                     <td className="px-6 py-4 hover:text-white">{index + 1}</td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.category}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.subCategory}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.ConcernedDept}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.batchNo || "N/A"}
//                                     </td>
//                                     {/* <td className="px-6 py-4">{complaint.InvoiceNo ? complaint.InvoiceNo : "N/A"}</td> */}
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.InvoiceNo != null || complaint.InvoiceNo != ""
//                                             ? complaint.InvoiceNo
//                                             : "N/A"}
//                                     </td>

//                                     <td className="px-6 py-4 w-full hover:text-white ">
//                                         {complaint.InvoiceDate
//                                             ? formatDate(complaint.InvoiceDate)
//                                             : "N/A"}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.Quantity || "N/A"}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.SKUCode || "N/A"}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.IssueDescription || "N/A"}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.DealerRemark || "N/A"}
//                                     </td>

//                                     <td className="px-6 py-4">
//                                         {complaint.Image1 ? (
//                                             <img
//                                                 src={`data:image/jpeg;base64,${arrayBufferToBase64(
//                                                     complaint.Image1.data
//                                                 )}`}
//                                                 alt={`Complaint Image 1`}
//                                                 style={{ maxWidth: "200px", maxHeight: "100px" }}
//                                             />
//                                         ) : (
//                                             "N/A"
//                                         )}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {complaint.Image2 ? (
//                                             <img
//                                                 src={`data:image/jpeg;base64,${arrayBufferToBase64(
//                                                     complaint.Image2.data
//                                                 )}`}
//                                                 alt={`Complaint Image 2`}
//                                                 style={{ maxWidth: "200px", maxHeight: "100px" }}
//                                             />
//                                         ) : (
//                                             "N/A"
//                                         )}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {complaint.Image3 ? (
//                                             <img
//                                                 src={`data:image/jpeg;base64,${arrayBufferToBase64(
//                                                     complaint.Image3.data
//                                                 )}`}
//                                                 alt={`Complaint Image 3`}
//                                                 style={{ maxWidth: "200px", maxHeight: "100px" }}
//                                             />
//                                         ) : (
//                                             "N/A"
//                                         )}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {complaint.state || "N/A"}
//                                     </td>
//                                     <td className="px-6 py-4 hover:text-white">
//                                         {formatDate(complaint.createdAt) || "N/A"}
//                                     </td>


//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default PendingComplaint;


import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function PendingComplaint() {
    const [complaints, setComplaints] = useState([]); // Ensure it's initialized as an empty array
    const [loading, setLoading] = useState(true);

    async function reOpen(ComplaintID) {
        try {
            setComplaints((prevComplaints) =>
                prevComplaints.map((complaint) =>
                    complaint.ComplaintID === ComplaintID
                        ? {
                            ...complaint,
                            state: (
                                <>
                                    <div className="flex justify-center items-center gap-2 dark:invert">
                                        <span className="sr-only">Loading...</span>
                                        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
                                    </div>
                                </>
                            ),
                        }
                        : complaint
                )
            );
            const res = await axios.post("http://localhost:8000/dealer/reopen", {
                ComplaintID,
            });
            if (res.status === 200) {
                fetchComplaintsByStatus();
            } else {
                console.log(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchComplaintsByStatus();
    }, []);

    const arrayBufferToBase64 = (buffer) => {
        let binary = "";
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(2);
        return `${day}-${month}-${year}`;
    };

    async function fetchComplaintsByStatus() {
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:8000/dealer/statusComplaint', { status: "Pending" });
            if (res.status === 200) {
                setComplaints(res.data.complaints || []); // Ensure data is always an array
            } else {
                console.log(res.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="bg-gray-700">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr.No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subcategory
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Batch No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Invoice No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Invoice Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    SKU Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Issue Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Remark
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Images
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Complaint Date
                                </th>
                            </tr>
                        </thead>
                        {Array.isArray(complaints) && complaints.length > 0 ? ( // Guard against undefined
                            <tbody className="cursor-pointer">
                                {complaints.map((complaint, index) => (
                                    <tr
                                        key={complaint.ComplaintID}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 hover:text-white">{index + 1}</td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.category}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.subCategory}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.ConcernedDept}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.batchNo || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.InvoiceNo || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 w-full hover:text-white">
                                            {complaint.InvoiceDate
                                                ? formatDate(complaint.InvoiceDate)
                                                : "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.Quantity || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.SKUCode || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.IssueDescription || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.DealerRemark || "N/A"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {complaint.Image1 ? (
                                                <img
                                                    src={`data:image/jpeg;base64,${arrayBufferToBase64(
                                                        complaint.Image1.data
                                                    )}`}
                                                    alt={`Complaint Image 1`}
                                                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                                                />
                                            ) : (
                                                "N/A"
                                            )}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {complaint.state || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 hover:text-white">
                                            {formatDate(complaint.createdAt) || "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="14" className="px-6 py-4 text-center text-gray-500">
                                        No complaints available
                                    </td>
                                </tr>
                            </tbody>
                            
                        )}
                    </table>
                </div>
            </div>
        </>
    );
}

export default PendingComplaint;

