import React from 'react'
import { productdata } from '../Data/Products'
import Product from './Product'
const Products = () => {
  return (
    <div className='mx-20 '>
    <div className='text-center text-pink-600 font-bold text-2xl'>
      <p className='pb-12 '>Product List</p></div>
      <div className='flex'>
      <input type='text'className='border border-gray-400 m-5  border rounded-sm  ' placeholder="Search Product"></input>
      <select>
  <option>All Categories</option>
  <option>Men's Clothing</option>
  <option>Women's Clothing</option>
  <option>Electronics</option>
  <option>Jewelery</option>
</select>


<select id="sort" className='m-2 ' name="sort">
  <option value="">Sort By</option>
  <option value="lowToHigh">Price: Low to High</option>
  <option value="highToLow">Price: High to Low</option>
  <option value="rating">Rating</option>
</select>
      </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  border-2 border-gray-50'>
       { productdata.map((p) => (
            <Product key={p.id} image={p.image}  title={p.title} price={p.price} />
  ))}</div>
    </div>
  )
}

export default Products
