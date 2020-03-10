import React from "react";
import { connect } from "react-redux";
import Prodcut from "./product";
import {checkout} from '../state'

class Card extends React.Component {
  render() {
    const { productCard, total, chekout } = this.props;

    const hasProduct = productCard.length > 0;
    const nodes = hasProduct ? (
      productCard.map(item =>
        <Prodcut key={item.id} {...item} inventory={item.quantity}/>
        )

    ) : (
      <em>Pleas add some products to cart</em>
    );
    return (
      <>
        <h3>Your Card</h3>
        <div>{nodes}</div>
        <p>Todal: ${total}</p>
        <button
        onClick={chekout}
        disabled={!hasProduct && 'disabled'}
        >CheckOut</button>
      </>
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

const getTotal = state =>
state.card.addedIds.reduce((total , id)=> total + state.products[id].price * (state.card.quantityById[id] || 0 ),0 ).toFixed(2)

const mapStateToProps = state => ({
  productCard: getCardProduct(state),
  total: getTotal(state)
});


const mapDispatchToProps = dispatch =>({
  chekout : ()=> dispatch(checkout())
})

export default connect(mapStateToProps,mapDispatchToProps )(Card);
