//
//
//

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

interface DashboardHeaderProps {
    handleSideNavClick: (e: any) => void;
}

const DashboardHeader = ({ handleSideNavClick }: DashboardHeaderProps) => {
    const [show, setShow] = useState<boolean>(false);
    const isLargeDevice = useMediaQuery("only screen and (min-width : 993px)");

    const handleDropDownLink = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <header className="max-h-[70px] h-screen relative border-b-2 border-blue-400">
                <nav className="flex flex-row h-full justify-between items-center ">
                    <div className="text-2xl w-full h-full lg:w-[250px] flex justify-center items-center relative bg-blue-400">
                        <Link to="/dashboard" className="mr-0 lg:mr-28 hover:text-blue-300 font-bold text-white static">
                            #WebApp
                        </Link>
                        {!isLargeDevice && (
                            <input
                                className="absolute left-0 lg:left-auto ml-5 lg:right-0 lg:mr-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-blue-800 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-300 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-neutral-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault01"
                                onClick={handleSideNavClick}
                                defaultChecked={false}
                            />
                        )}
                        {isLargeDevice && (
                            <input
                                className="absolute left-0 lg:left-auto ml-5 lg:right-0 lg:mr-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-blue-800 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-300 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-neutral-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault01"
                                onClick={handleSideNavClick}
                                defaultChecked={true}
                            />
                        )}

                        <div className="absolute group flex items-center pr-5 right-0 lg:hidden">
                            <button onClick={handleDropDownLink}>
                                <img
                                    className="shrink-0 h-8 w-8 rounded-full static"
                                    width="64"
                                    height="64"
                                    src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                                    alt="user-male-circle"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between hidden lg:block">
                        {/* left */}
                        <ul></ul>
                        {/* right */}
                        <div className="group flex items-center pr-5">
                            <div className="ltr:ml-3 rtl:mr-3 bg-gray-100 rounded-md px-3 mr-1 w-[70px]">
                                <p className="text-end text-sm font-medium text-slate-800 group-hover:text-slate-900">
                                    User
                                </p>
                                <p className="text-end text-sm font-medium text-slate-500 group-hover:text-slate-700">
                                    Admin
                                </p>
                            </div>
                            <button onClick={handleDropDownLink}>
                                <img
                                    className="shrink-0 h-12 w-12 rounded-full static"
                                    width="64"
                                    height="64"
                                    src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                                    alt="user-male-circle"
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <div
                className={`z-50 absolute top-[70px] right-0 flex flex-col w-auto gap-1 bg-white px-5 py-2 drop-shadow-md block ${
                    show ? "" : "hidden"
                }`}
            >
                <Link
                    to="/"
                    className="w-full text-start font-bold text-base hover:text-blue-300"
                    onClick={handleDropDownLink}
                >
                    Settings
                </Link>
                <Link
                    to="/"
                    className="w-full text-start font-bold text-base hover:text-blue-300"
                    onClick={handleDropDownLink}
                >
                    Logout
                </Link>
            </div>
        </>
    );
};

export default DashboardHeader;
