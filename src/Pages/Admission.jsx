import React from 'react'
import { useForm } from "react-hook-form"

const Admission = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (

    <div>
      <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='flex flex-wrap mx-20  justify-center'>

          <div>
            <label >
              <span className='text-sm mx-[18px] ' >Full Name</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]' type="text" placeholder='Full Name' {...register("fullName", {
                required: "Full Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Must contain only Letters"
                },
                minLength: {
                  value: 3,
                  message: "Full Name must be 3 Letters"
                },
                maxLength: {
                  value: 30,
                  message: "Full Name must be 30 Letters"
                }
              })} />
            </label>
            <br />
            {errors.fullName?.type === "required" && <span>{errors.fullName.message}</span>}
            {errors.fullName?.type === "pattern" && <span>{errors.fullName.message}</span>}
            {errors.fullName?.type === "minLength" && <span>{errors.fullName.message}</span>}
            {errors.fullName?.type === "maxLength" && <span>{errors.fullName.message}</span>}
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '> Father Name</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]' type="text" placeholder='Father Name'{...register("fatherName", {
                required: "Father Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Must contain only Letters"
                },
                minLength: {
                  value: 3,
                  message: "Father Name must be 3 Letters"
                },
                maxLength: {
                  value: 30,
                  message: "Father Name must be 30 Letters"
                }
              })} />
            </label>
            <br />
            {errors.fatherName?.type === "required" && <span>{errors.fatherName.message}</span>}
            {errors.fatherName?.type === "pattern" && <span>{errors.fatherName.message}</span>}
            {errors.fatherName?.type === "minLength" && <span>{errors.fatherName.message}</span>}
            {errors.fatherName?.type === "maxLength" && <span>{errors.fatherName.message}</span>}
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>Email</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]' type="email" placeholder='Email' {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Must contain '@' , 'gmail' , '.com'"
                }
              })} />
            </label>
            <br />
            {errors.email?.type === "required" && <span>{errors.email.message}</span>}
            {errors.email?.type === "pattern" && <span>{errors.email.message}</span>}
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>Phone Number</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]' type="text" placeholder='Phone Number'{...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Must contain only numbers"
                },
                minLength: {
                  value: 11,
                  message: "Phone Numbers must be exactly 11 Digits"
                },
                maxLength: {
                  value: 11,
                  message: "Phone Numbers must be exactly 11 Digits"
                }
              })} />
            </label>
            <br />
            {errors.phoneNumber?.type === "required" && <span>{errors.phoneNumber.message}</span>}
            {errors.phoneNumber?.type === "pattern" && <span>{errors.phoneNumber.message}</span>}
            {errors.phoneNumber?.type === "minLength" && <span>{errors.phoneNumber.message}</span>}
            {errors.phoneNumber?.type === "maxLength" && <span>{errors.phoneNumber.message}</span>}
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>CNIC Number</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]'
                type="text"
                placeholder="CNIC"
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
            <br />
            {errors.cnicNumber?.type === "required" && <span>{errors.cnicNumber.message}</span>}
            {errors.cnicNumber?.type === "pattern" && <span>{errors.cnicNumber.message}</span>}
            {errors.cnicNumber?.type === "minLength" && <span>{errors.cnicNumber.message}</span>}
            {errors.cnicNumber?.type === "maxLength" && <span>{errors.cnicNumber.message}</span>}
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>Date of Birth</span>
              <br />
              <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px]' type="date" {...register("date", { required: true })} />
            </label>
            <br />
            {errors.date && <span>Date of Birth is required</span>}
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>Gender</span>
              <br />
              <select className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px] mb-8' {...register("gender")}>
                <option disabled value="">Select an option</option>
                <option value="female">Female</option>
                <option selected value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
          </div>

          <div>
            <label>
              <span className='text-sm mx-[18px] '>Do you have a Laptop?</span>
              <br />
              <select className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 my-[5px] mb-8' {...register("laptop")}>
                <option disabled value="">Select an option</option>
                <option selected value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
          </div>
        </div >

        <label >
          <span className='text-sm mx-[110px] '>Address</span>
          <br />
          <input className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px] my-[5px]' type="text" placeholder='Address' {...register("address", { required: true, minLength: 15 })} />
        </label>
        <br />
        {errors.address && <span>Address is required</span>}
        <br />

        <label >
          <span className='text-sm mx-[110px] '>Last Qualification</span>
          <br />
          <select className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px] my-[5px] mb-8' {...register("qualification")}>
            <option disabled value="">Select an option</option>
            <option selected value="matric">Matric</option>
            <option value="intermediate">Intermediate</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
          </select>
        </label>
        <br />

        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          <span className='text-sm mx-[110px] '>Profile Image</span>
          <br />
          <div className=''>
            <input
              type="file"
              className=" h-12  mx-[105px] my-[5px] text-sm px-3 py-[10px]  w-[1140px]  border border-gray-300 rounded-xl "
              {...register("profile", { required: true })}
            />
          </div>
          {errors.profile && <span>Profile Image is required</span>}
          <br />
          <ul className='list-disc list-inside ml-[110px]'>
            <li >With white or blue background</li>
            <li>File type: jpg, jpeg, png</li>
            <li>Upload your recent passport size picture</li>
            <li>Your face should be clearly visible without any glasses</li>
          </ul>
        </label>
        <br />

        <input className='w-[1140px]  h-12 border bg-[#4a00ff] text-white hover:bg-[#1a1f99] border-gray-300  rounded-xl text-center  mx-[105px] mb-[50px]' type="submit" />

      </form>

    </div>

  )
}

export default Admission

{/* <input type="file"  className=' w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px] my-[5px]' {...register("profile", { required: true })} /> */ }