import { Carousel } from "@material-tailwind/react";
import { products } from "../../dummy/products";


const Carasouel = () => {


  return (
    <div>
      {<Carousel autoplay={true} className="rounded-xl max-w-4xl mx-auto">
        {products.map((product) => {
          return <img className="h-[300px]" key={product._id} src={product.product_image} alt="" />
        })}

      </Carousel>}
    </div>
  );
}

export default Carasouel