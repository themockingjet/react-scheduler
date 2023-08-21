//
//
//

import Reservations from "../components/withReactQuery/Reservations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function Dashboard() {
    return (
        <>
            <div className="min-h-[calc(100vh-70px)] w-full">
                <div className="container mx-auto p-5">
                    <div className="flex flex-col">
                        <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full">
                            <div className="flex justify-center items-center h-24 bg-red-500 rounded-full text-white shadow-lg">
                                <h1>Pending</h1>
                            </div>
                            <div className="flex justify-center items-center h-24 bg-green-500 rounded-full text-white shadow-lg">
                                <h1>Completed</h1>
                            </div>
                            <div className="flex justify-center items-center h-24 bg-slate-500 rounded-full text-white shadow-lg">
                                <h1>Cancelled</h1>
                            </div>
                            <div className="flex justify-center items-center h-24 bg-red-100 rounded-full">
                                <h1>Something...</h1>
                            </div>
                        </div>
                        <QueryClientProvider client={queryClient}>
                            <Reservations />
                        </QueryClientProvider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
