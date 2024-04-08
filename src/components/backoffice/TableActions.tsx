import React from 'react';
import {Download, Search, Trash2} from "lucide-react";

function TableActions() {
    return (
        <div className="flex justify-between items-center gap-8 py-6 px-12  bg-light dark:bg-dark text-light dark:text-dark shadow-xl rounded-lg">
            <button
                className="relative inline-flex items-center justify-center py-3 px-4 text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">

                <Download/>

                Export
            </button>
            {/*Search*/}

            <div className="flex-grow bg-light text-light  dark:bg-dark dark:text-dark">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative ">
                    <div
                        className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                    </div>
                    <input type="text" id="table-search"
                           className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                           placeholder="Search for items"/>
                </div>
            </div>
            {/* Delete */}
            <button className="flex justify-between items-center py-4 px-6 text-white rounded-lg bg-red-600">
                <Trash2/>

                <span>
                        Delete
                    </span>
            </button>
        </div>
    );
}

export default TableActions;