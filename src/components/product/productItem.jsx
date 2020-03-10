import React from 'react';
import Product from './product';
import { Grid } from '@material-ui/core';
import Button from 'microcomponents/button';

class ProductItem extends React.Component {
  render() {
    const { product, onAddToCardClick } = this.props;
    return (
      <Grid item xs={3}>
        <Product {...product} />
        <Button
          fullWidth
          onClick={onAddToCardClick}
          disabled={product.inventory > 0 ? '' : 'disabled'}
        >
          {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
        </Button>
      </Grid>
    );
  }
}

export default ProductItem;
