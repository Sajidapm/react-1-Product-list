import React from 'react'

const Product = ({image,title,price,category,rating}) => {
  return (
    <div className='bg-white/90 backdrop-blur-md border 
    border-pink-300 shadow-xl rounded-2xl p-4 flex flex-col
    h-full transform hover:translate-y-2 hover:shadow-purple-300
    transition-all duration-300 gap-2'>
      <img src={image} alt={title} className='object-contain h-40 w-full' />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{category}</p>
      <p>{rating}</p>
      <button className='mt-auto w-full bg-linear-to-l from-pink-600 via-fuchsia-600 to-pink-600 text-white rounded-lg  shadow-md hover:shadow-lg' >Add to cart</button>
    </div>
  )
}

export default Product
