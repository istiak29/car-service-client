import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/service'}>Service</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li>
            {
                user?.email ? (
                    <NavLink to={'/managecheckout'}>Manage Checkouts</NavLink> ) :
                    <NavLink>Profile</NavLink>
                
            }
        </li>
    </>

    const handleLogOut = () => {

        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have been logged Out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.error(error))

    }

    return (
        <div className="mb-12">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className=""> <img src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        { navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-secondary mr-2">Appointment</a>
                    {
                        user ? (<button onClick={handleLogOut} className="btn btn-outline btn-warning">Sign Out</button>) : 
                            <Link to={'/login'} className="btn btn-outline btn-warning">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;