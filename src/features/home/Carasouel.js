import { Carousel } from "@material-tailwind/react";
import { useGetTopProductsQuery } from "../products/productApi";
import { baseUrl } from "../../constants/apis";


const Carasouel = () => {
  const { data, isLoading, isError, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <div className="h-[220px] w-[75%] animate-pulse bg-gray-300 rounded mx-auto flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-12 w-12 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </div>
  }


  return (
    <div>
      {data && <Carousel autoplay={true} className="rounded-xl max-w-4xl mx-auto">
        {data.products?.map((product) => {
          return <img className="h-[300px]" key={product._id} src={`${baseUrl}${product.product_image}`} alt="" />
        })}

      </Carousel>}
    </div>
  );
}

export default Carasouel