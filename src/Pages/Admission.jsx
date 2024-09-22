import React from 'react'
import { useForm } from "react-hook-form"


const Admission = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (

    <div>
      <h1>Admission Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
          Full Name
          <br />
          <input type="text" placeholder='Full Name' {...register("fullName", { required: true, maxLength: 20 })} />
        </label>
        <br />
        {errors.fullName && <span>This field is required</span>}
        <br />

        <label>
          Father Name
          <br />
          <input type="text" placeholder='Father Name'{...register("fatherName", { pattern: /^[A-Za-z]+$/i })} />
        </label>
        <br />
        {errors.fatherName && <span>This field is required</span>}
        <br />

        <label>
          Email
          <br />
          <input type="email" placeholder='Email' {...register("email", { required: true })} />
        </label>
        <br />
        {errors.email && <span>This field is required</span>}
        <br />

        <label>
          Phone Number
          <br />
          <input type="number" placeholder='Phone Number'{...register("phoneNumber", { required: true, min: 11, max: 13 })} />
        </label>
        <br />
        {errors.phoneNumber && <span>This field is required</span>}
        <br />

        <label >
          CNIC Number
          <br />
          <input type="number" placeholder='CNIC Number' {...register("cnicNumber", { required: true, min: 13, max: 13 })} />
        </label>
        <br />
        {errors.cnicNumber && <span>This field is required</span>}
        <br />

        <label>
          Date of Birth
          <br />
          <input type="date" {...register("date", { required: true })} />
        </label>
        <br />
        {errors.date && <span>This field is required</span>}
        <br />

        <label>
          Gender
          <br />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </label>
        <br />
        {errors.gender && <span>This field is required</span>}
        <br />

        <label>
          Do you have a Laptop?
          <br />
          <select {...register("laptop")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <br />
        {errors.laptop && <span>This field is required</span>}
        <br />

        <label >
          Address
          <br />
          <input type="text" placeholder='Address' {...register("address", { required: true })} />
        </label>
        <br />
        {errors.address && <span>This field is required</span>}
        <br />

        <label >
          Last Qualification
          <br />
          <select {...register("qualification")}>
            <option value="matric">Matric</option>
            <option value="intermediate">Intermediate</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
          </select>
        </label>
        <br />
        {errors.qualification && <span>This field is required</span>}
        <br />

        <label>
          Profile Image
          <br />
          <input type="file" placeholder='' {...register("profile", { required: true })} />
          <br />
          <br />
          <ul>
            <li>With white or blue background</li>
            <li>File type: jpg, jpeg, png</li>
            <li>Upload your recent passport size picture</li>
            <li>Your face should be clearly visible without any glasses</li>
          </ul>
        </label>
        <br />
        {errors.profile && <span>This field is required</span>}
        <br />



        <input type="submit" />
      </form>

    </div>
  )
}

export default Admission