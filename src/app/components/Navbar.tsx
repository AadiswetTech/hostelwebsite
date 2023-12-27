"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faPhone,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import clsx from 'clsx'
type Props = {}

const Navbar = (props: Props) => {
         const [isSideMenuOpen,setMenu]=useState(false);

         const navlink=[
                  {label:"Home",link:"/"},
                  {label:"About",link:"/About"},
                  {label:"Contact",link:"/"},
                  {label:"Pricing",link:"/Pricing"},
]
  return (
    <nav className="flex bg-white sticky top-0 justify-between  items-center px-8 py-6">
         <div className="flex items-center gap-8">
         <section className="flex items-center gap-4">
         <FontAwesomeIcon onClick={()=> setMenu(true)} icon={faBars} size={'xl'}
         className=" text-2xl cursor-pointer lg:hidden"/>
         <Link href="/" className="text-4xl pl-4 font-bold">
                  Hostello
         </Link>
         </section>
         {navlink.map((item,index)=>
                  (
                      <Link className="hidden lg:block hover:text-red-700" key={index} href={item.link}>{item.label}</Link>    
                  ))}
         </div>
        
         {/* for mobile */}
         <div className={clsx('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full' ,isSideMenuOpen && 'translate-x-0')}>
                  <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen w-6/12  p-8 gap-8 z-50 flex">
                  <FontAwesomeIcon icon={faXmark}  onClick={()=> setMenu(false)} className='mt-0 mb-8 text-3xl cursor-pointer' />
                  {navlink.map((item,index)=>
                  (
                      <Link className="hover:text-red-700" key={index} href={item.link}>{item.label}</Link>    
                  ))}
                  
                  </section>
         </div>
        {/* // */}
         <section className="flex items-center gap-4">
         <FontAwesomeIcon icon={faPhone} className="text-3xl" />
         {/* <Image className="rounded-[50%] h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XIWGMJZuuniQEPBOeGWFi7NKRbYpATuWSx1Jy5aAH8Aa218LG5Gm5y5O3Q&s" width={40} height={40}  alt="hostel"/> */}
                   </section> 
                   </nav>
  )
}

export default Navbar