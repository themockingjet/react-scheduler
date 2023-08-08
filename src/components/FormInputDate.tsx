//
//
//
import DatePicker from "react-datepicker";
import cn from "classnames";
import { useState } from "react";
import { useFormContext, useForm, Controller } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";

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

    divClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
}

const FormInputDate = ({ id, name, label, validation, ...props }: FormInputDateProps) => {
    const divCss = "flex flex-col w-full  w-full px-3 py-2 h-26";
    const labelCss = "w-full text-base";
    const inputCss = "w-full px-3 py-2 shadow-sm border focus:outline-none h-12";

    const {
        control,
        register,
        formState: { errors },
    } = useFormContext();

    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

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
                    render={({ field: { ref, onChange, value, ...field } }) => (
                        <DatePicker
                            className={cn(inputCss, props.inputClassName)}
                            onChange={onChange}
                            selected={value}
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
