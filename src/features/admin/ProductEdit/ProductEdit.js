import ProductEditForm from './ProductEditForm';
import { products } from '../../../dummy/products';

const ProductEdit = () => {


  return (
    <div>
      {<ProductEditForm data={products[0]} />}
    </div>
  )
}
export default ProductEdit