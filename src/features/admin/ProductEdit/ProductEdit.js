import ProductEditForm from './ProductEditForm';
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../../products/productApi';

const ProductEdit = () => {

  const { id } = useParams();
  const { isLoading, data, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      {<ProductEditForm data={data.data} />}
    </div>
  )
}
export default ProductEdit