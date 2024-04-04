import React from 'react';


function SmallCard({data}) {


    const {
        title,
       numbers,
        iconBg,
        icon:Icon,
    } =  data
    return (
        <div className="rounded-lg bg-slate-700 shadow-lg  p-4">
    <div className="flex space-x-4">
        <div className={`w-12 h-12 ${iconBg} rounded-full flex justify-center items-center`} >
        <Icon />
    </div>

       <div>
           <p>
               {title}
           </p>

           <h3 className='text-2xl font-bold'>
               522
           </h3>
       </div>
    </div>
        </div>
    );
}

export default SmallCard;