import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    },[])

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <Title text1 = {'LATEST'} text2 = {'COLLECTION'}/>
            <p className='w-3/4 m-auto text-base text-gray-600'>
            These Clothings Are Made By Hard Working Europian Workers, Not Asian Kids.
            </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            {latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default LatestCollection
