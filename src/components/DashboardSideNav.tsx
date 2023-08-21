//
//
//

import cn from "classnames";
import { useState } from "react";
import { FaCalendarAlt, FaThList, FaUsers, FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../assets/links.css";

interface DashboardSideNavProps {
    className?: string;
}

const DashboardSideNav = ({ className }: DashboardSideNavProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div
                id="d-sidenav"
                className={cn("w-[250px] min-h-[calc(100vh-70px)] shrink-0 absolute md:static bg-blue-400 ", className)}
            >
                <nav>
                    <div className="flex flex-col gap-3 font-semi text-white lg:text-xl ">
                        <li className="flex flex-row items-center justify-start gap-2 px-10 py-2">
                            <span>
                                <FaThList color="white" />
                            </span>
                            <NavLink
                                to="dashboard"
                                className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default DashboardSideNav;
