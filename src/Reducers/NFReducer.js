const initState = {
    Food : {}, isloading: true,
    }
    
    const FoodNFReducer = (state = initState , action)=>{
    switch(action.type){
          case "FETCH_NF" :
              return {...state , Food: action.payload.NFFood ,
            isloading: false }
            case "FETCH1_NF" :
                return {...state , Food: action.payload.NFFood  }
          case "LOADING_NF" :
              return {
                  ...state, isloading: true
              }
          default:
              return{...state}
    
    }
    
    }
    
    export default FoodNFReducer;