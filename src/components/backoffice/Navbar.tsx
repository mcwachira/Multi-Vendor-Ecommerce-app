import React from 'react';
import {AlignJustify, Bell, Layout, Sun, X} from "lucide-react";
import Image from "next/image";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ThemeToggle} from "@/components/ui/theme-toggle";

interface NavbarProps {
    // showSidebar:boolean,
    // setShowSidebar:() => {}
}

function Navbar({setShowSidebar,showSidebar}) {
    return (
        <div className='flex items-center justify-between bg-light text-light dark:bg-dark dark:text-dark h-16 px-8 py-4  fixed top-0 ml-60 w-full shadow-md sm:pr-[20rem]'>

            <button onClick={() => setShowSidebar(!showSidebar)}>
                <AlignJustify/>
            </button>

            <div className="flex space-x-3 ">
                <ThemeToggle/>
                <button>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button type="button"
                                    className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                                <Bell/>
                                <span className="sr-only">Notifications</span>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 end-1 dark:border-gray-900">20
                                </div>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" px-4 py-2 rounded-md">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator/>

                                <DropdownMenuItem>

                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src="/assets/'avatar.png" alt="User Profile "
                                        width={200}
                                        height={200}
                                        className="w-8 h-8 rounded-full"
                                        />

                                        <div className="flex flex-col space-y-1" >
                                            <p>
                                                Yellow Sweet Corn Stock out,
                                            </p>

                                            <div className="flex items-center space-x-2">
                                                <p className="px-3 py-.5 bg-red-600 text-white rounded-full text-sm ">
                                                    Stock Out
                                                </p>
                                                <p>
                                                    Dec 12 2021 - 12:40pm
                                                </p>
                                            </div>
                                        </div>
                                        <button>
                                            <X/>
                                        </button>
                                    </div>

                                </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>

                                <div className="flex items-center space-x-2">
                                    <Image
                                        src="/assets/'avatar.png" alt="User Profile "
                                        width={200}
                                        height={200}
                                        className="w-8 h-8 rounded-full"
                                    />

                                    <div className="flex flex-col space-y-1" >
                                        <p>
                                            Yellow Sweet Corn Stock out,
                                        </p>

                                        <div className="flex items-center space-x-2">
                                            <p className="px-3 py-.5 bg-red-600 text-white rounded-full text-sm ">
                                                Stock Out
                                            </p>
                                            <p>
                                                Dec 12 2021 - 12:40pm
                                            </p>
                                        </div>
                                    </div>
                                    <button>
                                        <X/>
                                    </button>
                                </div>

                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>

                                <div className="flex items-center space-x-2">
                                    <Image
                                        src="/assets/'avatar.png" alt="User Profile "
                                        width={200}
                                        height={200}
                                        className="w-8 h-8 rounded-full"
                                    />

                                    <div className="flex flex-col space-y-1" >
                                        <p>
                                            Yellow Sweet Corn Stock out,
                                        </p>

                                        <div className="flex items-center space-x-2">
                                            <p className="px-3 py-.5 bg-red-600 text-white rounded-full text-sm ">
                                                Stock Out
                                            </p>
                                            <p>
                                                Dec 12 2021 - 12:40pm
                                            </p>
                                        </div>
                                    </div>
                                    <button>
                                        <X/>
                                    </button>
                                </div>

                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button>
                                <Image src="/assets/avatar.png" width={200} height={200} alt="User Profile"
                                       className="w-8 h-8 rounded-full"/>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 px-4 py-2 rounded-md">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Layout className="mr-2 h-4 w-4" />
                                    <span>Dashboard</span>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Edit Profile</span>

                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                             </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />



                        </DropdownMenuContent>
                    </DropdownMenu>
                </button>

            </div>
        </div>
    );
}

export default Navbar;



