import React from "react";

class Prodcut extends React.Component {
  render() {
    const { title, price, inventory } = this.props;
    return (
      <div>
        {title} - ${price} x {inventory}
      </div>
    );
  }
}

export default Prodcut;
