import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { sendData, uploadImage } from '../config/firebase/firebasemethods';

const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userData, setUserData] = useState([]);

  const sendDatatoFirestore = (data) => {
    const file = data.profile[0];

    uploadImage(file, data.email)
      .then((url) => {
        sendData({
          name: data.fullName,
          father: data.fatherName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          address: data.address,
          gender: data.gender,
          laptop: data.laptop,
          cnic: data.cnicNumber,
          qualification: data.qualification,
          profileImg: url,
          dateOfBirth: data.date
        }, 'userData')
          .then((res) => {
            setUserData([...userData, {
              name: data.fullName,
              father: data.fatherName,
              phoneNumber: data.phoneNumber,
              email: data.email,
              address: data.address,
              gender: data.gender,
              laptop: data.laptop,
              cnic: data.cnicNumber,
              qualification: data.qualification,
              profileImg: url,
              dateOfBirth: data.date
            }]);
            console.log(data);
            console.log(res);
          })
          .catch((error) => {
            console.error("Error saving data to Firestore:", error);
          });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Form</h1>

      <form onSubmit={handleSubmit(sendDatatoFirestore)} className="space-y-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">
              <span className='text-sm'>Full Name</span>
              <input 
                type="text" 
                placeholder='Full Name' 
                className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
                {...register("fullName", {
                  required: "Full Name is required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
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
                })} 
              />
            </label>
            {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>Father Name</span>
              <input 
                type="text" 
                placeholder='Father Name' 
                className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
                {...register("fatherName", {
                  required: "Father Name is required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
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
                })} 
              />
            </label>
            {errors.fatherName && <span className='text-red-600 text-sm'>{errors.fatherName.message}</span>}
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>Email</span>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Must contain '@' , 'gmail' , '.com'"
                  }
                })} 
              />
            </label>
            {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>Phone Number</span>
              <input 
                type="text" 
                placeholder='Phone Number' 
                className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
                {...register("phoneNumber", {
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
                })} 
              />
            </label>
            {errors.phoneNumber && <span className='text-red-600 text-sm'>{errors.phoneNumber.message}</span>}
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>CNIC Number</span>
              <input 
                type="text" 
                placeholder="CNIC" 
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

          <div>
            <label className="block">
              <span className='text-sm'>Date of Birth</span>
              <input 
                type="date" 
                className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
                {...register("date", { required: true })} 
              />
            </label>
            {errors.date && <span className='text-red-600 text-sm'>Date of Birth is required</span>}
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>Gender</span>
              <select className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' {...register("gender")}>
                <option disabled>Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <label className="block">
              <span className='text-sm'>Do you have a Laptop?</span>
              <select className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' {...register("laptop")}>
                <option disabled>Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <label className="block">
            <span className='text-sm'>Address</span>
            <input 
              type="text" 
              placeholder='Address' 
              className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' 
              {...register("address", { required: true, minLength: 15 })} 
            />
          </label>
          {errors.address && <span className='text-red-600 text-sm'>Address is required</span>}
        </div>

        <div>
          <label className="block">
            <span className='text-sm'>Last Qualification</span>
            <select className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' {...register("qualification")}>
              <option disabled>Select an option</option>
              <option value="matric">Matric</option>
              <option value="intermediate">Intermediate</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            <span className='text-sm'>Profile Image</span>
            <br />
            <input 
              type="file" 
              className='mt-2' 
              {...register("profile", { required: "Profile image is required" })} 
            />
          </label>
          {errors.profile && <span className='text-red-600 text-sm'>{errors.profile.message}</span>}
        </div>

        <button 
          type="submit" 
          className='w-full h-12 bg-blue-600 text-white rounded-xl mb-10  hover:bg-blue-500 transition duration-200 mt-6'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admission;








// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { sendData, uploadImage } from '../config/firebase/firebasemethods';

// const Admission = () => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [userData, setUserData] = useState([]);

//   const sendDatatoFirestore = (data) => {
//     const file = data.profile[0];

//     uploadImage(file, data.email)
//       .then((url) => {

//         sendData({
//           name: data.fullName,
//           father: data.fatherName,
//           phoneNumber: data.phoneNumber,
//           email: data.email,
//           address: data.address,
//           gender: data.gender,
//           laptop: data.laptop,
//           cnic: data.cnicNumber,
//           qualification: data.qualification,
//           profileImg: url,
//           dateOfBirth: data.date
//         }, 'userData')
//           .then((res) => {
//             setUserData([...userData, {
//               name: data.fullName,
//               father: data.fatherName,
//               phoneNumber: data.phoneNumber,
//               email: data.email,
//               address: data.address,
//               gender: data.gender,
//               laptop: data.laptop,
//               cnic: data.cnicNumber,
//               qualification: data.qualification,
//               profileImg: url,
//               dateOfBirth: data.date
//             }]);
//             console.log(data);
//             console.log(res);
//           })
//           .catch((error) => {
//             console.error("Error saving data to Firestore:", error);
//           });

//       })
//       .catch((error) => {
//         console.error("Error uploading image:", error);
//       });
//   };

//   return (

//     <div>
//       <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Form</h1>

//       <form onSubmit={handleSubmit(sendDatatoFirestore)}>

//         <div>
//           <div className='flex flex-wrap mx-20  justify-center'>

//             <div>
//               <label >
//                 <span className='text-sm mx-[18px] ' >Full Name</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 mt-[9px]' type="text" placeholder='Full Name' {...register("fullName", {
//                   required: "Full Name is required",
//                   pattern: {
//                     value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                     message: "Must contain only Letters"
//                   },
//                   minLength: {
//                     value: 3,
//                     message: "Full Name must be 3 Letters"
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: "Full Name must be 30 Letters"
//                   }
//                 })} />
//               </label>
//               <br />
//               {errors.fullName?.type === "required" && <span className='text-red-600 text-sm  mx-[18px] '>{errors.fullName.message}</span>}
//               {errors.fullName?.type === "pattern" && <span className='text-red-600 text-sm  mx-[18px] '>{errors.fullName.message}</span>}
//               {errors.fullName?.type === "minLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.fullName.message}</span>}
//               {errors.fullName?.type === "maxLength" && <span className='text-red-600 text-sm mx-[18px]  '>{errors.fullName.message}</span>}
//               <br />
//             </div>

//             <div >
//               <label >
//                 <span className='text-sm mx-[18px] '> Father Name</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5   mx-3 mt-[9px]' type="text" placeholder='Father Name'{...register("fatherName", {
//                   required: "Father Name is required",
//                   pattern: {
//                     value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                     message: "Must contain only Letters"
//                   },
//                   minLength: {
//                     value: 3,
//                     message: "Father Name must be 3 Letters"
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: "Father Name must be 30 Letters"
//                   }
//                 })} />
//               </label>
//               <br />
//               {errors.fatherName?.type === "required" && <span className='text-red-600 text-sm mx-[18px] '>{errors.fatherName.message}</span>}
//               {errors.fatherName?.type === "pattern" && <span className='text-red-600 text-sm mx-[18px] '>{errors.fatherName.message}</span>}
//               {errors.fatherName?.type === "minLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.fatherName.message}</span>}
//               {errors.fatherName?.type === "maxLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.fatherName.message}</span>}
//               <br />
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px]  '>Email</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 mt-[9px]' type="email" placeholder='Email' {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                     message: "Must contain '@' , 'gmail' , '.com'"
//                   }
//                 })} />
//               </label>
//               <br />
//               {errors.email?.type === "required" && <span className='text-red-600 text-sm mx-[18px] '>{errors.email.message}</span>}
//               {errors.email?.type === "pattern" && <span className='text-red-600 text-sm mx-[18px] '>{errors.email.message}</span>}
//               <br />
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px] '>Phone Number</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 mt-[9px]' type="text" placeholder='Phone Number'{...register("phoneNumber", {
//                   required: "Phone Number is required",
//                   pattern: {
//                     value: /^[0-9]+$/,
//                     message: "Must contain only numbers"
//                   },
//                   minLength: {
//                     value: 11,
//                     message: "Phone Numbers must be exactly 11 Digits"
//                   },
//                   maxLength: {
//                     value: 11,
//                     message: "Phone Numbers must be exactly 11 Digits"
//                   }
//                 })} />
//               </label>
//               <br />
//               {errors.phoneNumber?.type === "required" && <span className='text-red-600 text-sm mx-[18px] '>{errors.phoneNumber.message}</span>}
//               {errors.phoneNumber?.type === "pattern" && <span className='text-red-600 text-sm mx-[18px] '>{errors.phoneNumber.message}</span>}
//               {errors.phoneNumber?.type === "minLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.phoneNumber.message}</span>}
//               {errors.phoneNumber?.type === "maxLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.phoneNumber.message}</span>}
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px] '>CNIC Number</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5   mx-3 mt-[9px]'
//                   type="text"
//                   placeholder="CNIC"
//                   {...register("cnicNumber", {
//                     required: "CNIC is required",
//                     pattern: {
//                       value: /^[0-9]+$/,
//                       message: "CNIC must contain only numbers"
//                     },
//                     minLength: {
//                       value: 13,
//                       message: "CNIC must be exactly 13 digits"
//                     },
//                     maxLength: {
//                       value: 13,
//                       message: "CNIC must be exactly 13 digits"
//                     }
//                   })}
//                 />
//               </label>
//               <br />
//               {errors.cnicNumber?.type === "required" && <span className='text-red-600 text-sm mx-[18px] '>{errors.cnicNumber.message}</span>}
//               {errors.cnicNumber?.type === "pattern" && <span className='text-red-600 text-sm mx-[18px] '>{errors.cnicNumber.message}</span>}
//               {errors.cnicNumber?.type === "minLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.cnicNumber.message}</span>}
//               {errors.cnicNumber?.type === "maxLength" && <span className='text-red-600 text-sm mx-[18px] '>{errors.cnicNumber.message}</span>}
//               <br />
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px] '>Date of Birth</span>
//                 <br />
//                 <input className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5   mx-3 mt-[9px]' type="date" {...register("date", { required: true })} />
//               </label>
//               <br />
//               {errors.date && <span className='text-red-600 text-sm mx-[18px] '>Date of Birth is required</span>}
//               <br />
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px] '>Gender</span>
//                 <br />
//                 <select defaultValue="male" className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5   mx-3 mt-[9px] mb-8' {...register("gender")}>
//                   <option disabled >Select an option</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </label>
//               <br />
//             </div>

