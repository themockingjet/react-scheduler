//
//
//
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/utils";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
    return (
        <>
            <input ref={ref} className={cn("border border-gray-300 rounded-md p-1", className)} {...props} />
        </>
    );
});

export default Input;
