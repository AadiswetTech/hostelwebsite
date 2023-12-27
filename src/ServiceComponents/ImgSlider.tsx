"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faPhone,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';

import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'
type Props = {}
const slideContent=[
         "/logo1.png",
         "/logo2.png",

]

export const ImgSlider = (props: Props) => {
          const [currentIndex,setIndex]=useState(0);
          function prevImage()
          {
                  const newIndex=(currentIndex -1 + slideContent.length)%slideContent.length;
                  setIndex(newIndex)
          }
          function nextImage()
          {
                  const newIndex=(currentIndex  +1 )%slideContent.length;
                  setIndex(newIndex)
          }
  return (
         <div className='p-12 flex justify-center w-screen md:w-1/2 items-center'>
  <div className="relative  border  w-[90vw] mx-auto">
         <div className="flex justify-center items-center ">
                  {/* mapping of image */}
                  {slideContent.map((content,index)=>(
                           <>
                           {currentIndex ===index ? (
                                    <Image key={index} width={200} height={200} src={content} alt={`Slide {index+1}`}
className="rounded  w-[60vw] h-[40vh] lg:w-[50vw] lg:h[30vh] transition-all object-cover"/>
                           ):null}
                           </>

                  ))}
         </div>
         {/* button component */}
         <div className="flex flex-row justify-around w-6/12 mx-auto text-blue-950 translate-y-12 z-40 bg-zinc-600">
         <button className='px-4 py-2 rounded-xl bg-emerald-800' onClick={prevImage} >prev</button>
         <button className="px-4 py-2 bg-blue-500" onClick={nextImage}>next</button>
         </div>
     
   
   </div>
         </div>
 
  )
}
