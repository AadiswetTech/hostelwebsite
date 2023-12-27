'use client'
import React, { useState } from 'react'
import Image from 'next/image'
type Props={}
interface ImageGridProps {
       images: string[];
     }
const slideContent=[
         "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",

]
const GalleryChanger: React.FC<ImageGridProps> = ({ images }) => {
       const [selectedImageIndex, setSelectedImageIndex] = useState(0);
     
       const handleButtonClick = (index: number) => {
         setSelectedImageIndex(index);
       };
       
  return (
   
       //   <div className='   mx-auto '>
       //            <div className="py-[2rem] border h-[80vh] grid grid-cols-1 lg:grid-cols-1 gap-[4rem] ">
       //            <div className="rounded w-full h-[40vh]   ">
                        
       //            {images.slice(0, 8).map((image, index) => (
       //    <div key={index} className="flex items-center justify-center h-full">
       //      <button
       //        onClick={() => handleButtonClick(0)}
       //        className="w-full h-full  bg-red-700 text-white"
       //      >
       //        DashBoard 
       //      </button>
       //      <button
       //        onClick={() => handleButtonClick(1)}
       //        className="bg-white  w-full h-full text-black"
       //      >
       //        Facility 
       //      </button>
       //      <button
       //        onClick={() => handleButtonClick(2)}
       //        className="w-full h-full bg-black text-white"
       //      >
       //        Billing 
       //      </button>
       //    </div>
       //  ))}
                                    
                          
       //                   </div>
                                   
       //            </div>
                  
       //            <section className=" mx-auto items-center h-[60vh] w-[90vw]">
       //            <div className="h-full flex items-center justify-center">
       //<img
       //      src={    images[selectedImageIndex]}
       //      alt={`Image ${selectedImageIndex + 1}`}
       //      className="w-[80vw] h-[60vh] lg:w-[90vw] lg:h-[60vh]"
       //    />
       //  </div>
       //   </section>
               
       //            </div>
                
       <div className=" relative border  mx-auto h-[90vh] w-[90vw]  ">
       <div className="h-screen border-red-600 grid grid-cols-1 gap-8 lg:gap-4">
                  <div className="rounded w-full min-h-[70vh]   ">
                        
                                   {images.slice(0, 1).map((image, index) => (
                         <div key={index} className="grid grid-cols-2 gap-16 lg:gap-2">
                             <button
                              onClick={() => handleButtonClick(0)}
                                className="w-full h-full  bg-red-700 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-200 to-slate-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                              >
                                DashBoard 
                              </button>
                             <button
                                onClick={() => handleButtonClick(1)}
                                className="bg-white  w-full h-full text-black font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-200 to-slate-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                              >
                               Facility 
                             </button>
                             <button
                               onClick={() => handleButtonClick(2)}
                               className="w-full h-full bg-black text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-200 to-slate-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                           >
                                Billing 
                              </button>
                             <button
                               onClick={() => handleButtonClick(2)}
                               className="w-full h-full bg-black text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-200 to-slate-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                           >
                                Billing 
                              </button>
                           </div>
                          ))}
                                                     
                                           
                                          </div>
     <div className="absolute top-[10rem] right-8 left-32 w-full min-h-full  col-span-2">
     <img
             src={    images[selectedImageIndex]}
             alt={`Image ${selectedImageIndex + 1}`}
      className="w-8/12 rounded-lg  h-[50vh] lg:w-[70vw] lg:h-[50vh]"
         />
     </div>
   </div>
   
   </div>
  
  )
}

export default GalleryChanger