import React from 'react'
import { useForm } from "react-hook-form"

const VerifyAdmission = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Verification</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block">
            <span className='text-sm'>CNIC (Which you provided during form submission)</span>
            <input 
              type="text" 
              placeholder='CNIC Number' 
              className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
              {...register("cnicNumber", {
                required: "CNIC is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "CNIC must contain only numbers"
                },
                minLength: {
                  value: 13,
                  message: "CNIC must be exactly 13 digits"
                },
                maxLength: {
                  value: 13,
                  message: "CNIC must be exactly 13 digits"
                }
              })} 
            />
          </label>
          {errors.cnicNumber && <span className='text-red-600 text-sm'>{errors.cnicNumber.message}</span>}
        </div>

        <input 
          className='w-full h-12 bg-[#4a00ff] text-white hover:bg-[#1a1f99] rounded-xl text-center' 
          type="submit" 
        />
      </form>
    </div>
  )
}

export default VerifyAdmission