//
//
//

import DatePicker from "react-datepicker";
import { cn } from "../utils/utils";
import { Controller, useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";
import { useOccupiedDates } from "../hooks/useOccupiedDates";
import { useOccupiedTimes } from "../hooks/useOccupiedTimes";
import { useEffect } from "react";

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
    divClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    onDateChange?: (e: any) => void;
}

const FormInputDate = ({ id, name, label, validation, ...props }: FormInputDateProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    const { dateFilter } = useOccupiedDates();

    return (
        <>
            <div className={cn("flex flex-col w-full  w-full px-3 py-2 h-26", props.divClassName)}>
                <label htmlFor={id} className={cn("w-full text-base", props.labelClassName)}>
                    {label}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={null}
                    rules={validation}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <>
                                <DatePicker
                                    className={cn(
                                        "w-full px-3 py-2 shadow-sm border focus:outline-none h-12 disabled:bg-gray-200",
                                        props.inputClassName
                                    )}
                                    onChange={(e: Date) => {
                                        onChange(e);
                                        props.onDateChange && props.onDateChange(e);
                                    }}
                                    selected={value}
                                    disabledKeyboardNavigation
                                    excludeDates={dateFilter}
                                    minDate={new Date()}
                                    {...props}
                                />
                                {isInvalid && !value && (
                                    <p className="text-sm text-red-500 bg-red-100 rounded-md font-bold text-center w-">
                                        <>{errors[name] ? errors[name]?.message : ""}</>
                                    </p>
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

export default FormInputDate;
