import {combineReducers} from "redux" ;
import FoodReducer from "./FoodReducer"
import FoodNFReducer from './NFReducer';


const rootReducer = combineReducers({
Food: FoodReducer,
NF: FoodNFReducer,
});

export default rootReducer;