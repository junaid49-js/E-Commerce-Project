import React , {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`}>
        <div>
            <div className='overflow-hidden'>
                <img className='rounded-t-xl hover:scale-110 transition-all duration-500' src={image[0]} alt="" />
            </div>
            <p>{name}</p>
            <p>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem
