import { VscThreeBars } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const navLinks = <>
        <li><Link to='/dashboard/profile'>My Profile</Link></li>
        <li><Link to='/dashboard/allpets'>My Pets</Link></li>
        <li><Link to='/dashboard/addpet'>Add For Adoption</Link></li>
        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
        <li><Link to='/'>Home</Link></li>
    </>
    return (
    

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex  justify-start">
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><VscThreeBars className="text-3xl" /></label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl font-medium">

                    {navLinks}
                </ul>
                
            </div>
        </div>
    );
};

export default DashboardLayout;

