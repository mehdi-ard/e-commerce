import { ADD_TO_CARD, CHECKOUT_REQUEST } from "../enums";

const initialState = {
  addedIds: [],
  quantityById: {}
};


const addedIds = (state = initialState.addedIds, action) =>{
    if(state.indexOf(action.productId) !== -1){
        return state
    }
    return[...state, action.productId]

}

const quantityById = (state = initialState.quantityById, action)=>{
    const {productId} = action
    return{
        ...state,
        [productId]: (state[productId] || 0) + 1
    }
}


const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
      case CHECKOUT_REQUEST:
        return initialState
    default:
      return state;
  }
};

export default cart;
