import React from "react";
import Themebtn from './Themebtn'

function CardUI() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold m-4 text-center tracking-tight text-gray-900 dark:text-white">
                    toggle to change the theme
                </h5>
                <div className="flex items-center justify-center">
                    <button
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Themebtn />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardUI;