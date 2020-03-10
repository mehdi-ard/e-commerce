import { combineReducers} from 'redux'
import products from './product'
import card from './card'

export default combineReducers({
    products,
    card
})