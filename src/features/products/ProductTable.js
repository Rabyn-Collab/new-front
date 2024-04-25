import { Card, Typography, Button, Option, Select } from "@material-tailwind/react";
import { useFormik } from "formik";
import { carts } from "../../dummy/carts";




const ProductTable = ({ product }) => {




  // const isExist = carts?.find((cart) => cart.product === product._id);
  const formik = useFormik({
    initialValues: {
      qty: 1
    }
  });

  const addCart = () => {



  }

  // const number = 9;
  // console.log([...Array(number).keys()]);

  return (
    <div>
      <Card className="h-full w-full overflow-scroll relative">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center " colSpan={4}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Product Detail
                </Typography>
              </th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <td className='p-4 border-b border-blue-gray-50 text-center'>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  Product
                </Typography>
              </td>
              <td className={`p-4 bg-blue-gray-50/50 text-center`}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {product.product_name}
                </Typography>
              </td>

            </tr>
            <tr>
              <td className='p-4 border-b border-blue-gray-50 text-center'>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  Price
                </Typography>
              </td>
              <td className={`p-4 bg-blue-gray-50/50 text-center`}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {product.product_price}
                </Typography>
              </td>

            </tr>
            <tr>
              <td className='p-4 border-b border-blue-gray-50 text-center'>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  Stock
                </Typography>
              </td>
              <td className={`p-4 bg-blue-gray-50/50 text-center`}>

                <div className="z-40">
                  {product.countInStock}


                </div>

              </td>

            </tr>

            <tr>
              <td className='p-4 border-b border-blue-gray-50 text-center'>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  Select Qty
                </Typography>
              </td>
              <td className={`p-4 bg-blue-gray-50/50 text-center`}>

                <div className="z-40">
                  <form>

                    <select value={formik.values.qty} onChange={(e) => {
                      formik.setFieldValue('qty', e.target.value)
                    }} className="px-2 py-1 z-30" label="Select" size="md" name="qty">
                      {[...Array(product.countInStock).keys()].map((val, i) => {
                        return <option value={val + 1} key={i + 1}>{val + 1} </option>
                      })}
                    </select>
                  </form>


                </div>

              </td>

            </tr>

          </tbody>
          <tfoot className="text-center">
            {<tr>
              <td colSpan={2}>
                <Button onClick={addCart}>Add To Cart</Button>
              </td>
            </tr>}
          </tfoot>
        </table>
      </Card>


    </div>
  );
}

export default ProductTable
