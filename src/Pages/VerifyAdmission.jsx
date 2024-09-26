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










// import React from 'react'
// import { useForm } from "react-hook-form"

// const VerifyAdmission = () => {

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)

//   return (

//     <div>
//       <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Verification</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>
//             <span className='text-sm mx-[110px] '>CNIC (Which you provided during form submission)</span>
//             <br />
//             <input type="text" placeholder='CNIC Number' className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px] mt-[9px]' {...register("cnicNumber", {
//               required: "CNIC is required",
//               pattern: {
//                 value: /^[0-9]+$/,
//                 message: "CNIC must contain only numbers"
//               },
//               minLength: {
//                 value: 13,
//                 message: "CNIC must be exactly 13 digits"
//               },
//               maxLength: {
//                 value: 13,
//                 message: "CNIC must be exactly 13 digits"
//               }
//             })} />
//           </label>
//           <br />
//           {errors.cnicNumber?.type === "required" && <span className='text-red-600 text-sm mx-[113px] '>{errors.cnicNumber.message}</span>}
//           {errors.cnicNumber?.type === "pattern" && <span className='text-red-600 text-sm mx-[113px] '>{errors.cnicNumber.message}</span>}
//           {errors.cnicNumber?.type === "minLength" && <span className='text-red-600 text-sm mx-[113px] '>{errors.cnicNumber.message}</span>}
//           {errors.cnicNumber?.type === "maxLength" && <span className='text-red-600 text-sm mx-[113px] '>{errors.cnicNumber.message}</span>}
//           <br />

//           <input className='w-[1140px]  h-12 border bg-[#4a00ff] text-white hover:bg-[#1a1f99] border-gray-300  rounded-xl text-center  mx-[105px] mb-[50px]  mt-8' type="submit" />
//         </div>
//       </form>
//     </div>


//   )
// }

// export default VerifyAdmission











// import React from 'react';
// import { useForm } from "react-hook-form";

// const VerifyAdmission = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Verification</h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
//         <div className="w-full max-w-md">
//           <label className="block">
//             <span className='text-sm'>CNIC (Which you provided during form submission)</span>
//             <br />
//             <input 
//               type="text" 
//               placeholder='CNIC Number' 
//               className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
//               {...register("cnicNumber", {
//                 required: "CNIC is required",
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: "CNIC must contain only numbers"
//                 },
//                 minLength: {
//                   value: 13,
//                   message: "CNIC must be exactly 13 digits"
//                 },
//                 maxLength: {
//                   value: 13,
//                   message: "CNIC must be exactly 13 digits"
//                 }
//               })} 
//             />
//           </label>
//           {errors.cnicNumber && (
//             <span className='text-red-600 text-sm mt-1'>{errors.cnicNumber.message}</span>
//           )}
//         </div>

//         <input 
//           className='w-full max-w-md h-12 bg-[#4a00ff] text-white hover:bg-[#1a1f99] rounded-xl text-center mt-8 cursor-pointer' 
//           type="submit" 
//         />
//       </form>
//     </div>
//   );
// };

// export default VerifyAdmission;
