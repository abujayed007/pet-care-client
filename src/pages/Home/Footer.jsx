import {  FaFacebookF, FaInstagram, FaSnapchat } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral-400 text-neutral-content">
                <aside>
                    <img className="w-20 text-white" src="https://cdn-icons-png.flaticon.com/512/107/107777.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="text-xl font-bold text-black">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                       <Link><FaFacebookF className=" rounded-2xl w-8 h-8 bg-blue-500"/></Link> 
                       <Link><FaInstagram className=" rounded-2xl w-8 h-8 text-[#DC00B2]"/></Link> 
                       <Link><FaSnapchat className=" rounded-2xl w-8 h-8 bg-yellow-400 text-white"/></Link> 
                       
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;