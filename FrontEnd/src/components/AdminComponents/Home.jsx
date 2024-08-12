import { Outlet } from "react-router-dom"
function Home() {
    return (
        <main className='main-container 500'>
            <div className='main-title'>
                
                <Outlet />
            </div>
        </main>
    )
}
export default Home