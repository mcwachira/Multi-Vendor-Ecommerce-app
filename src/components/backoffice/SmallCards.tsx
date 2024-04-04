import React from 'react';
import SmallCard from "@/components/backoffice/SmallCard";
import {CheckCheck, Loader2, RefreshCcw, ShoppingCart} from "lucide-react";

function SmallCards() {

    const orderStatus = [
        {
            title:"Total Orders",
            numbers:1000,
            iconBg:"bg-green-600",
            icon:ShoppingCart

        },
        {
            title:"Order Pending",
            numbers:110,
            iconBg:"bg-blue-600",
            icon:Loader2

        },
        {
            title:"Order Processing",
            numbers:300,
            iconBg:"bg-orange-600",
            icon:RefreshCcw

        },

        {
            title:"Order Delivered ",
            numbers:590,
            iconBg:"bg-purple-600",
            icon:CheckCheck

        }]
    return (
        <div className="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
                orderStatus.map((status, i) =>{
                    return (
                        <SmallCard className="bg-green-600" data={status} key={i}/>
                    )
                } )
            }

        </div>
    );
}

export default SmallCards;