import styles from './Product.module.scss';


import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);


  const getPrice = () => {
    const addPrice = props.sizes.find(size => size.name === currentSize);
    let price = props.basePrice + addPrice.additionalPrice;
    return price;
  }
 

  return (
    <article className={styles.product}>
    <ProductImage currentColor={currentColor} name ={props.name} title = {props.title} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductForm title = {props.title} getPrice = {getPrice} sizes = {props.sizes} colors = {props.colors} currentColor = {currentColor} currentSize = {currentSize}  setCurrentColor = {setCurrentColor} setCurrentSize = {setCurrentSize} />
      </div>
     
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;