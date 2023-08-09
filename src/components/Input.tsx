//
//
//
import { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const inputVariants = cva("w-full px-3 py-2 bg-white shadow-sm placeholder-slate-400", {
    variants: {
        variant: {
            default: "border focus:outline-none",
            rounded: "border focus:outline-none rounded-md",
            underline: "border-b-4 focus:outline-none focus:border-b-8 focus:rounded-md focus:border-x focus:border-y",
        },
        inputSize: {
            default: "h-12",
            sm: "h-10",
            lg: "h-14",
        },
        borderColor: {
            default: "border-gray-300 focus:border-gray-600 focus:border-4 focus:border-opacity-75",
            primary: "border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75",
            danger: "border-red-300 focus:border-red-600 focus:border-4 focus:border-opacity-75",
        },
        fontSize: {
            default: "text-sm",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl",
        },
        fontStlye: {
            default: "font-normal",
            semi: "font-semibold",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        variant: "default",
        inputSize: "default",
        borderColor: "default",
        fontSize: "default",
        fontStlye: "default",
    },
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    name: string;
    label?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    validation?: {
        required?: {
            value: boolean;
            message: string;
        };
        maxLength?: {
            value: number;
            message: string;
        };
    };
    className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
    return (
        <>
            <input className={cn(inputVariants(props), className)} {...props} />
        </>
    );
};

export { Input, inputVariants };
