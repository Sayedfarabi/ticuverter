import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import brandImage from '../../assets/images/logo/logo.png'


const Navbar = () => {

    const location = useLocation()
    const homeLocation = location?.pathname === "/";
    const AboutLocation = location?.pathname === "/about-us";
    const TimeLocation = location?.pathname === "/time-converter";
    const CurrencyLocation = location?.pathname === "/currency-converter";

    return (
        <section className='bg-gradient-to-r from-orange-50 to-[#ffa6af]'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <li className={`my-2 md:mx-4 hover:text-orange-600 ${homeLocation && "text-orange-600"}`}>
                                <Link to={"/"}>Home</Link>
                            </li>

                            <li className={`my-2 md:mx-4 hover:text-orange-600 ${CurrencyLocation && "text-orange-600"}`}>
                                <Link to={"/currency-converter"}>Currency</Link>
                            </li>

                            <li className={`my-2 md:mx-4 hover:text-orange-600 ${TimeLocation && "text-orange-600"}`}>
                                <Link to={"/time-converter"}>Time</Link>
                            </li>

                            <li className={`my-2 md:mx-4 hover:text-orange-600 ${AboutLocation && "text-orange-600"}`}>
                                <Link to={"/"}>About us</Link>
                            </li>



                        </ul>
                    </div>
                    <div className='hidden md:inline'>
                        <img className='h-12 w-12' src={brandImage} alt="Logo" />
                    </div>
                    <div>
                        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                            <p>T<span className='text-orange-500'>i</span>C<span className='text-sky-500'>u</span>verter</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1 font-semibold">
                        <li className={`mx-2 md:mx-4 hover:text-orange-600 ${homeLocation && "text-orange-600"}`}>
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li className={`mx-2 md:mx-4 hover:text-orange-600 ${CurrencyLocation && "text-orange-600"}`}>
                            <Link to={"/currency-converter"}>Currency</Link>
                        </li>

                        <li className={`mx-2 md:mx-4 hover:text-orange-600 ${TimeLocation && "text-orange-600"}`}>
                            <Link to={"/time-converter"}>Time</Link>
                        </li>

                        <li className={`mx-2 md:mx-4 hover:text-orange-600 ${AboutLocation && "text-orange-600"}`}>
                            <Link to={"/"}>About us</Link>
                        </li>



                    </ul>
                </div>

            </div>
        </section>
    );
};



export default Navbar;