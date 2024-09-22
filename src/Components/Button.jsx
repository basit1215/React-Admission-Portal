import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Button = () => {
    return (
        <div className=' flex items-center mt-6  justify-center'>
            <div className='flex   rounded-2xl border h-[50px] justify-center w-[300px] items-center  bg-[#f2f2f2] gap-3'>
                <div className='hover:rounded-xl  hover:border px-3 py-3 hover:text-xs  hover:bg-gray-300 hover:h-[40px] hover:w-[132px] active:bg-gray-700 active:text-white justify-center flex items-center'>
                    <Link to='' className='text-sm'>Admission Form</Link>
                </div>

                <div className='hover:rounded-xl hover:border px-3 py-3 hover:text-xs  hover:bg-gray-300 hover:h-[40px] hover:w-[132px] active:bg-gray-700 active:text-white justify-center flex items-center'>
                    <Link to='verify' className='text-sm'>Verify Admission</Link>
                </div>
            </div>
            {/* flex    */}
        </div>

    )
}

export default Button