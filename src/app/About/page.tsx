'use client'
import React from 'react'
import Image from 'next/image'
// import {ImgSlider} from '@/Component/ImgSlider'
// import {Card} from "@/Component/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type Props={}
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import {  faGear,faLayerGroup,faPhone} from '@fortawesome/free-solid-svg-icons';
import GalleryChanger from "@/app/components/GalleryChanger"
import Services from '@/ServiceComponents/Services'
import { ImgSlider } from '@/ServiceComponents/ImgSlider'
// import Camp from '@/Component/Camp'

const cardData=[
     {icon:"faGear",heading:"Quick Setup",para:"It is easily adaptable to all types of renting properties. Hostello minimizes common delays resulting from often lengthy traditional software deployment. Import all of your existing branch configurations and guest details in a blink.",link:"/hostelabout"},
     {icon:"faLayerGroup",heading:"Scared of Data Security",para:"Don't worry; we have your back.  Your valuable data is stored on the cloud with the Highest Standards for Privacy and Data Security.  It is 100% safe and provides you full access and control over your data no matter where you are, all you need is your phone.",link:"/hostelabout"},
     {icon:"faPhone",heading:"Amazing Support",para:"We value our customers. Our technical expert's team will help you transfer all your existing records safely onto our cloud storage for free. We regularly update GoPGMS with new features based on our PG Owners' suggestions.",link:"/pricing"},
]
const imageUrls = [
     './Dashboard.png',
     './Facilty.png',
     './Bill.png',
     // Add more image URLs as needed
   ];
