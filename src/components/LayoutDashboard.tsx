//
//
//

import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";

export const LayoutDashboard = () => {
    const [isShown, setIsShown] = useState(true);
    const isLargeDevice = useMediaQuery("only screen and (min-width : 993px) ");

    const handleOnClick = (e: any) => {
        setIsShown((current) => !current);
    };

    return (
        <>
            <DashboardHeader handleSideNavClick={handleOnClick} />

            <div className="flex flex-row ">
                {!isLargeDevice && !isShown && <DashboardSideNav />}
                {isLargeDevice && isShown && <DashboardSideNav />}
                <Outlet />
            </div>
        </>
    );
};

export default LayoutDashboard;
