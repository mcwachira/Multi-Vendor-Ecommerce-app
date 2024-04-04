import React from 'react';
import {Layers} from "lucide-react";

interface LargeCardProps {
    // className:string
}

function LargeCard({data}:LargeCardProps) {
    return (
        <div className={`rounded-lg text-white p-8 shadow-md flex items-center flex-col gap-2  ${data.color}`}>
            <Layers/>
            <h4>
                {data.period}
            </h4>

            <h2 className='text-2xl lg:text-3xl'>
                Kes.{data.sales}
            </h2>
        </div>
    );
}

export default LargeCard;