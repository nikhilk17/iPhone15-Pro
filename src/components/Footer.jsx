import React from 'react'

const Footer = () => {
  return (
   <footer className=' p-7'>
        <div className='screen-max-width'>
            <p className='text-xs text-gray'>More ways to shop:
                 <span className='text-blue underline cursor-pointer'> Find an Apple Store </span> 
                 or <span className='text-blue underline cursor-pointer' > other retailer </span>  near you. 
                 <span >Or call 000800 040 1966</span>
                 </p>
            <div className='mt-5 h-[1px] w-full bg-gray hidden md:block'></div>
            <p className='md:absolute md:right-0 mt-3 text-xs'>India</p>
            <div className='flex justify-start flex-col md:flex-row'> 
                <p className='text-xs text-gray mt-3'>Copyright © 2024 Apple Inc. All rights reserved.</p>
                <div className='flex mt-3 gap-3 md:ml-5'>
                    <p className='text-xs text-white font-light'>Privacy Policy</p>
                    <p className='text-xs text-white font-light'>Terms of Use</p>
                    <p className='text-xs text-white font-light'>Sales and Refunds</p>
                    <p className='text-xs text-white font-light'>Legal</p>
                    <p className='text-xs text-white font-light'>Site Map</p>
                    </div>
            </div>
        </div>
   </footer>
  )
}

export default Footer
