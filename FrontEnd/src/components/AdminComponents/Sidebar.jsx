
import PropTypes from 'prop-types';
import {
    BsGrid1X2Fill
}
    from 'react-icons/bs'
import { Link } from "react-router-dom";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive h-auto " : "h-auto"} >
            <div className='sidebar-title '>
                <div className='sidebar-brand'>
                    <img className='w-20' src='/Images/Krity_logo.png' />
                </div>
                <span className='icon close_icon bg-danger' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list text-center  flex flex-col gap-4  justify-center '>
                <li className='sidebar-list-item items-center text-white ' style={{ backgroundColor: "rgb(5,118,185)" }}>
                    <Link to="/Admin">
                        <div className='flex items-center justify-center gap-2 h-14'>
                            <div><BsGrid1X2Fill className='icon text-center' /></div>
                            <div>complaint Dashboard</div>
                        </div>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/log-complaint' >
                        Log a Compalint
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/My-complaint' >
                        My Compalint (YTD)
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Pending-Complaints' >
                        Pending Complaints
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Complete-Complaints' >
                        Completed Complaints
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
Sidebar.propTypes = {
    openSidebarToggle: PropTypes.bool.isRequired,
    OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar


