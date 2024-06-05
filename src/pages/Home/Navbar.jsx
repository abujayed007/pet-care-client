import { useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthProvider";


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/pets'>Pets</Link></li>
    </>

    const handleLogout =()=>{
        logOut()
    }
    return (
        <div className="">
            <div className="navbar fixed z-10 bg-opacity-15 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <VscThreeBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-5 text-lg font-bold">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-2xl text-white">Pet Care</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-2 font-semibold lg:text-lg text-white lg:font-bold">
                        {
                            !user ?
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </> :
                                <div className="flex gap-x-2 items-center">
                                <Link to='/dashboard'>Dashboard</Link>
                                <Link onClick={handleLogout}>Logout</Link>
                                <Link ><img src={user?.photoURL} className="h-10 w-10 rounded-full " /></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;