//
//
//

import { Link } from "react-router-dom";
import ScheduleForm from "../components/ScheduleForm";

function Schedule() {
    return (
        <>
            <div className="relative flex h-screen min-h-screen lg:h-screen bg-blue-100">
                <div
                    className="flex flex-col lg:flex-row w-full h-auto lg:w-3/4 mx-auto lg:h-3/4 lg:my-auto lg:bg-white lg:rounded-2xl shadow-xl
                    ring-2 ring-black/5"
                >
                    {/* Form */}
                    <div className="flex w-full h-full bg-white lg:rounded-l-2xl">
                        <ScheduleForm className="w-full 2xl:h-3/4 my-auto p-2 md:p-3 lg:px-12 2xl:px-24" />
                    </div>
                    {/* Design */}
                    <div
                        className="flex lg:flex-col justify-center items-center w-full h-1/4 md:h-16 lg:h-full relative bg-blue-500 lg:bg-transparent lg:p-12 shrink-0 lg:shrink
                    bg-gradient-to-l from-cyan-500 to-blue-500 lg:rounded-r-2xl"
                    >
                        <div className="flex flex-col gap-2 w-full mx-6 lg:mx-0 py-2 lg:py-12 rounded-full bg-white shadow-md">
                            <div className="flex w-full">
                                <h1 className="font-bold text-blue-600 my-auto mx-auto md:text-2xl">
                                    <p className="text-center">Simple Reservation Web App</p>
                                </h1>
                            </div>
                            <div className="">
                                <p className="text-center">
                                    <Link to="/login" className="underline">
                                        Login
                                    </Link>{" "}
                                    to view Dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;
