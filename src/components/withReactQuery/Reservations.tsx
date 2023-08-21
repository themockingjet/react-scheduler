//
//
//

import { usePagination } from "@mantine/hooks";
import { Pagination } from "@mantine/core";
import { fetchReservations } from "../../fetchers/reservation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Reservations = () => {
    const ITEMS_PER_PAGE = 10;
    const [visibleResults, setVisibleResults] = useState<string[]>([]);
    const { isError, isLoading, data } = useQuery(["reservations"], fetchReservations, {
        staleTime: 60000,
        onSuccess: (data) => {
            setVisibleResults(data.slice(0, ITEMS_PER_PAGE));
        },
    });

    const pagination = usePagination({
        total: Math.ceil(data?.length / ITEMS_PER_PAGE),
        initialPage: 1,
        onChange: (page: number) => {
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            setVisibleResults(data?.slice(start, end));
        },
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>Error Occured...</h2>;
    }

    return (
        <>
            <div className="w-full my-10 py-5 shadow-lg rounded-lg border border-slate-200 shrink-0 h-full">
                <div className="w-full">
                    <table className="table-auto w-full text-center">
                        <thead>
                            <tr>
                                <th className="px-5 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                                    ID
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Full Name
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Email
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Contact
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Date
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Time
                                </th>
                                <th className="border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Status
                                </th>
                                <th className="border-b-2 border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleResults?.map((reservation: any, index: any) => (
                                <tr key={index}>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.id}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.full_name}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.email}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.contact_no}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.date}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.time}</td>
                                    <td className="whitespace-no-wrap border-b border-gray-500">{reservation.status}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                        <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-800">#1</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    damilareanjorin1@gmail.com
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    +2348106420637
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span
                                            aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                        ></span>
                                        <span className="relative text-xs">active</span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                    September 12
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                        View Details
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                        <div className="">
                            <div className="right-0">
                                <Pagination
                                    value={pagination.active}
                                    onChange={pagination.setPage}
                                    total={Math.ceil(data?.length / ITEMS_PER_PAGE)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reservations;
