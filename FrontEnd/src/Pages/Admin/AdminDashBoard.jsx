import { useState } from 'react'
import '../../components/AdminComponents/Admin.css'
import Header from '../../components/AdminComponents/Header'
import Sidebar from '../../components/AdminComponents/Sidebar'
import Home from '../../components/AdminComponents/Home'

function AdminDashBoard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home />
        </div>
    )
}

export default AdminDashBoard