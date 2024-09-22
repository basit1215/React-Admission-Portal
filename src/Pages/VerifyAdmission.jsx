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
      <h1>Admission Verification</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

      <label >
        CNIC (Which you provided during form submission)
        <br />
        <input type="number" placeholder='CNIC Number' {...register("cnicNumber", { required: true, min: 13, max: 13 })} />
      </label>
      <br />
      {errors.cnicNumber && <span>This field is required</span>}
      <br />

      <input type="submit" />
      </form>
    </div>
  )
}

export default VerifyAdmission