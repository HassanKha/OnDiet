import React , {useEffect, useState} from 'react';
import  styled  from 'styled-components';
import {useDispatch , useSelector} from "react-redux";
import { LoadFoodNF } from './../Actions/FoodNuitritionFacts';
import {Link} from 'react-router-dom';
import { NameFood } from './../Actions/FoodAction';
import {useHistory} from "react-router-dom"

const Cboard = ( {calories , FullData,setFullData}) => {
    const history = useHistory();
    const exit = (e) =>{
        const element = e.target;
        
        if(element.classList.contains('shadow')){
            history.push("/calculatecalories");
        }
        setFullData(true);
        }

return (
    <Board className="shadow" onClick={exit}>
{!FullData ? <Calories>
    <Calorie>
    <h2>Try Again! Some Data is Missing or False</h2> 
    </Calorie>
</Calories> :
<Calories>
    <Calorie>
    <h2>Maintain weight </h2> <h2>{calories} <span>Calories/day</span></h2> 
    </Calorie>
    <Calorie>
    <h2>Mild weight loss <span>0.25 kg/week</span></h2> <h2>{calories - 250} <span>Calories/day</span></h2>
    </Calorie>
    <Calorie>
    <h2>Weight loss <span>0.5 kg/week</span></h2> <h2>{calories - 500} <span>Calories/day</span></h2>
    </Calorie>
    <Calorie>
    <h2>Extreme weight loss <span>1 kg/week</span></h2> <h2>{calories - 1000} <span>Calories/day</span></h2>
    </Calorie>
</Calories>
}
    </Board>
)

}
const Calorie = styled.div`
@media  (max-width: 360px)  {
  
    h2 {
    font-size: 0.2rem ;
    span {
       font-size: 0.1rem !important;
    }
   }


}
@media  (max-width: 414px)  {
    h2 {
    font-size: 0.5rem !important;
    span {
       font-size: 0.2rem !important;
    }
   }
}
@media  (max-width: 800px)  {
   h2 {
    font-size: 2rem !important;
    span {
       font-size: 0.7rem !important;
    }
   }

}
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
padding: 1rem;
h2 {
    box-shadow:0px 5px 30px #e2bcd8; 
    width: 50%;
    text-align: center;
    font-size: 3.5rem;
    span{
        font-size: 1rem;
        color: #23d997;
    }
}

@media (max-width: 768px) {

    h2 {
    box-shadow:0px 5px 30px #e2bcd8; 
    width: 50%;
    text-align: center;
    font-size: 2rem;
    span{
        font-size: 0.8rem;
        color: #23d997;
    }
}

}
`

const Calories = styled.div `
width: 60%;
border-radius: 1rem;
@media  (max-width: 414px)  {
  top: 30%;
  width: 40% !important;
  left: 0.5% !important;
}
@media  (max-width: 800px)  {
    width: 90%;
    left: 0%;
}



background: white;
position: absolute;
left: 20%;
top: 25%;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-evenly;
align-items: center;
h2 {
    
    font-family: 'Kaushan Script', cursive;
}
`

const Board = styled.div`
@media  (max-width: 414px)  {
  
  width: 100% !important;
  min-height: 240vh !important;
  top:0%;
left: 0;
}
width: 100%;
min-height: 100vh;
overflow: auto;
background: rgba(0,0,0,0.5);
position: fixed;
z-index: 10 ;

top:0;
left: 0;
&::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }

`

export default Cboard;