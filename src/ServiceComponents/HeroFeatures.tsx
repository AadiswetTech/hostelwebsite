import React from 'react'

type Props = {}

const HeroFeatures = (props: Props) => {
  return (
         <div className="w-[95vw] h-auto mx-auto">

         <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-4 ">
           <div className="flex flex-col justify-start gap-4  px-12">
             <span className="text-blue-700 font-semibold">SMART HMS FEATURES</span>
             <h1 className="text-4xl font-bold text-slate-900">A Hostel Pos made for all your needs</h1>
             <p className="font-thin text-xl text-slate-500">A quick and easy to use hostel billing softare that make managing high order volume smooth</p>
           </div>
           <div className="flex flex-col gap-3 lg:flex-row">

             <img src="/Dashboard.png" className="w-[90vw] h-[60vh] lg:w-[55vw] lg:h-[60vh]" />
             <div className="flex flex-col py-12  px-7 gap-4">
               <h2 className=" font-bold text-gray-800 text-4xl">Minimal And Useful Dashboard</h2>
               <p className="text-xl  text-slate-700 font-light">Get Analytics of active Occupants,Empty and filled beds,
               generated bills, and payment Collected on a single dashboard
</p>
               <button className="justify-start">Explore all features </button>
             </div>
           </div>
         </div>
       </div>
  )
}

export default HeroFeatures