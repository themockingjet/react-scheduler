//
//
//

import { useState } from "react";
import cn from "classnames";

//
interface ModalProps {
    type: "Success" | "Error";
    message: string;
    className?: string;
}

function ModalComponent({ type, message }: ModalProps) {
    //
    const [show, setShow] = useState(true);
    const handleClose: any = (e: any) => {
        setShow(false);
    };

    return (
        <>
            <div
                className={cn(
                    "absolute inset-x-0 inset-y-0 w-full flex h-screen flex-col justify-center overflow-hidden bg-gray-900 bg-opacity-10 py-6 sm:py-12",
                    { hidden: !show }
                )}
            >
                <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <div className="text-base font-semibold">
                            <p className="text-green-500 text-center text-xl">{type}</p>
                        </div>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                <p>{message}</p>
                            </div>
                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={handleClose}
                                    className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ModalComponent };
