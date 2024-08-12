
import {
    BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart3, BsFileText, BsExclamationCircle, BsFileBarGraph, BsChevronUp, BsChevronDown
}
    from 'react-icons/bs'
import { Link } from "react-router-dom";

import { useState } from 'react';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [showNested, setShowNested] = useState(false);
    const [compaint, setComplaint] = useState(false)
    const [showReport, setShowReport] = useState(false)

    const toggleNested = () => {
        setShowNested(!showNested);
        setComplaint(false)
        setShowReport(false)
    };
    const toggleCompaint = () => {
        setComplaint(!compaint)
        setShowNested(false);
        setShowReport(false)
    }
    const toggleReport = () => {
        setShowReport(!showReport)
        setComplaint(false)
        setShowNested(false);
    }
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive h-auto " : "h-auto"} >
            <div className='sidebar-title '>
                <div className='sidebar-brand'>
                    <img className='w-20' src='/Images/Krity_logo.png' />
                </div>
                <span className='icon close_icon bg-danger' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list text-center items-center  '>
                <li className='sidebar-list-item items-center text-white ' style={{ backgroundColor: "rgb(5,118,185)" }}>
                    <Link to="/Admin">
                        <BsGrid1X2Fill className='icon text-center' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <div className='flex flex-col'>
                        <Link to='/Admin/AdminSignup'>
                            <BsCart3 className='icon' /> Create Sales Order
                        </Link>
                        <span>(Mobile)</span>
                    </div>

                </li>
                <li className='sidebar-list-item' onClick={toggleNested} >
                    <Link to=''>
                        <BsCart3 className='icon' /> Sales Order
                    </Link>
                </li>
                {
                    showNested && (
                        <div className='text-sm flex flex-col justify-between items-center gap-3 mt-2  w-full hover:text-white '>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    Create Sales Order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    View My sales order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    Draft Sales Order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    My Ladge (YTD)
                                </Link>
                            </li>
                        </div>
                    )
                }


                <li className='sidebar-list-item ' onClick={toggleCompaint}>
                    <Link href="">
                        <BsExclamationCircle className='icon' /> Compalints
                    </Link>

                </li>
                {
                    compaint && (
                        <div className='text-sm flex flex-col justify-between items-center gap-3 mt-2  w-full hover:text-white '>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    Log a Compalint
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    My Compalint (YTD)
                                </Link>
                            </li>
                        </div>
                    )
                }

                <li className='sidebar-list-item'>
                    <Link href="">
                        <BsFileText className='icon' /> Document
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={toggleReport} >
                    <Link href="" className=''>
                        <BsFileBarGraph className='icon' /> Reports
                    </Link>
                </li>
                {
                    showReport && (
                        <div className='text-sm flex flex-col justify-between items-center gap-3 mt-2  w-full hover:text-white '>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    Create Sales Order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    View My sales order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    Draft Sales Order
                                </Link>
                            </li>
                            <li className='sidebar-list-item'>
                                <Link href="">
                                    My Ladge (YTD)
                                </Link>
                            </li>
                        </div>
                    )
                }

            </ul>
        </aside>
    )
}

export default Sidebar


