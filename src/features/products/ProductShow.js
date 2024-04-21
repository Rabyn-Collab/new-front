import { imageUrl } from "../../constants/apis";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { products } from "../../dummy/products";
const ProductShow = () => {
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-5">


      {products.map((product) => {
        return <Card key={product._id} className="mt-6  ">
          <CardHeader shadow={false} floated={false} className="h-52">
            <img
              src={`${product.product_image}`}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {product.product_name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                ${product.product_price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {product.product_detail}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() => nav(`/product/${product._id}`)}
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              View More
            </Button>
          </CardFooter>
        </Card>;
      })}
    </div>
  )
}
export default ProductShow