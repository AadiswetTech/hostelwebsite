'use client'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <section>
         <div className='mt-12 flex flex-col justify-between gap-4'>
                  <h2 className="text-center text-4xl text-yellow-900 font-bold">Transparent and affordable pricing</h2>
                  <h2 className="text-center text-xl font-light ">Manage Hostel operations efficiently without burning a hole in your pockets</h2>
         </div>
    </section>
    <section className="w-full mt-2  bg-white h-[90vh]">
         <div className=" mx-auto w-[90vw] bg-white">
         <div className="mx-auto py-10 grid grid-cols-1 gap-2 lg:grid-cols-2 ">
         <div className="bg-red-200">
                  <div className="flex flex-col justify-between gap-3 border text-center  bg-white">
                           <h1 className="text-3xl font-bold text-black">Hostello H.M.S Core</h1>
                           <h2 className="text-lg font-light text-slate-800 pr-12">For any Hostel looking to automate their entire operation with affordable and easy-to-use software</h2>
                           <span className="text-4xl text-red-700 font-bold">₹20000*</span>
                           <span className="text-slate-800">first year/per Hostel</span>
                           <p className='text-slate-800 pr-5'>+₹7,000* renewal from next year</p>
                           <button className="rounded-sm transition-all bg-red-700 w-[35vw] sm:w-[20vw]  text-2xl align-center mx-auto text-white px-18">Book Demo</button>
                           <div className="pt-5">
                                    <ul className="list-none sm:list-disc px-2 text-lg hover:text-lime-700">
                                             <li className="font-thin text-lg text-slate-800 hover:text-lime-700">
                                             Efficient cloud-based POS system that works with every OS
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                             Quick and easy inventory management
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                             100+ Real-time and simplified reporting
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                                      24/7 Support

                                             </li>
                                    </ul>

                           </div>
                  </div>
         </div>
         <div className="">
                  <img src="/hero.png"/>
         </div>
         <div className='w-[85vw] pt-1 bg-slate-400 rounded-xl text-blue-950 text-center mx-auto border '>
          <p >Note: The prices mentioned on the page are exclusive of GST & only for the outlets in India. Please contact us for details of outlets located outside India.</p>
         </div>


        </div>
         </div>
       
         </section>
    </>
  )
}
export default page