import React from "react";
import ProductItem from "./productItem";
import { connect } from "react-redux";
import { addToCard } from "../state";

class ProductList extends React.Component {
  render() {
    const { products, addToCard } = this.props;
    return (
      <>
        <h3>Products</h3>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCardClick={() => addToCard(product.id)}
          />
        ))}
      </>
    );
  }
}

const getProducts = products => Object.keys(products).map(id => products[id]);

const mapStateToProps = state => ({
  products: getProducts(state.products)
});

const mapDispatchToProps = dispatch => ({
  addToCard: productId => dispatch(addToCard(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
