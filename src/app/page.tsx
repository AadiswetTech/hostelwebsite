
"use client";

import React from "react";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faDoorOpen,
  faAddressBook,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
// interface CampProps
// {
//   backgroundImage:string;
//   title:string;
//   subtitle:string;
//   peoplrjoined:string;
// }

// const CampSite=({backgroundImage,title, subtitle,peoplejoined})=>
// {
//   return (
//     <div className="h-full w-fulll min-w-[110px] $backgroundImage">camp1</div>
//   )
// }
export default function Home() {
  return (
    <>
      <section className="mt-0 w-full min-h-fit  bg-slate-300 ">
        <div className=" w-full flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-blue-400 via-white-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <h1 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
            Revolutionize Your 
            <span className="relative whitespace-nowrap text-[#3b3486] dark:text-gray-300">
               Hostel Operations
            </span>
            <span className="relative whitespace-nowrap text-red-700 dark:text-orange-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-slate-900 dark:fill-orange-300/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className=" text-[#3b3486]">with Hostello</span>
            </span>
          </h1>
          <h2 className="mx-auto mt-12 max-w-4xl  sm:text-white-400 text-lg text-white-500 lg:text-2xl dark:text-gray-300 leading-7">
            . Hostel management software represents a transformative tool that
            caters to the diverse needs of hostels and similar accommodation
            facilities, enhancing their overall operations and customer
            experiences.
          </h2>
          <div className="text-[15px] md:text-[40px] md:p-[20px] text-blue-700">
            
            <button className="bg-[#3b3686] dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 dark:hover:bg-gray-600 transition">Get Started</button>
           
          </div>
         
        </div>
        <div className="  basis-[45%] ">
          <div className="bg-slate-50  ">
            {/* <Image 
              src="./hero.png"
              className="py-[10vh]  h-[70vh] rounded-sm bg-white  w-full lg:w-full lg:mx-auto "
              alt="Hostel Image" width="200" height="200"
            /> */}
          </div>
        </div>
      </section>
      <section className="mt-5 flex flex-col gap-12" >
        <div className="w-[95vw] h-auto mx-auto border">

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
                <button className="justify-start bg-cyan-700 text-white mx-auto w-8/12 rounded-md font-semibold text-lg">Explore </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[95vw] h-auto mx-auto border">

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-4 ">
            <div className="flex flex-col justify-start gap-4  px-12">
              
             
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">

              <img src="/Bill.png" className="w-[90vw] h-[60vh] lg:w-[55vw] lg:h-[60vh]" />
              <div className="flex flex-col py-12  px-7 gap-4">
                <h2 className=" font-bold text-gray-800 text-4xl">Manage your Bill and Payment Smoothly</h2>
                <p className="text-xl  text-slate-700 font-light">Get Analytics of active Occupants,Empty and filled beds,
                generated bills, and payment Collected on a single dashboard
</p>
                <button className="justify-start bg-cyan-700 font-semibold text-lg text-white mx-auto w-8/12 rounded-md">Explore  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-10 flex flex-col gap-3'>
         <h1 className='text-center font-bold text-3xl text-gray-800 w-full '>Feature that assist your Hosetel daily operations</h1>
         <div className="px-10 h-auto grid grid-cols-1 gap-4  lg:grid-cols-2">
                  <div className=" w-full ">
                
                  <img src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-8.svg" className='py-2'/> 
                  </div>
                  <div className="   flex flex-col gap-2 ">
                           <div className=" pt-16 font-serif flex flex-col px-10 gap-3 justify-center ">
                           <h1 className="text-center text-3xl text-gray-800 font-semibold">Hostel Room Allocation System</h1>

          
                           <p className="text-xl  text-slate-700 font-light">1.Improve guest satisfaction by proactively assigning rooms digitally.</p>
                           <p className="text-xl  text-slate-700 font-light">2.Assign rooms trailored precisely to guest preferences, budget, and the number of available rooms in your hostel all before they arrive.</p>
                      </div>  
                          
                  </div>
         </div>
         {/* <img src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-8.svg"/> */}
   </section>

      {/* <section className="w-full min-h-[90vh] bg-slate-50 mt-0"> */}
      {/* <div class="w-full md:mx-auto bg-indigo-500 md:h-[50vh] sm:bg-orange-100 rounded-xl shadow-md overflow-hidden md:w-full">
  <div class="md:flex">
    <div class="">
      <img class="h-[49vh] w-full object-cover md:h-full md:w-[40vw]" src="/hosteldash.png" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-bg-orange-100 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
<div className="mt-4">
<div class="w-8/12 md:mx-auto bg-indigo-500 md:h-[50vh] sm:bg-orange-100 rounded-xl shadow-md overflow-hidden md:w-full">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-[49vh] w-full object-cover md:h-full md:w-[40vw]" src="/hosteldash.png" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
</div> */}
      {/* </section> */}
      {/* <section className="mt-4 border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrolllbar flex h-[340px] w-full item-start justify-start gap-8 overflow-x-auto  lg:h-[400px]  xl:h-[640px]" >
          <CampSite title="putuk" subtitle="fdgf" peoplejoined=""/>
        </div>
      </section> */}

      {/* <section className="">
        <div className="border border-red-500 h-60 mx-auto w-full text-center ">
          <h1 className="font-bold text-center text-3xl">Hostello Key feature </h1>
          <div className="bg-red-200 px-8 py-3 grid grid-cols-2 h-48  rounded-lg gap-3">
            <div className="bg-[#aaa7ca] rounded-lg shadow-xl">
              <h1 className="text-[#3b3486] text-center font-bold text-3xl ">Data Security 
              <span className="text-white"> most important</span></h1>
            </div>
            <div className="bg-[#aaa7ca] rounded-lg shadow-xl">
            <h1 className="text-[#3b3486] text-center font-bold text-3xl ">Data Security 
              <span className="text-white"> most important</span></h1>
            </div>
            <div className="bg-[#aaa7ca] rounded-lg col-span-2 shadow-xl">
            <h1 className="text-[#3b3486] text-center font-bold text-3xl ">Data Security 
              <span className="text-white"> most important</span></h1>
            </div>
           
          </div>
        </div>
      </section> */}
      {/* <section className="bg-white  py-24 px-4 lg:px-16"> 
    <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl pb-12">Industries we serve</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Automotive
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Toys and Baby Products"
                                title="Toys and Baby Products" loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Toys and Baby Products
                        </p>
                    </div>
                </a>
            </div>

          

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Glass.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Glass" title="Glass" loading="lazy" width="200"
                                height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Glass
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Jewelry Coins and Medallions"
                                title="Jewelry Coins and Medallions" loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Jewelry Coins and Medallions
                        </p>
                    </div>
                </a>
            </div>
          

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-10  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Cosmetics.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Cosmetics" title="Cosmetics" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Cosmetics
                        </p>
                    </div>
                </a>
            </div>

           
          

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#3B3486] rounded-xl justify-items-center align-middle">
                            <Image src="https://epicpadprinting.com/public/img/indus/Sports.png"
                                className="w-36 h-36  mt-6 m-auto" alt="Sports" title="Sports" loading="lazy" width="200"
                                height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Sports
                        </p>
                    </div>
                </a>
            </div>

           

            

        </div>
    </div>
</section> */}
      <section className="bg-slat-50 mt-5">
        <div className=""></div>
        <div className="container py-10 grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {/* <Image
            src="https://www.petpooja.com/assets/images/pos/Quick-simple_md.webp"
            alt="" width={300} height={400}
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          /> */}
          <div className=" width-[40%] gap-7 flex flex-col justify-center">
            <FontAwesomeIcon
              className="dark:bg-gray-500 aspect-square"
              icon={faAddressBook}
              size="4x"
            />
            <h2 className="text-xl font-bold">Hostel Analytics</h2>
          </div>
          <div className=" width-[40%] flex flex-col gap-7 justify-center">
            <FontAwesomeIcon
              className="dark:bg-gray-500 aspect-square"
              icon={faAddressBook}
              size="4x"
            />
            <h2 className="text-xl font-bold"> Registration</h2>
          </div>
          <div className=" width-[40%] flex flex-col gap-4 justify-center">
            <FontAwesomeIcon
              className="dark:bg-gray-500 aspect-square"
              icon={faAddressBook}
              size="4x"
            />
            <h2 className="text-xl font-bold">Room Management</h2>
          </div>
          <div className=" width-[40%] mt-0 flex flex-col gap-4  justify-center">
            <FontAwesomeIcon
              className="dark:bg-gray-500 aspect-square"
              icon={faUsersGear}
              size="4x"
            />
            <h2 className="text-xl font-bold">Staff Management</h2>
          </div>
        </div>
      </section>
      <section className="mt-5 bg-slate-600 w-full">
        <div className="max-w-[1320px] md:py-[80] py-5 mx-auto bg-red-400  h-[30vh]">
          <div></div>
        </div>
      </section>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
