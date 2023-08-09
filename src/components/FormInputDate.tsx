//
//
//
import DatePicker from "react-datepicker";
import cn from "classnames";
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
    validation: {
        required: {
            value: boolean;
            message: string;
        };
    };
    date?: Date | null;
    divClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    onDateChange?: (e: any) => void;
}

const FormInputDate = ({ id, name, label, validation, ...props }: FormInputDateProps) => {
    const divCss = "flex flex-col w-full  w-full px-3 py-2 h-26";
    const labelCss = "w-full text-base";
    const inputCss = "w-full px-3 py-2 shadow-sm border focus:outline-none h-12 disabled:bg-gray-200";

    const {
        control,
        formState: { errors },
    } = useFormContext();

    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    const { dateFilter } = useOccupiedDates();
    const date = props.date;
    const { timeFilter, fetchReservationsByDate, filterPassedTime } = useOccupiedTimes(date);

    useEffect(() => {
        fetchReservationsByDate();
    }, [date]);

    return (
        <>
            <div className={cn(divCss, props.divClassName)}>
                <label htmlFor={id} className={cn(labelCss, props.labelClassName)}>
                    {label}
                </label>
                <Controller
                    name={name}
                    control={control}
                    rules={validation}
                    render={({ field: { onChange, value, ...field } }) => (
                        <DatePicker
                            className={cn(inputCss, props.inputClassName)}
                            onChange={(e: Date) => {
                                onChange(e);
                                props.onDateChange && props.onDateChange(e);
                            }}
                            selected={value}
                            disabled={name === "time" && date === null}
                            excludeDates={name === "date" ? dateFilter : []}
                            excludeTimes={name === "time" ? timeFilter : []}
                            filterTime={name === "time" ? filterPassedTime : undefined}
                            minDate={name === "time" ? date : new Date()}
                            {...field}
                            {...props}
                        />
                    )}
                />
                {isInvalid && (
                    <p className="text-sm text-red-500 bg-red-100 rounded-md font-bold text-center w-">
                        {inputErrors.error.message}
                    </p>
                )}
            </div>
        </>
    );
};

export { FormInputDate };
