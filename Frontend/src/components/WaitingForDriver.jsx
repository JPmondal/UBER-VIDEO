import React from 'react'

const WaitingForDriver = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
       <img className="w-28" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
       <div>
        <h3 className='font-semibold text-lg text-right text-gray-800'>Sarthak</h3>
        <h1 className='font-bold text-2xl'>MP04 AB 1234</h1>
        <p className='text-gray-500 text-base text-right'>Maruti Suzuki Alto</p>
       </div>
    </div>
    <div className=''>
        <div className='flex gap-4 border-b-2 p-2'>
            <h5 className='flex justify-center items-center font-bold text-2xl'><i className="ri-map-pin-line"></i></h5>
            <div>
                <h2 className='font-bold text-2xl'>562/11-A</h2>
                <p className='text-gray-500 text-base'>Lanariya Talab, Bhopal</p>
            </div>
        </div>
        <div className='flex gap-4 border-b-2 p-2'>
            <h5 className='flex justify-center items-center font-bold text-2xl'><i className="ri-map-pin-fill"></i></h5>
            <div>
                <h2 className='font-bold text-2xl'>252/15-B</h2>
                <p className='text-gray-500 text-base'>Burirdanga Mongla</p>
            </div>
        </div>
        <div className='flex gap-4 p-2'>
            <h5 className='flex justify-center items-center font-bold text-2xl'><i className="ri-currency-line"></i></h5>
            <div>
                <h2 className='font-bold text-2xl'>$193.20</h2>
                <p className='text-gray-500 text-base'>Cash Cash</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default WaitingForDriver
