import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {
    const handleSubmit = e => {
        e.preventDefault();
        const summary = {
          Name: props.title,
          Price: props.getPrice,
          Size: props.currentSize,
          Color: props.currentColor,
        }
        console.log("Summary:", summary);
    };

    return(
    <form onSubmit={handleSubmit}>
    <OptionSize sizes = {props.sizes } currentSize = {props.currentSize} setCurrentSize = {props.setCurrentSize} />
    <OptionColor colors = {props.colors} currentColor = {props.currentColor} setCurrentColor = {props.setCurrentColor} />
    <Button className={styles.button}> 
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
    )
}

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize:  PropTypes.func.isRequired,
  };

export default ProductForm;