import { Link } from "react-router-dom";
import ScheduleForm from "../components/ScheduleForm";

function Home() {
    return (
        <>
            <div className="relative flex h-screen min-h-screen lg:h-screen overflow-y-auto bg-blue-100">
                <div className="flex flex-col lg:flex-row w-full h-3/4 lg:w-3/4 mx-auto lg:h-3/4 lg:my-auto lg:bg-white lg:rounded-2xl">
                    <div
                        className="flex lg:flex-col justify-center w-full h-12 md:h-16 lg:h-full relative bg-blue-500 lg:bg-transparent lg:p-12 shrink-0 lg:shrink
                    lg:bg-gradient-to-r from-cyan-500 to-blue-500 lg:rounded-l-2xl"
                    >
                        <div className="flex lg:flex-col gap-2 w-full lg:py-12 rounded-full lg:bg-white lg:shadow-2xl">
                            <div className="flex w-full shadow-xl lg:shadow-none">
                                <h1 className="font-bold text-white  lg:text-blue-600 my-auto mx-auto md:text-2xl">
                                    <p className="text-center">Simple Reservation Web App</p>
                                </h1>
                            </div>
                            <div className="flex px-2 mx-auto absolute right-0 inset-y-0 lg:hidden">
                                <Link to="/login" className="my-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 text-white">
                                        <path
                                            strokeLinecap="round"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-center">
                                    <Link to="/login" className="underline">
                                        Login
                                    </Link>{" "}
                                    to view Dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-stretch w-3/4 lg:w-full h-auto lg:h-full mx-auto bg-white lg:rounded-r-2xl my-6 sm:my-12 lg:my-0 p-4 lg:p-0 shrink-0 lg:shrink shadow-lg">
                        <ScheduleForm className="w-full 2xl:h-3/4 my-auto p-2 md:p-3 lg:px-12 2xl:px-24" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
