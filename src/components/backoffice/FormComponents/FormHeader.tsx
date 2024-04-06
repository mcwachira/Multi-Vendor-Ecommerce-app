import React from 'react';
import {X} from "lucide-react";

interface FormHeaderProps{
    title:string
}
function FormHeader({title}:FormHeaderProps) {
    return (
        <div
            className="flex items-center justify-between py-6 px-12 bg-light text-light dark:bg-dark dark:text-dark shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <button>
              <X/>
            </button>
        </div>
    );
}

export default FormHeader;