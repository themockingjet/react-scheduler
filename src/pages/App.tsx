//
//
//

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./Auth";
import Layout from "../components/Layout";
import Schedule from "./Schedule";
import Dashboard from "./Dashboard";
import LayoutDashboard from "../components/LayoutDashboard";
import NotFound from "./NotFound";
import TestPage from "./TestPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Schedule />} />
                </Route>
                <Route path="/login" element={<Auth />} />
                <Route path="/admin" element={<LayoutDashboard />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/testpage" element={<TestPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
