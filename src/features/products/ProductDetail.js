import ProductTable from './ProductTable';
import ProductImage from './ProductImage';
import { Rating } from '@material-tailwind/react';
import ProductReview from './ProductReview';
import { products } from '../../dummy/products';
import { regUser } from '../../dummy/users';

const ProductDetail = () => {





  return (
    <div>
      <div className='grid-cols-3 grid p-10 gap-5 items-start'>


        <ProductImage data={products[0]} />
        {<div>
          <p>{products[0].product_detail}</p>
          <Rating className="" value={4} color="green" readonly />
        </div>}

        {<ProductTable product={products[0]} />}

        {<ProductReview user={regUser} id={products[0]._id} reviews={products[0].reviews} />}

      </div>
    </div>
  )
}
export default ProductDetail