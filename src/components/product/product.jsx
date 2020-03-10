import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from 'microcomponents/typography';

const styles = theme => ({
  product: {
    width: '100%'
  },
  imageProduct: {
    height: 350,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  infoProduct: {
    marginTop: 15
  },
  titleProduct: {
    fontWeight: 'bold',
    fontSize: '0.9em'
  },
  priceProduct: {
    color: '#558b2f'
  },
  priceProductDiscount: {
    color: '#9e9e9e',
    textDecoration: 'line-through',
    fontSize:'.7em',
    '& span': {
      color: '#c62828',
      marginRight: 10,
      textDecoration: 'none',
      fontSize: '1.9em'
    }
  },
  discount: {
    margin: '15px 0',
    fontWeight: 'bold'
  }
});

class Prodcut extends React.Component {
  render() {
    const {
      title,
      price,
      image,
      discount,
      discountPrice,
      classes
    } = this.props;
    return (
      <div className={classes.product}>
        <div className={classes.imageProduct}>
          <img src={image} alt="" />
        </div>
        <div className={classes.infoProduct}>
          <Typography className={classes.titleProduct}>{title}</Typography>
          <Typography
            className={[
              classes.discount,
              discount ? classes.priceProductDiscount : classes.priceProduct
            ].join(' ')}
          >
            {discount && <span>${discountPrice}</span>}${price}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Prodcut));
