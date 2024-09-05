import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=> res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div>
      <Category product={products}></Category>
    </div>
  );
};

export default Categories;