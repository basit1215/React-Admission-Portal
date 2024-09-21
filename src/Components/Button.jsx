import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Button = () => {
    return (
        <div className=' flex justify-center mt-6 '>
            <div className=' flex rounded-2xl border h-[50px] w-[300px] items-center gap-4 justify-center bg-[#f2f2f2]'>
                <div className='hover:rounded-2xl hover:border hover:h-[35px] hover:w-[150px] justify-center flex items-center'>
                    <Link to='' className='text-sm'>Admission Form</Link>
                </div>

                <div className=''>
                    <Link to='verify' className='text-sm'>Verify Admission</Link>
                </div>
            </div>
        </div>
    )
}

export default Button