//
//
//
import { FC } from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";

interface FormInputProps {
    //
    id: string;
    name: string;
    label: string;
    validation: {
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
    onChange?: (e: any) => void;
}

const FormInput: FC<FormInputProps> = ({ id, name, label, validation, ...props }: FormInputProps) => {
    const divCss = "flex flex-col w-full  px-3 py-2";
    const labelCss = "w-full text-base";
    const inputCss = "w-full px-3 py-2 shadow-sm border outline-none h-12 xl:h-10 2xl:h-14";

    const {
        register,
        formState: { errors },
    } = useFormContext();
    const inputErrors: any = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputErrors);

    return (
        <>
            <div className={cn(divCss, props.divClassName)}>
                <label htmlFor={name} className={cn(labelCss, props.labelClassName)}>
                    {label}
                </label>
                <input className={cn(inputCss, props.inputClassName)} {...register(name, validation)} />
                {isInvalid && (
                    <p className="text-sm text-red-500 bg-red-100 rounded-md font-bold text-center w-">
                        {inputErrors.error.message}
                    </p>
                )}
            </div>
        </>
    );
};

export { FormInput };
