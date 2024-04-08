"use client"
import React from 'react';
import {X} from "lucide-react";
import {useRouter} from "next/navigation";

interface FormHeaderProps{
    title:string
}
function FormHeader({title}:FormHeaderProps) {

    const router = useRouter()
    return (
        <div
            className="flex items-center justify-between py-6 px-12 bg-light text-light dark:bg-dark dark:text-dark shadow mb-12 rounded-lg">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <button onClick={() => router.back() }>
              <X/>
            </button>
        </div>
    );
}

export default FormHeader;