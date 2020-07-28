import React from 'react';

import './App.css';
import ProductTable from "./components/ProductTable"
import PropTypes from 'prop-types'

const Products = [
  {category:"Food",name:"Bread",price:200},
  {category:"fancyFood",name:"Thon",price:6500},
  {category:"Food",name:"Jben",price:150},
];


function App() {
  return (
    <>
   <ProductTable  Products={Products}/>
    </>
  );
}
App.propTypes = {
  category:PropTypes.string,
  name:PropTypes.string,
  price:PropTypes.number
  
}

export default App;
