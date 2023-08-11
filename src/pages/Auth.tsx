//
//
//

import LoginForm from "../components/LoginForm";
import NavBar from "../components/Header";

export default function Auth() {
    const navItem = { name: "Home", link: "/" };
    return (
        <>
            <div className="flex flex-col h-screen bg-blue-100">
                <LoginForm />
            </div>
        </>
    );
}
