//
//
//

import { cn } from "../utils/utils";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";
import { useRef } from "react";

interface FormInputProps {
    //
    id: string;
    name: string;
    label: string;
    type?: string;
    validation?: {
        required: {
            value: boolean;
            message: string;
        };
        pattern?: {
            value: any;
            message: string;
        };
    };
    divClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    onChange?: (e: any) => void;
}

const FormInput = ({ id, name, label, validation, ...props }: FormInputProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    return (
        <>
            <div className={cn("flex flex-col px-3 py-2 w-full", props.divClassName)}>
                <label htmlFor={id} className={cn("w-full", props.labelClassName)}>
                    {label}
                </label>
                <Input
                    className={cn(
                        "w-full px-3 py-2 shadow-sm border outline-none h-12 xl:h-10 2xl:h-14",
                        props.inputClassName
                    )}
                    type={props.type}
                    {...register(name, validation)}
                />
                {isInvalid && (
                    <p
                        className={cn(
                            "text-sm text-red-500 bg-red-100 rounded-md font-bold text-center",
                            props.errorClassName
                        )}
                    >
                        {inputErrors.error.message}
                    </p>
                )}
            </div>
        </>
    );
};

export default FormInput;
