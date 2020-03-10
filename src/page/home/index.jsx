import React from 'react';
import shop from 'api/shop';
import { connect } from 'react-redux';
import ProductList from 'components/product';
import { resiveProducts } from 'state';

class Home extends React.Component {
  componentDidMount() {
    shop.getProducts(products => {
      this.props.resiveProducts(products);
    });
  }

  render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resiveProducts: products => dispatch(resiveProducts(products))
});

export default connect(null, mapDispatchToProps)(Home);
