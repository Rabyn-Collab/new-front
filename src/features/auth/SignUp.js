import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useUserRegisterMutation } from "./authApi";
import { toast } from "react-toastify";


const SignUp = () => {

  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const nav = useNavigate();
  const userSchema = Yup.object({
    email: Yup.string().email('').required('email required'),
    fullname: Yup.string().required('fullname required'),
    password: Yup.string().min(5).max(20).required(),
  });

  const formik = useFormik({

    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },

    onSubmit: async (val, { resetForm }) => {
      try {
        const response = await userRegister(val).unwrap();
        toast.dismiss();
        toast.success(response.status);
        nav(-1);
      } catch (err) {
        toast.dismiss();
        toast.error(err.data.message);
      }
    },
    validationSchema: userSchema

  });

  return (

    <Card className="mx-auto pt-4 max-w-80" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>

      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            name="fullname"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            placeholder="fullname"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.errors.fullname && formik.touched.fullname && <h1 className="text-pink-600">{formik.errors.fullname}</h1>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.errors.email && formik.touched.email && <h1 className="text-pink-600">{formik.errors.email}</h1>}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.errors.password && formik.touched.password && <h1 className="text-pink-600">{formik.errors.password}</h1>}
        </div>


        <Button loading={isLoading} disabled={isLoading} type="submit" className="mt-6" fullWidth>
          SignUp
        </Button>


        <Typography color="gray" className="mt-4 text-center font-normal ">
          Don't have an account ?
          <button onClick={() => nav(-1)} type="button" className=" ml-2 font-medium text-gray-900">
            Login
          </button>
        </Typography>
      </form>
    </Card>

  );
}

export default SignUp