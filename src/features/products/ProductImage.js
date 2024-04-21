import { products } from "../../dummy/products";



const ProductImage = ({ data }) => {

  return (
    <figure className="relative h-[300px] w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={products[0].product_image}
        alt="nature image"
      />

    </figure>
  );
}

export default ProductImage