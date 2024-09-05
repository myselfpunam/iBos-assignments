import React, { useEffect, useState } from 'react';
import './Products.css'
import Category from '../Category/Category';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [products, setProducts] = useState([])
  const [activeItem, setActiveItem] = useState();
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="row">
      <div className="col-md-2 col-md-sm-6">
      <ListGroup className='pt-5 ms-5'>
            <ListGroup.Item style={{ backgroundColor: activeItem === 'rocking' ? 'black' : 'white'  , color: activeItem === 'rocking' ? 'white' : 'black', }}
              onClick={() => handleItemClick('rocking')} action >
              Rocking Chair
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: activeItem === 'side' ? 'black' : 'white', color: activeItem === 'side' ? 'white' : 'black', }}
              onClick={() => handleItemClick('side')} action >
              Side Chair
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: activeItem === 'lounge' ? 'black' : 'white', color: activeItem === 'lounge' ? 'white' : 'black', }}
              onClick={() => handleItemClick('lounge')} >
              Lounge Chair
            </ListGroup.Item>
          </ListGroup>
      </div>
      <div className="col-md-10 col-md-sm-6">
        <Category product={products}></Category>
      </div>
    </div>
  )
};

export default Categories;