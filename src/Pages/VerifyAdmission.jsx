import React from 'react'
import { useForm } from "react-hook-form"

const VerifyAdmission = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (

    <div>
      <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Verification</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span className='text-sm mx-[110px] '>CNIC (Which you provided during form submission)</span>
            <br />
            <input type="text" placeholder='CNIC Number' className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px] my-[5px]' {...register("cnicNumber", {
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
            })} />
          </label>
          <br />
          {errors.cnicNumber?.type === "required" && <span>{errors.cnicNumber.message}</span>}
          {errors.cnicNumber?.type === "pattern" && <span>{errors.cnicNumber.message}</span>}
          {errors.cnicNumber?.type === "minLength" && <span>{errors.cnicNumber.message}</span>}
          {errors.cnicNumber?.type === "maxLength" && <span>{errors.cnicNumber.message}</span>}
          <br />

          <input className='w-[1140px]  h-12 border bg-[#4a00ff] text-white hover:bg-[#1a1f99] border-gray-300  rounded-xl text-center  mx-[105px] mb-[50px]' type="submit" />
        </div>
      </form>
    </div>


  )
}

export default VerifyAdmission