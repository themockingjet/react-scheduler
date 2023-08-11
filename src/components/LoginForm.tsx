//
//
//

//
//
//

import { FormInput } from "./FormInput";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usernameValidation, passwordValidation } from "../utils/auth";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm() {
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        axios.post("http://localhost:5000/auth/login", data).then((response) => {
            console.log(response);
            window.location.href = "/";
        });
    });
    return (
        <>
            <div className="flex min-h-screen h-screen bg-blue-100 items-center justify-center">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <FormProvider {...methods}>
                        <form
                            className="items-center bg-white rounded-xl p-4 shadow-lg w-3/4 md:w-1/2 xl:w-1/4"
                            noValidate
                            autoComplete="off"
                            onSubmit={(e: any) => {
                                e.preventDefault();
                            }}
                        >
                            <FormInput
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...usernameValidation}
                            />
                            <FormInput
                                inputClassName="border-blue-300 focus:border-blue-600 focus:border-4 focus:border-opacity-75 rounded-md"
                                {...passwordValidation}
                            />
                            <p className="text-center py-4">Admin / Admin</p>
                            <div className="flex w-full p-4 px-3 ">
                                <button
                                    className="bg-blue-500 rounded-full text-white h-10 w-full uppercase font-bold"
                                    onClick={onSubmit}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
