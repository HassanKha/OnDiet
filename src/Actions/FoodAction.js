import axios from 'axios';
import { FoodAPI } from './../components/API';
import { SearchedFood } from './../components/API';




export const LoadFoods = () => async (dispatch) => {
   
const Data = await fetch(FoodAPI);
    
    const result = await Data.json();


dispatch(
    {
        type: "FETCH_FOOD",
        payload : {
            popular: result,
        }
    }
)




}
export const SearchFoods = (FoodName) => async (dispatch) => {
   
const Data = await fetch(SearchedFood(FoodName));
        
        const result = await Data.json();
    
    
    dispatch(
        {
            type: "FETCH_SEARCHEDFOOD",
            payload : {
                search: result,
            }
        }
    )
    
    
    
    
    }

    export const NameFood = (FoodName) => async (dispatch) => {
   
      
            
            dispatch(
                {
                    type: "FETCH_Name",
                    payload : {
                        name: FoodName,
                    }
                }
            )
            
            
            
            
            }