import axios from 'axios';
import { NuitritonFacts } from './../components/API';



const FoodNuitritionFacts = (FoodName) => {

  const data = {
    method: 'GET',
  headers: {
    'X-Api-Key': 'NMw2VJ6+5bD5UAeK67BynA==cErZuvX0xkC952yu',
  },
};

return data;

  };


  export const LoadFoodNF = (FoodName) => async (dispatch) => {
    dispatch(
        {
            type: "LOADING_NF",
    
        }
    )
    fetch(NuitritonFacts(FoodName),  FoodNuitritionFacts(FoodName) )
    .then(response => response.json())
    .then(data => 
        
        dispatch(
            {
                type: "FETCH_NF",
                payload : {
                    NFFood: data.items,
                }
            }
        )
        
        );

   
    
    
    }
    export const LoadFoodNFF = (FoodName) => async (dispatch) => {
     
      fetch(NuitritonFacts(FoodName),  FoodNuitritionFacts(FoodName) )
      .then(response => response.json())
      .then(data => 
          
          dispatch(
              {
                  type: "FETCH1_NF",
                  payload : {
                      NFFood: data.items,
                  }
              }
          )
          
          );
  
     
      
      
      }