const page = (props:Props) => {
  return (
         <>
         <div className="bg-white mb-6">
         <div className="bg-gradient-to-r from-slate-200 to-sky-800 w-[95vw] mx-auto border h-auto mt-12 rounded-2xl">
<div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
  <div className=" mx-auto my-5 flex flex-col justify-around align-sub text-start w-8/12 text-red-900 px-6">
    <h1 className='text-4xl text-blue-900 font-bold pr-8  '>Predictable Growth start here</h1>
    <p className="text-lg font-medium text-slate-900">Hostello give you full context on everyr company in your target maket so you can reachand convert more customer</p>
    <button className='bg-blue-900  text-xl align-start h-12 text-slate-50 rounded-md justify-start w-48'>Get started</button>
  </div>
  <div className=" pr-0 mx-auto my-[70px] bg-black">
    <Image src="/hero.png" className='pl-8' width={400} height={200} alt={''}/>
  </div>

</div>
  </div>
         </div>
{/* feature */}
         <div className="mt-5">
          <div className="w-[90vw] mx-auto bg-white rounded-lg h-auto">
            <h2 className="text-center font-semibold">hostello is serving 20+ hostel property right now</h2>
            <div className="rounded-xl flex flex-row gap-10 justify-around flex-wrap ">
              <Image src="/logo3.png" width={100} height={20} alt={''}/>
              <Image src="/logo1.png" width={100} height={20} alt={''}/>
              <Image src="/logo2.png" width={100} height={20} alt={''}/>
              <Image src="/logo3.png" width={100} height={20} alt={''}/>
              <Image src="/logo4.png" width={100} height={20} alt={''}/>
            </div>
    
          </div>
         </div>

        {/* //statics */}

        <div className="mt-8">
          <div className="w-[95vw] mx-auto border rounded min-h-[60vh] bg-white">
<div className="flex flex-col gap-6 justify-around mt-12 w-5/6 mx-auto">
  <div className=" flex justify-start w-[30vw] mx-auto ">
    <h1 className="text-4xl font-semibold">Turn Data Into better Buisness now</h1>
  </div>
  <div className="bg-white">
    <p className='text-lg font-thin'>Enhance functioning of your hostel & track hostel activities in real-time with our hostel student management system software</p>
  </div>
  <div className=" grid grid-cols-3 divide-y lg:divide-x">
    <div className="flex flex-col text-center">
      <span className='text-blue-600 text-4xl font-semibold'>249 %</span>
      <h2 className="text-xl"> increase in new customer</h2>
    </div>
    <div className="flex flex-col text-center">
    <span className='text-blue-600 text-4xl font-semibold'>249 %</span>
    <h2 className="text-xl"> increase in new customer</h2>
    </div>
    <div className="flex flex-col text-center ">
    <span className='text-blue-600 text-4xl font-semibold'>60 %</span>
    <h2 className="text-xl">decrease in management cost </h2>
    </div>
  </div>
  <div className="flex justify-center">
  <button className='bg-blue-900 mx-auto text-xl  h-12 text-slate-50 rounded-md justify-center w-48'>Get started</button>
  </div>
</div>
          </div>
        </div>
         {/* feature end */}

      <>
        <ImgSlider/>
        </>  
    {/* <section>
    <div className="h-full min-h-[80vh] w-[95vw] mx-auto bg-gray-800 pt-12 p-4">
  <div className="bg-white grid gap-14 md:grid-cols-3 md:gap-5">
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
        <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path
            d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
            fill="white"></path>
        </svg>
      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">TREE AND SHRUB PRUNING</h1>
      <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
        modi
        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    </div>
    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
          <svg viewBox=" 0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
        <path
          d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
          fill="#F5F5FC"></path>
        </svg>
      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">IRRIGATION & DRAINAGE</h1>
      <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
        modi
        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    </div>
    <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
        <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path
            d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
            fill="white"></path>
        </svg>
      </div>
      <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">GARDEN BED MAINTENANCE</h1>
      <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
        modi
        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    </div>
  </div>

</div>  
    </section> */}
    <section className='mt-5'>
    <GalleryChanger images={imageUrls}/>

    </section>
   
   <section className='mt-5'>
         <h1 className='text-center font-semibold text-3xl w-full '>Feature that assist your Hosetel daily operations</h1>
         <div className="px-10 h-auto grid grid-cols-1 gap-4  lg:grid-cols-2">
                  <div className="border w-full ">
                
                  <img src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-8.svg" className='py-2'/> 
                  </div>
                  <div className="border   flex flex-col gap-2 ">
                           <div className=" pt-16 font-serif flex flex-col justify-center ">
                           <h1 className="text-center text-2xl font-semibold">Hostel Room Allocation System</h1>

          
                           <p className="text-lg font-medium">1.Improve guest satisfaction by proactively assigning rooms digitally.</p>
                           <p className="text-lg font-medium">2.Assign rooms trailored precisely to guest preferences, budget, and the number of available rooms in your hostel all before they arrive.</p>
                      </div>  
                          
                  </div>
         </div>
         {/* <img src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-8.svg"/> */}
   </section>
  
   {/* <section className="mt-8 mb-10 ">
    <h2 className="mb-12 text-center text-3xl font-bold">
      Why is it so great?
    </h2>

    <div className="flex flex-wrap items-center">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
        <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="./hosteldash.png" className="w-full" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 py-12 text-center text-white md:px-12">
                  <h3 className="mb-6 text-2xl font-bold uppercase">
                    The future is
                    <u className="text-[hsl(210,18%,38%)]">now</u>
                  </h3>
                  <p className="text-[hsl(210,18%,91%)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum quia laboriosam error consequuntur fugit,
                    doloribus rerum, iure nesciunt amet quidem veniam
                    cupiditate hic fugiat dolore aperiam quisquam libero
                    earum quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Support 24/7</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nihil quisquam quibusdam modi sapiente magni molestias
              pariatur facilis reprehenderit facere aliquam ex.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Safe and solid</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam
              ullam aspernatur odio soluta, quisquam dolore animi mollitia a
              omnis praesentium, expedita nobis!
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Extremely fast</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi iure eveniet facere?
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Live analytics</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Illum doloremque ea, blanditiis sed dolor laborum praesentium
              maxime sint, consectetur atque ipsum ab adipisci ullam
              aspernatur odio soluta, quisquam dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  

    </>
  )
}

export default page