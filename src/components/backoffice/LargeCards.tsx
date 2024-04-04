import React from 'react';
import LargeCard from "@/components/backoffice/LargeCard";

function LargeCards() {

    const orderStats = [
        {
        period:"Today Orders",
        sales:11000,
        color:"bg-green-600"
    },
        {
            period:"Yesterdays  Orders",
            sales:11000,
            color:"bg-blue-600"
        },
        {
            period:"This Month",
            sales:300000,
            color:"bg-orange-600"
        },
        {
            period:"Last Month ",
            sales:110000,
            color:"bg-green-600"
        },
        {
            period:"All times sales ",
            sales:110000,
            color:"bg-purple-600"
        }]
    return (
        <div className="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
                orderStats.map((item, i) =>{
                    return (
                        <LargeCard className="bg-green-600" data={item} key={i}/>
                    )
                } )
            }

        </div>
    );
}

export default LargeCards;