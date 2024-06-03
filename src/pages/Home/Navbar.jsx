import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/category'>Categories</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/service'>Service</Link></li>
    </>
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
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;