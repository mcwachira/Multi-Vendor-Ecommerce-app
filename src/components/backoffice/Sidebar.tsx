import React from 'react';
import Link from "next/link";

function Sidebar() {
    return (
      <div className="bg-light text-light dark:bg-dark dark:text-dark space-y-6 w-60 h-screen  p-3 fixed left-0 top-0 shadow-md">

          <Link href="#" className='mb-6'> Logo </Link>

          <div className='space-y-3 flex flex-col'>
              <Link href="#">Dashboard</Link>
              <Link href="#"> Catalogue</Link>
              <Link href="#"> Customers</Link>
              <Link href="#">Markets</Link>
              <Link href="#"> Farmers</Link>
              <Link href="#">Orders</Link>
              <Link href="#"> Staff</Link>
              <Link href="#"> Settings</Link>
              <Link href="#"> Online Store</Link>
          </div>

      </div>
    );
}


export default Sidebar;