//             <div className='mt-[30px]'>
//               <label>
//                 <span className='text-sm mx-[18px] '>Do you have a Laptop?</span>
//                 <br />
//                 <select defaultValue="yes" className='w-[560px] h-12 border border-gray-300  rounded-xl pl-5  mx-3 mt-[9px] mb-8' {...register("laptop")}>
//                   <option disabled >Select an option</option>
//                   <option value="yes">Yes</option>
//                   <option value="no">No</option>
//                 </select>
//               </label>
//               <br />
//             </div>
//           </div >
//         </div >

//         <div>
//           <div className='mt-[30px]'>
//             <label >
//               <span className='text-sm mx-[110px] '>Address</span>
//               <br />
//               <input className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px]   mt-[9px]' type="text" placeholder='Address' {...register("address", { required: true, minLength: 15 })} />
//             </label>
//             <br />
//             {errors.address && <span className='text-red-600 text-sm mx-[113px] '>Address is required</span>}
//             <br />
//           </div>

//           <div className='mt-[30px]'>
//             <label >
//               <span className='text-sm mx-[110px] '>Last Qualification</span>
//               <br />
//               <select defaultValue="matric" className='w-[1140px] h-12 border border-gray-300  rounded-xl pl-5  mx-[105px]  mt-[9px] mb-8' {...register("qualification")}>
//                 <option disabled >Select an option</option>
//                 <option value="matric">Matric</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="bachelors">Bachelors</option>
//                 <option value="masters">Masters</option>
//               </select>
//             </label>
//             <br />
//           </div>

