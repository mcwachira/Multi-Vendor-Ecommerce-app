import React from 'react';
import {AlignJustify, Bell, Sun, User} from "lucide-react";

function Navbar() {
    return (
        <div className='w-full flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4  fixed top-0 left-60 right-0 '>

            <button>
                <AlignJustify/>
            </button>

            <div className="flex space-x-3 ">
                <button>
                    <Sun/>
                </button>
                <button>
                    <Bell/>
                </button>
                <button>
                    <User/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;