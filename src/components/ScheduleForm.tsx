//
//
//

import axios from "axios";
import cn from "classnames";
import Form from "./Form";
import FormInput from "./FormInput";
import FormInputDate from "./FormInputDate";
import FormInputTime from "./FormInputTime";
import { PopUpModal } from "./PopUpModal";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    contactValidation,
    dateValidation,
    timeValidation,
} from "../utils/inputValidation";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/datepicker.css";

// TODO: REFACTOR THIS

interface scheduleFormProps {
    className?: string;
}

const ScheduleForm = ({ className }: scheduleFormProps) => {
    const methods = useForm();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const onSubmit = methods.handleSubmit((data) => {
        setShow(true);
        axios
            .post("http://localhost:5000/api/reservations", data)
            .then((response) => {
                setType("Success");
                setMessage(response.data);
                methods.reset();
            })
            .catch((err: any) => {
                setType("Error");
                setMessage(err.data);
            });
    });

    const handleClose: any = (e: any) => {
        setShow(false);
    };

    useEffect(() => {}, [selectedDate]);

    return (
        <>
            <div className={cn(className)}>
                <FormProvider {...methods}>
                    <Form
                        className="items-center"
                        onSubmit={(e: any) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="lg:flex lg:flex-row">
                            <FormInput
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75"
                                {...firstNameValidation}
                            />
                            <FormInput
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75"
                                {...lastNameValidation}
                            />
                        </div>
                        <FormInput
                            inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75"
                            {...emailValidation}
                        />
                        <FormInput
                            inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75"
                            {...contactValidation}
                        />
                        <div className="lg:flex lg:flex-row">
                            <FormInputDate
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75"
                                {...dateValidation}
                                onDateChange={(e: Date) => {
                                    setSelectedDate(e);
                                    if (!e) setSelectedTime(null);
                                }}
                            />
                            <FormInputTime
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...timeValidation}
                                date={selectedDate}
                                time={selectedTime}
                            />
                        </div>

                        <div className="flex w-full p-4 px-3 py-4">
                            <button
                                className="bg-blue-500 rounded-md text-white h-10 w-full uppercase font-bold"
                                onClick={onSubmit}
                            >
                                Book Reservation
                            </button>
                        </div>
                    </Form>
                </FormProvider>
                <PopUpModal type={type} message={message} className={show ? "" : "hidden"} onClick={handleClose} />
            </div>
        </>
    );
};

export default ScheduleForm;
