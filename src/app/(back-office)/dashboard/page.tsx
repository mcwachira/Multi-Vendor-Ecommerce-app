import React from 'react';
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import CustomDataTable from "@/components/backoffice/CustomDataTable";

function Dashboard() {
    return (
        <div className=' bg-light text-light  dark:bg-dark  dark:text-dark'>

            <Heading title="Dashboard Overview"/>
            
        {/*    large Cards*/}
            <LargeCards/>
            
        {/*    small
        */}

            <SmallCards/>

        {/*    Charts*/}
            <DashboardCharts/>

        {/* Data Table*/}

            <CustomDataTable/>
        </div>
    );
}

export default Dashboard;