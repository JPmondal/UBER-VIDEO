import React from 'react'

const CaptainDetails = () => {
  return (
    <>
       <div className="flex justify-between items-center bg-yellow-300 p-2 rounded-lg">
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10 rounded-full" src="https://media.licdn.com/dms/image/v2/D5603AQEk15fOWRxuvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685135978285?e=2147483647&v=beta&t=Xswhv-UbVnya0QMjeoMWdhwzblqVdAW4qe7zKRn9w_o" alt="" />
            <p className="font-bold text-lg">Harsh Patel</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">$295.20</h1>
            <p className="text-gray-400 text-sm">Earned</p>
          </div>
        </div>
        <div className="flex justify-evenly mt-4 bg-yellow-300 rounded-lg p-2">
          <div className="flex flex-col items-center">
            <p><i className="font-semibold text-2xl ri-timer-2-line"></i></p>
            <p className="font-bold text-2xl">10.2</p>
            <p className="text-xs text-gray-600">Hours Online</p>
          </div>
          <div className="flex flex-col items-center">
            <p><i className="font-semibold text-2xl ri-timer-2-line"></i></p>
            <p className="font-bold text-2xl">10.2</p>
            <p className="text-xs text-gray-600">Hours Online</p>
          </div>
          <div className="flex flex-col items-center">
            <p><i className="font-semibold text-2xl ri-contacts-book-3-line"></i></p>
            <p className="font-bold text-2xl">10.2</p>
            <p className="text-xs text-gray-600">Hours Online</p>
          </div>
        </div>
    </>
  )
}

export default CaptainDetails
