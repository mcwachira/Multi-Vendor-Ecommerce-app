import React from 'react';
import Heading from "@/components/backoffice/Heading";
import Link from "next/link";
import {Download, Plus, Search, Trash2} from "lucide-react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";

function Page() {
    return (
        <div>
        {/* Header */}
<PageHeader
    title='Farmers'
    href='/dashboard/staff/fammer'
    linkTitle="Add Farmers"/>

     <TableActions/>

         <div className="py-8">
             <h2>
                 Table
             </h2>
         </div>
        </div>
    );
}

export default Page;