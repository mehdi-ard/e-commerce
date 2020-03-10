import React from 'react';
import Badge from 'microcomponents/badge';
import Icon from 'microcomponents/icon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BadgeCart extends React.Component {
  render() {
		const{productCard} = this.props
		console.log('productCard',productCard.length)
    return (
      <Link to={'/cart'}>
        <Badge badgeContent={productCard.length} color="secondary">
          <Icon>shopping_basket</Icon>
        </Badge>
      </Link>
    );
  }
}


const getCardProduct = state => {
  console.log('get',state.card.addedIds)
  return state.card.addedIds.map(id => ({
    ...state.products[id],
    quantity: state.card.quantityById[id] || 0
  }));
};

const mapStateToProps = state => ({
  productCard: getCardProduct(state),
});



export default connect(mapStateToProps )(BadgeCart);
