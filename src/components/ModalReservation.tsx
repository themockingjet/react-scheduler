//
//
//

import ScheduleForm from "../components/ScheduleForm";

const ModalReservation = () => {
    return (
        <>
            <div className="absolute inset-x-0 inset-y-0 w-full flex h-screen flex-col justify-center overflow-hidden bg-gray-900 bg-opacity-10 py-6 sm:py-12">
                <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:min-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto w-full">
                        <div className="text-base font-semibold">
                            <p className="text-blue-500 text-center text-xl">Reservation Details</p>
                        </div>
                        <div className="divide-y divide-gray-300/50">
                            <ScheduleForm />
                            <div className="grid grid-cols-2 gap-4 p-5">
                                <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                                    Update
                                </button>
                                <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalReservation;
