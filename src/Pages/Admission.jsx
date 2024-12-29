import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendData, uploadImage } from "../config/firebase/firebasemethods";
import Swal from 'sweetalert2';

const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();

  const [userData, setUserData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendDatatoFirestore = async (data) => {
    setIsSubmitting(true);
    const file = data.profile[0];

    try {
      const url = await uploadImage(file, data.email);
      const res = await sendData(
        {
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
          dateOfBirth: data.date,
        },
        "userData"
      );

      setUserData([
        ...userData,
        {
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
          dateOfBirth: data.date,
        },
      ]);
      setIsSubmitting(false);

      Swal.fire({
        title: 'Thank you!',
        text: 'Your form has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        console.log('THANK YOU')
        reset();
      });

    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl text-center font-bold mt-5 mb-10">
        Admission Form
      </h1>

      <form onSubmit={handleSubmit(sendDatatoFirestore)} className="space-y-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">
              <span className="text-sm">Full Name</span>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("fullName", {
                  required: "Full Name is required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Must contain only Letters",
                  },
                  minLength: {
                    value: 3,
                    message: "Full Name must be 3 Letters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Full Name must be 30 Letters",
                  },
                })}
              />
            </label>
            {errors.fullName && (
              <span className="text-red-600 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Father Name</span>
              <input
                type="text"
                placeholder="Father Name"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("fatherName", {
                  required: "Father Name is required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Must contain only Letters",
                  },
                  minLength: {
                    value: 3,
                    message: "Father Name must be 3 Letters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Father Name must be 30 Letters",
                  },
                })}
              />
            </label>
            {errors.fatherName && (
              <span className="text-red-600 text-sm">
                {errors.fatherName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Email</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Must contain '@' , 'gmail' , '.com'",
                  },
                })}
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Phone Number</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Must contain only numbers",
                  },
                  minLength: {
                    value: 11,
                    message: "Phone Numbers must be exactly 11 Digits",
                  },
                  maxLength: {
                    value: 11,
                    message: "Phone Numbers must be exactly 11 Digits",
                  },
                })}
              />
            </label>
            {errors.phoneNumber && (
              <span className="text-red-600 text-sm">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">CNIC Number</span>
              <input
                type="text"
                placeholder="CNIC"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("cnicNumber", {
                  required: "CNIC is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "CNIC must contain only numbers",
                  },
                  minLength: {
                    value: 13,
                    message: "CNIC must be exactly 13 digits",
                  },
                  maxLength: {
                    value: 13,
                    message: "CNIC must be exactly 13 digits",
                  },
                })}
              />
            </label>
            {errors.cnicNumber && (
              <span className="text-red-600 text-sm">
                {errors.cnicNumber.message}
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Date of Birth</span>
              <input
                type="date"
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("date", { required: true })}
              />
            </label>
            {errors.date && (
              <span className="text-red-600 text-sm">
                Date of Birth is required
              </span>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Gender</span>
              <select
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("gender")}
              >
                <option disabled>Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-sm">Do you have a Laptop?</span>
              <select
                className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
                {...register("laptop")}
              >
                <option disabled>Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <label className="block">
            <span className="text-sm">Address</span>
            <input
              type="text"
              placeholder="Address"
              className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
              {...register("address", { required: true, minLength: 15 })}
            />
          </label>
          {errors.address && (
            <span className="text-red-600 text-sm">Address is required</span>
          )}
        </div>

        <div>
          <label className="block">
            <span className="text-sm">Last Qualification</span>
            <select
              className="w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2"
              {...register("qualification")}
            >
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
            <span className="text-sm">Profile Image</span>
            <br />
            <input
              type="file"
              className="mt-2"
              style={{
                border: "1px solid white",
                borderRadius: "10px",
                width: " 100%",
                height: "3rem",
                padding: "8px 12px",
              }}
              {...register("profile", {
                required: "Profile image is required",
              })}
            />
          </label>
          {errors.profile && (
            <span className="text-red-600 text-sm">
              {errors.profile.message}
            </span>
          )}
          <ul className="list-disc pl-5 mt-5 ">
            <li>With white or blue background</li>
            <li>File type: jpg, jpeg, png</li>
            <li>Upload your recent passport size picture</li>
            <li>Your face should be clearly visible without any glasses</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-blue-600 text-white rounded-xl mb-10 hover:bg-blue-500 transition duration-200 mt-6 flex justify-center items-center"
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Admission;