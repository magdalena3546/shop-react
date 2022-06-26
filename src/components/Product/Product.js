import styles from './Product.module.scss';


import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({name, title, basePrice, colors, sizes}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const addPrice = sizes.find(size => size.name === currentSize);
    let price = basePrice + addPrice.additionalPrice;
    return price},
    [basePrice, currentSize, sizes]);
 
  return (
    <article className={styles.product}>
    <ProductImage currentColor={currentColor} name ={name} title = {title} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <ProductForm title = {title} getPrice = {getPrice} sizes = {sizes} colors = {colors} currentColor = {currentColor} currentSize = {currentSize}  setCurrentColor = {setCurrentColor} setCurrentSize = {setCurrentSize} />
      </div>
     
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;