import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";

import * as Yup from 'yup';


const ShippingAddress = () => {


  const placeSchema = Yup.object({
    address: Yup.string().required(),
    city: Yup.string().required(),
  });

  const formik = useFormik({

    initialValues: {
      address: '',
      city: ''
    },

    onSubmit: async (val, { resetForm }) => {

    },
    validationSchema: placeSchema

  });

  return (

    <Card className="mx-auto pt-4 max-w-80" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Fill Up Your Address
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Address
          </Typography>
          <Input
            size="lg"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            placeholder="address"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.errors.address && formik.touched.address && <h1 className="text-pink-600">{formik.errors.address}</h1>}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            City
          </Typography>
          <Input
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            size="lg"
            placeholder="city"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.errors.city && formik.touched.city && <h1 className="text-pink-600">{formik.errors.city}</h1>}
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>

  );
}

export default ShippingAddress



