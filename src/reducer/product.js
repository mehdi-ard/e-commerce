import { RESIVE_PRODUCT, ADD_TO_CARD } from "../enums";

const products = (state = {}, action) => {
  switch (action.type) {
    case RESIVE_PRODUCT:
      return {
        ...state,
        ...action.product.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };
    case ADD_TO_CARD:
      let { productId } = action;
      let product = state[productId];
      return {
        ...state,
        [productId]: {
          ...product,
          inventory: product.inventory - 1
        }
      };
    default:
      return state;
  }
};

export default products;
