import React from 'react';
import Heading from "@/components/backoffice/Heading";
import Link from "next/link";
import {Plus} from "lucide-react";

interface PageHeaderProps {
    title:string,
    href:string,
    linkTitle:string
}

function PageHeader({title, href, linkTitle}:PageHeaderProps) {
    return (
        <div className="flex justify-between py-4 mb-4">
            <Heading title={title}/>

            <Link
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:bg-[#1da1f2]/50 font-medium rounded-xl px-5 py-3 text-center text-base  inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 text-xl space-x-3"
                href={href}>


                <Plus/>
                <span>
                       {linkTitle}
                    </span>
            </Link>
        </div>
    );
}

export default PageHeader;