import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Swal } from 'sweetalert2'

function DealerLogIn() {
    const [UserName, setUserName] = useState("")
    // const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    const data = {
        UserName
    }
    async function logInController() {
        console.log(UserName);
        let res = {}
        try {
            res = await axios.post('http://localhost:8000/dealer/signin', data);
            console.log(res.data.dealer);
            if (res.data.dealer) {
                localStorage.setItem('currentUser', JSON.stringify(res.data.dealer))
            }
            navigate('/')
        } catch (err) {
            alert("Something went wrong")
            console.log(err);
            console.log(err);
        }
    }
    return (<>

        <div className="flex  justify-center items-center rounded-lg  h-full">
            <img src="../../../public/Images/KRITI group.png" alt="KRITI group" className="max-w-xs md:max-w-sm h-auto w-20" />
        </div>
        <h1 className="text-center text-2xl text-gray-400">A Family of 500+ Dealers Growing Everyday!</h1>

        <div className="py-15 mt-2">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2" >

                    <p className=" text-xs text-gray-600 ">Welcome back!</p>

                    <div className="mt-4 flex items-center justify-between">

                        <a href="#" className=" text-center text-gray-500 ">Sign in to continue in DMS</a>

                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">User Name</label>
                        <input onChange={(e) => setUserName(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    {/* <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>

                        </div>
                        <input onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                    </div> */}
                    <div className="mt-8">
                        <button onClick={logInController} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                    </div>

                </div>
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: `url('https://cdn.dotpe.in/longtail/store-items/3797226/SA0Oy8p7.jpeg')` }}>
                </div>
            </div>
        </div>
        <footer>
            <p className=" text-center p-6"> &#169;2024 <span className="font-bold"> Kriti Industries India Limited</span> </p>
        </footer>
    </>);
}

export default DealerLogIn;