//           <div className='mt-[30px]'>
//             <label>
//               <span className='text-sm mx-[110px]  '>Profile Image</span>
//               <br />
//               <input
//                 type="file"
//                 className=" h-12  text-sky-900  mx-[105px]  mt-[6px] text-sm px-3 py-[10px]  w-[1140px]  border border-gray-300 rounded-xl "
//                 {...register("profile", { required: true })}
//               />
//               {errors.profile && <span className='text-red-600  text-sm mx-[113px] '>Profile Image is required</span>}
//               <br />
//               <ul className='list-disc list-inside ml-[110px]  mt-5 text-sky-900'>
//                 <li >With white or blue background</li>
//                 <li>File type: jpg, jpeg, png</li>
//                 <li>Upload your recent passport size picture</li>
//                 <li>Your face should be clearly visible without any glasses</li>
//               </ul>
//             </label>
//             <br />
//           </div>
//         </div>

//         <input className='w-[1140px]  h-12 border bg-[#4a00ff] text-white hover:bg-[#1a1f99] border-gray-300  rounded-xl text-center  mx-[105px] mb-[50px]' type="submit" />

//       </form>

//     </div>

//   )
// }

// export default Admission







// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { sendData, uploadImage } from '../config/firebase/firebasemethods';

// const Admission = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [userData, setUserData] = useState([]);

//   const sendDatatoFirestore = (data) => {
//     const file = data.profile[0];

