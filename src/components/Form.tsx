//
//
//

import cn from "classnames";
import { useForm } from "react-hook-form";

interface FormProps {
    children?: React.ReactNode;
    className?: string;
    onSubmit?: (e: any) => void;
}

const Form = ({ children, className, onSubmit }: FormProps) => {
    return (
        <form className={cn("", className)} noValidate autoComplete="off" onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
