import { RESIVE_PRODUCT, ADD_TO_CARD, CHECKOUT_REQUEST } from "../enums";

export const resiveProducts = product =>({
    type: RESIVE_PRODUCT,
    product
})


export const addToCard = productId=>({
    type: ADD_TO_CARD,
    productId
})

export const checkout = () =>({
    type: CHECKOUT_REQUEST,

})