//     uploadImage(file, data.email)
//       .then((url) => {
//         sendData({
//           name: data.fullName,
//           father: data.fatherName,
//           phoneNumber: data.phoneNumber,
//           email: data.email,
//           address: data.address,
//           gender: data.gender,
//           laptop: data.laptop,
//           cnic: data.cnicNumber,
//           qualification: data.qualification,
//           profileImg: url,
//           dateOfBirth: data.date
//         }, 'userData')
//           .then((res) => {
//             setUserData([...userData, {
//               name: data.fullName,
//               father: data.fatherName,
//               phoneNumber: data.phoneNumber,
//               email: data.email,
//               address: data.address,
//               gender: data.gender,
//               laptop: data.laptop,
//               cnic: data.cnicNumber,
//               qualification: data.qualification,
//               profileImg: url,
//               dateOfBirth: data.date
//             }]);
//             console.log(data);
//             console.log(res);
//           })
//           .catch((error) => {
//             console.error("Error saving data to Firestore:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error uploading image:", error);
//       });
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Admission Form</h1>

//       <form onSubmit={handleSubmit(sendDatatoFirestore)} className="space-y-6">
//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Full Name</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder='Full Name' {...register("fullName", {
//                 required: "Full Name is required",
//                 pattern: {
//                   value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                   message: "Must contain only Letters"
//                 },
//                 minLength: {
//                   value: 3,
//                   message: "Full Name must be 3 Letters"
//                 },
//                 maxLength: {
//                   value: 30,
//                   message: "Full Name must be 30 Letters"
//                 }
//               })} />
//             </label>
//             {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
//           </div>

//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Father Name</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder='Father Name' {...register("fatherName", {
//                 required: "Father Name is required",
//                 pattern: {
//                   value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                   message: "Must contain only Letters"
//                 },
//                 minLength: {
//                   value: 3,
//                   message: "Father Name must be 3 Letters"
//                 },
//                 maxLength: {
//                   value: 30,
//                   message: "Father Name must be 30 Letters"
//                 }
//               })} />
//             </label>
//             {errors.fatherName && <span className='text-red-600 text-sm'>{errors.fatherName.message}</span>}
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Email</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="email" placeholder='Email' {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                   message: "Must contain '@' , 'gmail' , '.com'"
//                 }
//               })} />
//             </label>
//             {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
//           </div>

//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Phone Number</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder='Phone Number' {...register("phoneNumber", {
//                 required: "Phone Number is required",
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: "Must contain only numbers"
//                 },
//                 minLength: {
//                   value: 11,
//                   message: "Phone Numbers must be exactly 11 Digits"
//                 },
//                 maxLength: {
//                   value: 11,
//                   message: "Phone Numbers must be exactly 11 Digits"
//                 }
//               })} />
//             </label>
//             {errors.phoneNumber && <span className='text-red-600 text-sm'>{errors.phoneNumber.message}</span>}
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>CNIC Number</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder="CNIC" {...register("cnicNumber", {
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
//               })} />
//             </label>
//             {errors.cnicNumber && <span className='text-red-600 text-sm'>{errors.cnicNumber.message}</span>}
//           </div>

//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Date of Birth</span>
//               <br />
//               <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="date" {...register("date", { required: true })} />
//             </label>
//             {errors.date && <span className='text-red-600 text-sm'>Date of Birth is required</span>}
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Gender</span>
//               <br />
//               <select className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' {...register("gender")}>
//                 <option disabled>Select an option</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </label>
//           </div>

//           <div className="w-full sm:w-1/2 px-2">
//             <label>
//               <span className='text-sm'>Do you have a Laptop?</span>
//               <br />
//               <select className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' {...register("laptop")}>
//                 <option disabled>Select an option</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </label>
//           </div>
//         </div>

//         <div className="w-full px-2">
//           <label>
//             <span className='text-sm'>Address</span>
//             <br />
//             <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder='Address' {...register("address", { required: true, minLength: 15 })} />
//           </label>
//           {errors.address && <span className='text-red-600 text-sm'>Address is required and should be at least 15 characters</span>}
//         </div>

//         <div className="w-full px-2">
//           <label>
//             <span className='text-sm'>Qualification</span>
//             <br />
//             <input className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2' type="text" placeholder='Qualification' {...register("qualification", { required: true })} />
//           </label>
//           {errors.qualification && <span className='text-red-600 text-sm'>Qualification is required</span>}
//         </div>

//         <div className="w-full px-2">
//           <label>
//             <span className='text-sm'>Profile Image</span>
//             <br />
//             <input type="file" {...register("profile", { required: true })} />
//           </label>
//           {errors.profile && <span className='text-red-600 text-sm'>Profile Image is required</span>}
//         </div>

//         <div className="flex justify-center">
//           <button className='bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 mt-5' type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Admission;
