import React from 'react'
import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from 'formik';


const UserDetailForm = ({ user }) => {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fullname: user.fullname,
      email: user.email
    },
    onSubmit: async (val) => {
    }
  });

  return (
    <Card color="transparent" shadow={false}>
      <Typography color="gray" className="mt-1 font-normal">
        Update Profile
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            name='fullname'
            value={values.fullname}
            onChange={handleChange}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            name='email'
            onChange={handleChange}
            value={values.email}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Update
        </Button>

      </form>
    </Card>
  )
}

export default UserDetailForm



