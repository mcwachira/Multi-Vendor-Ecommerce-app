"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {
    Boxes, ChevronDown,
    ChevronRight,
    ExternalLink,
    LayoutGrid, LayoutList, LogOut, MonitorPlay, ScanSearch, SendToBack,
    Slack,
    Truck,
    User,
    Users2,
    UserSquare2,
    UserSquare2Icon,
    Warehouse
} from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


import {usePathname} from "next/navigation";

function Sidebar({setShowSidebar,showSidebar}) {

    const [openMenu, setOpenMenu] = useState( false )

    const pathname = usePathname()

    const sidebarLinks = [
        {
            title:'Customers',
            icon:Users2,
            href:"/dashboard/customers"
        },
        {
            title:'Markets',
            icon:Warehouse,
            href:"/dashboard/markets"
        },
        {
            title:'Farmers',
            icon:UserSquare2,
            href:"/dashboard/farmers"
        },
        {
            title:'Orders',
            icon:Truck,
            href:"/dashboard/orders"
        },
        {
            title:'Staff',
            icon:User,
            href:"/dashboard/customers"
        },
        {
            title:'Settings',
            icon:LayoutGrid,
            href:"/dashboard/settings"
        },
        {
            title:' Online Store',
            icon:ExternalLink,
            href:"/"
        },
    ]

    const catalogueLinks = [
        {
            title:'Products',
            icon:Boxes,
            href:"/dashboard/products"
        },
        {
            title:'Categories',
            icon:LayoutList,
            href:"/dashboard/categories"
        },
        {
            title:'Attributes',
            icon:SendToBack,
            href:"/dashboard/attributes"
        },
        {
            title:'Coupons',
            icon:ScanSearch ,
            href:"/dashboard/coupons"
        },
        {
            title:'Store Sliders',
            icon:MonitorPlay ,
            href:"/dashboard/sliders"
        },

    ]
    return (
      <div className={showSidebar? "sm:block sm:mt-0  mt-20 bg-light text-light dark:bg-dark dark:text-dark space-y-6 w-64 h-screen  p-3 fixed left-0 top-0 shadow-md":" hidden sm:mt-0  mt-20 sm:block bg-light text-light dark:bg-dark dark:text-dark space-y-6 w-64 h-screen  p-3 fixed left-0 top-0 shadow-md"}>

          <Link href="#" className='px-6 py-4'               onClick={() => setShowSidebar(false)}> Logo </Link>

          <div className='space-y-3 mt-14 flex flex-col'>
              <Link href="/dashboard"          className={ pathname==="dashboard" ? "flex items-center space-x-3 px-6  py-2 border-1-4 border-green-600":"flex items-center space-x-3 px-6  py-2"}>
                  <LayoutGrid/>
                  <span>
                      Dashboard
                  </span>
                </Link>


              <Collapsible>
                  <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
                      <button className="flex items-center space-x-6 px-6 py-2">
                          <div className="flex items-center space-x-3 ">
                              <Slack/>
                              <span>

                      Catalogue
                  </span>
                              {openMenu ? <ChevronDown/>: <ChevronRight/>}
                          </div>

                      </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent  className='rounded-xl py-3 px-3 pl-6 bg-slate-50  dark:bg-slate-800'>
                      {catalogueLinks.map((item, i) => {
                          return (
                              <Link href={item.href}
                                    key={i}
                                    onClick={() => setShowSidebar(false)}
                                    className={ pathname===item.href ? "flex items-center space-x-3 px-6 text-green-500  py-2 border-1-4 border-green-600":"flex items-center space-x-3 px-6  py-2"}>
                                  <LayoutGrid/>
                                  <span>
                {item.title}
                  </span>
                              </Link>

                          )
                      })}

                  </CollapsibleContent>
              </Collapsible>




              {sidebarLinks.map((item, i) => {
                      const Icon = item.icon

return (
                  <Link href={item.href}
                        onClick={() => setShowSidebar(false)}
                        key={i}
                        className={item.href === pathname ? "flex items-center space-x-3 px-6  py-2 border-1-4 border-green-600":"flex items-center space-x-3 px-6  py-2"}>
                      <Icon/>
                      <span>

                        {item.title}
                  </span>
                  </Link>
)
                  }
              )}

              <div className="px-6 py-2">
                  <button className="bg-green-600 rounded-lg flex items-center space-x-3 px-6 py-2 ">
                      <LogOut/>
                      <span>
                      Log Out
                  </span>
                  </button>
              </div>

          </div>

      </div>
    );
}


export default Sidebar;

