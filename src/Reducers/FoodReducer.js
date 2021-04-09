const initState = {
FoodSearched : [],
FoodName : "",
RandomFood : [],
}

const FoodReducer = (state = initState , action)=>{
switch(action.type){
      case "FETCH_FOOD" :
          return {...state , RandomFood: action.payload.popular}
         
     case "FETCH_SEARCHEDFOOD" :
          return {...state , FoodSearched: action.payload.search}

     case "FETCH_Name" :
          return {...state , FoodName: action.payload.name}
      default:
          return{...state}

}

}

export default FoodReducer;