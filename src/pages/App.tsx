//
//
//

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./Auth";
import Home from "./Home";
import About from "./About";
import Layout from "../components/Layout";
import Schedule from "./Schedule";
import Dashboard from "./Dashboard";
import LayoutDashboard from "../components/LayoutDashboard";
import DashboardReservation from "../components/DashboardReservation";
import DashboardEmployee from "../components/DashboardEmployee";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Route>
                <Route path="/login" element={<Auth />} />
                <Route path="/admin" element={<LayoutDashboard />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="reservations" element={<DashboardReservation />} />
                    <Route path="employees" element={<DashboardEmployee />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
