import ProductTable from './ProductTable';
import ProductImage from './ProductImage';
import { Rating } from '@material-tailwind/react';
import ProductReview from './ProductReview';
import { products } from '../../dummy/products';
import { regUser } from '../../dummy/users';
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from './productApi';

const ProductDetail = () => {


  const { id } = useParams();

  const { isLoading, error, isError, data } = useGetProductByIdQuery(id);

  return (
    <div>
      {data && <div className='grid-cols-3 grid p-10 gap-5 items-start'>


        <ProductImage data={data.data} />
        <div>
          <p>{data.data.product_detail}</p>
          <Rating className="" value={Math.floor(data.data.rating)} color="green" readonly />
        </div>

        <ProductTable product={data.data} />

        {/* {<ProductReview user={regUser} id={data.data._id} reviews={products[0].reviews} />} */}

      </div>
      }
    </div>
  )
}
export default ProductDetail