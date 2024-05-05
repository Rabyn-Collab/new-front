import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useUserLoginMutation } from "./authApi";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const userSchema = Yup.object({
    email: Yup.string().email('').required('email required'),
    password: Yup.string().min(5).max(20).required(),
  });

  const formik = useFormik({

    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (val, { resetForm }) => {

      try {
        const response = await userLogin(val).unwrap();
        dispatch(setUser(response.data));
        toast.dismiss();
        toast.success(response.status);
        nav(-1);
      } catch (err) {
        toast.dismiss();
        // toast.error(err.data.message);
      }

    },
    validationSchema: userSchema

  });

  return (

    <Card className="mx-auto pt-4 max-w-80" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Log In
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="mb-1 flex flex-col gap-6">
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
            type={show ? 'text' : 'password'}
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

        <Button type="submit" loading={isLoading} disabled={isLoading} className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal ">
          Don't have an account ?
          <button onClick={() => nav('/signUp')} type="button" className=" ml-2 font-medium text-gray-900">
            Sign Up
          </button>
        </Typography>
      </form>
    </Card>

  );
}

export default Login



