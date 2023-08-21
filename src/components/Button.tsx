//
//
//

import { Children } from "react";
import { cn } from "../utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <>
            <button
                className={cn("bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 text-center rounded-lg", className)}
                {...props}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
