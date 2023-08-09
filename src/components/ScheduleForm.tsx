//
//
//
import cn from "classnames";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { FormInputDate } from "./FormInputDate";
import {
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    contactValidation,
    dateValidation,
    timeValidation,
} from "../utils/inputValidation";
import { ModalComponent } from "./ModalComponent";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/datepicker.css";

// TODO: REFACTOR THIS

interface scheduleFormProps {
    className?: string;
}

const ScheduleForm = ({ className }: scheduleFormProps) => {
    const methods = useForm();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
        methods.reset();
        setSuccess(true);
    });

    useEffect(() => {}, [selectedDate]);

    return (
        <>
            <div className={cn(className)}>
                <FormProvider {...methods}>
                    <form
                        className="items-center"
                        noValidate
                        autoComplete="off"
                        onSubmit={(e: any) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="lg:flex lg:flex-row">
                            <FormInput
                                divClassName="lg:text-base lg:1/2"
                                labelClassName="lg:text-base lg:1/2"
                                inputClassName="lg:text-base lg:1/2 border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...firstNameValidation}
                            />
                            <FormInput
                                divClassName="lg:text-base lg:1/2"
                                labelClassName="lg:text-base lg:1/2"
                                inputClassName="lg:text-base lg:1/2 border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...lastNameValidation}
                            />
                        </div>
                        <FormInput
                            inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                            {...emailValidation}
                        />
                        <FormInput
                            inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                            {...contactValidation}
                        />
                        <div className="lg:flex lg:flex-row">
                            <FormInputDate
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...dateValidation}
                                onDateChange={(e: Date) => {
                                    setSelectedDate(e);
                                }}
                            />
                            <FormInputDate
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...timeValidation}
                                date={selectedDate}
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
                    </form>
                </FormProvider>
                {success && <ModalComponent type="Success" message="Reservation Booked" />}
            </div>
        </>
    );
};

export default ScheduleForm;
