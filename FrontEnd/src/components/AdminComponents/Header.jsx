import PropTypes from 'prop-types';

import { BsHouse, BsJustify, BsPersonCircle }
    from 'react-icons/bs'

function Header({ OpenSidebar }) {
    const storedDealer = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <header className='header  text-white ' style={{ backgroundColor: "rgb(5, 118, 185)" }} >
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>

            <div className="flex space-x-4 header-left">
                <span>Credit Limit: ₹0.00</span>
                <span>Credit Expose: ₹0.00</span>
                <span>Credit Available: ₹-9164.79</span>
            </div>
            <div className='header-right cursor-pointer'>
                <BsHouse className='icon' />
            </div>
            <div className='header-right cursor-pointer flex items-center gap-2'>
                <div><BsPersonCircle className='icon' /></div>
                <div>
                    <div>{storedDealer.UserName}</div>
                    <div>{storedDealer.FirstName}</div>
                </div>
            </div>
            {/* <div className='header-right cursor-pointer'>
                
            </div> */}

        </header>
    )
}

Header.propTypes = {
    OpenSidebar: PropTypes.func.isRequired,

};
export default Header