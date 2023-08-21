//
//
//

import { useState, useRef, useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";

function Header() {
    const [show, setShow] = useState<boolean>(false);

    const handleDropDownLink = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <header className="relative flex w-full h-12 lg:h-14 bg-blue-500 items-center justify-center">
                <div className="lg:absolute lg:flex lg:mx-auto lg:left-5 lg:inset-y-0 text-xl lg:text-2xl">
                    <Link
                        to="/"
                        className="my-auto left-0 px-2 hover:bg-white hover:rounded-md hover:bg-opacity-50 text-white font-bold hover:text-blue-700"
                    >
                        #WebApp
                    </Link>
                </div>
                <nav className="absolute right-2 lg:hidden">
                    <button onClick={handleDropDownLink}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </header>
            <div
                className={`z-50 absolute flex flex-col w-full gap-1 bg-white border border-gray-300 md:hidden block ${
                    show ? "" : "hidden"
                }`}
                hidden={show}
            >
                <Link
                    to="/about"
                    className="w-full text-center font-bold text-xl hover:text-blue-300"
                    onClick={handleDropDownLink}
                >
                    About
                </Link>
                <Link
                    to="/schedule"
                    className="w-full text-center font-bold text-xl hover:text-blue-300"
                    onClick={handleDropDownLink}
                >
                    Schedule Now
                </Link>
            </div>
        </>
    );
}

export default Header;
