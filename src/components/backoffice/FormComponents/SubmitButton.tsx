import React from 'react';
import {Plus} from "lucide-react";
interface SubmitButtonProps{
    isLoading:boolean,
     buttonTitle:string,
    loadingButtonTitle:string
}

function SubmitButton({isLoading=false , buttonTitle, loadingButtonTitle}:SubmitButtonProps) {
    return (
    <div className="sm:col-span-1">

        {isLoading? (
            <button
                type="submit"
                                    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">

                {loadingButtonTitle}
            </button>
        ): (
            <button
                type="submit"
                className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">

                <Plus className="w-5 h-5 mr-2"/>
      <span>
          {buttonTitle}
            </span>

            </button>
        )}
    </div>
    );
}

export default SubmitButton;