//
//
//

import DatePicker from "react-datepicker";
import { cn } from "../utils/utils";
import { Controller, useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";
import { useOccupiedDates } from "../hooks/useOccupiedDates";
import { useOccupiedTimes } from "../hooks/useOccupiedTimes";
import { useEffect, useState } from "react";

interface FormInputDateProps {
    //
    id: string;
    name: any;
    label: string;
    validation?: {
        required?: {
            value: boolean;
            message: string;
        };
        validate?: (value: any) => boolean | string;
    };
    date?: Date | null;
    time?: Date | null;
    divClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    onTimeChange?: (e: any) => void;
}

const FormInputTime = ({ id, name, label, validation, ...props }: FormInputDateProps) => {
    const {
        control,
        formState: { errors },
        register,
    } = useFormContext();

    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    const date = props.date;
    const [time, setTime] = useState(null);
    const { timeFilter, fetchReservationsByDate, filterPassedTime } = useOccupiedTimes(date);

    useEffect(() => {
        fetchReservationsByDate();
        if (!date) setTime(() => null);
    }, [date]);

    return (
        <>
            <div className={cn("flex flex-col w-full  w-full px-3 py-2 h-26", props.divClassName)}>
                <label htmlFor={id} className={cn("w-full text-base", props.labelClassName)}>
                    {label}
                </label>
                <Controller
                    // name={name}
                    control={control}
                    defaultValue={null}
                    {...register(name, validation)}
                    // rules={{ required: { value: true, message: "Required" } }}
                    render={({ field: { onChange, value, ref } }) => {
                        return (
                            <>
                                <DatePicker
                                    className={cn(
                                        "w-full px-3 py-2 shadow-sm border focus:outline-none h-12 disabled:bg-gray-200",
                                        props.inputClassName
                                    )}
                                    onChange={(e: any) => {
                                        onChange(e);
                                        setTime(e);
                                    }}
                                    selected={value}
                                    disabledKeyboardNavigation
                                    disabled={date === null}
                                    excludeTimes={timeFilter}
                                    filterTime={filterPassedTime}
                                    minDate={date}
                                    ref={ref}
                                    {...props}
                                />
                                {isInvalid && !time ? (
                                    <p className="text-sm text-red-500 bg-red-100 rounded-md font-bold text-center w-">
                                        <>{errors[name] ? errors[name]?.message : ""}</>
                                    </p>
                                ) : (
                                    ""
                                )}
                            </>
                        );
                    }}
                />
                {/* {isInvalid && (
                    <p className="text-sm text-red-500 bg-red-100 rounded-md font-bold text-center w-">
                        <>{errors[name] ? errors[name]?.message : ""}</>
                    </p>
                )} */}
            </div>
        </>
    );
};

export default FormInputTime;
