import React from "react";
import Product from "./product";

class ProductItem extends React.Component {
  render() {
    const { product, onAddToCardClick } = this.props;
    return (
      <div style={{ marginBottom: 10 }}>
        <Product {...product} />
        <button
          onClick={onAddToCardClick}
          disabled={product.inventory > 0 ? "" : "disabled"}
        >
          {product.inventory > 0 ? "Add To Card" : "Sold Out"}
        </button>
      </div>
    );
  }
}

export default ProductItem;
