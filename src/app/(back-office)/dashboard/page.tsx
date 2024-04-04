import React from 'react';
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import DashboardCharts from "@/components/backoffice/DashboardCharts";

function Dashboard() {
    return (
        <div>

            <Heading title="Dashboard Overview"/>
            
        {/*    large Cards*/}
            <LargeCards/>
            
        {/*    small
        */}

            <SmallCards/>

        {/*    Charts*/}
            <DashboardCharts/>
        </div>
    );
}

export default Dashboard;