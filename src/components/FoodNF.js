
import React , {useEffect, useState} from 'react';
import  styled  from 'styled-components';
import {useDispatch , useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { LoadFoodNF , LoadFoodNFF } from './../Actions/FoodNuitritionFacts';
import { NameFood } from './../Actions/FoodAction';
import {motion} from 'framer-motion';

const FoodNF = ({pathId}) => {

    console.log(pathId);
const {Food, isloading} = useSelector((state)=> state.NF);
const history = useHistory();
const dispatch = useDispatch();

const [InputState,SetState] = useState("");

const InputHandler = (e) => {
    SetState(e.target.value);
    }
    
const exit = (e) =>{
const element = e.target;


if(element.classList.contains('shadow')){
    document.body.style.overflow= "auto";
    history.push("/nutritionfacts");
}

}
const Changetostring = (x,y) =>{
   var R= x/y;
   var F = R.toString();

 
   return F;
}
const Name = useSelector((state)=> state.Food);

const GetQuantity = (food,name) => {
   console.log(food);
   const RealName=Name.FoodName;
   const newStr = RealName.replace(name,food);
   console.log(newStr);
    dispatch(LoadFoodNFF(newStr));
    
    dispatch(NameFood(newStr));
}

    return (
        <>
        { !isloading && (
<Card className="shadow" onClick={exit}>
    {
    !Food.length ? <Detail><Check><h1>Not Found</h1></Check></Detail> : (
          <Detail layoutId={pathId}>
          {
                        Food.map((Food)=>(
              <Header>      
                  <All bg={Food.length}>   
              <Check>
                  <input type="text" defaultValue={Food.serving_size_g + "G"} onChange={InputHandler} />
                  <NameDiv>
              <h1>{Food.name}</h1>
                 </NameDiv>
                 <button  onClick={GetQuantity.bind(this, InputState +" "+ Food.name,Food.name)} > GO </button>
              </Check>
                <Cal>
                <h2>{Food.calories} KCAl</h2> 
                <FontAwesomeIcon className="fire" icon={faFireAlt} />
                </Cal>
                <MainMacro>
                    <Protein>
                        <h4>Protein </h4>
                        <h6>{Food.protein_g} gram</h6>
                    <Line ><PercentageP bg={(parseFloat(Food.protein_g)*4*100)/(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)}  ></PercentageP></Line>
                    <h5>{Changetostring((parseFloat(Food.protein_g)*4*100),(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)).substring(0, 5)}%</h5>
                    </Protein>
                    <Protein>
                    <h4>Carb </h4>
                    <h6>{Food.carbohydrates_total_g} gram</h6>
                    
                    <Line><PercentageC bg={(parseFloat(Food.carbohydrates_total_g)*4*100)/(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)}  ></PercentageC></Line>
                    <h5>{Changetostring((parseFloat(Food.carbohydrates_total_g)*4*100),(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)).substring(0, 5)}%</h5>
                    </Protein>
                    <Protein>
                    <h4>Fat </h4>
                    <h6>{Food.fat_total_g} gram</h6>
                    <Line><PercentageF bg={(parseFloat(Food.fat_total_g)*9*100)/(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)}  ></PercentageF></Line>
                    <h5>{Changetostring((parseFloat(Food.fat_total_g)*9*100),(parseFloat(Food.protein_g)*4+parseFloat(Food.carbohydrates_total_g)*4+parseFloat(Food.fat_total_g)*9)).substring(0, 5)}%</h5>
                    </Protein>
                </MainMacro>
          <MainMicro>
                  <div className="micro">
                  <div></div>
                        <h5>Sugar <span>{Food.sugar_g} gm</span> </h5>

                    </div>
                    <div className="micro">
                    <div></div>
                        <h5>Fiber <span>{Food.fiber_g} gm</span> </h5>
                    
                    
                    </div>
                    <div className="micro">
                    <div></div>
                        <h5>Sodium <span>{Food.sodium_mg} mg</span></h5>
                    
                    
                    </div>
                    <div className="micro">
                    <div></div>
                        <h5>Potassium <span>{Food.potassium_mg} mg</span></h5>
                    
                    
                    </div>
                    <div className="micro">
                     <div></div>
                        <h5>Fat Saturated <span>{Food.fat_saturated_g} g</span> </h5>
                   
                    
                    </div>
                    <div className="micro">
                         <div></div>
                        <h5>Cholesterol <span>{Food.cholesterol_mg} mg</span> </h5>
                   
                    
                    </div>
             </MainMicro>
             </All>  
             </Header>
             
             ))
            }
          </Detail>
    )
}
</Card>
        )
}
       </>
    )
}
const PercentageC = styled.div `
height: 100%;
width: ${props => props.bg + "%" };
background:  #e2bcd8;
transition: width 0.5s; 
`
const PercentageF = styled.div `
height: 100%;
width: ${props => props.bg + "%" };
background:  #e2bcd8;
transition: width 0.5s;
`
const PercentageP = styled.div `
height: 100%;
width: ${props => props.bg + "%" };
background:  #e2bcd8;
transition: width 0.5s;
`
const MainMicro = styled.div`
display: flex;
align-items: center;
justify-content: center;
justify-content: space-evenly;
width: 100%;
padding-bottom: 2%;
font-family: 'Kaushan Script', cursive;
h5 {
    font-size: 1rem;
    span {
        font-size: 0.8rem;
        color:  #ff7676;
    }
}
@media  (max-width: 375px)  {
  
    h5 {
    font-size: 0.6rem;
    span {
        font-size: 0.7rem;
        color:  #ff7676;
    }
}
.micro {
    div {
        height: 0.3rem !important;
        width: 0.3rem !important;
    }
}
 

}
.micro {
    display: flex;
   
    div {
        height: 0.6rem;
        width: 0.6rem;
        background: #ff7676;
        border-radius: 50%;
        box-shadow:0px 5px 5px #e2bcd8; 
    }
}
`;

const Protein = styled.div `
display: flex;
align-items: center;
justify-content:center;
width: 100%;
margin-right: 0%;
h6 {
    font-family: 'Kaushan Script', cursive;
    font-size: 0.8rem;
    color:  #ff7676;
}
h4 {
    padding-top: 1.5rem;
    font-size: 2rem;
    font-family: 'Kaushan Script', cursive;
}
h5 {
    padding-top: 1.5rem;
    margin-left: 1%;
    font-size: 2rem;
    font-family: 'Kaushan Script', cursive;
}
@media  (max-width: 375px)  {
  
    h6 {
       font-size: 0.5rem !important;
   }
   h5 {
       font-size: 1rem !important;
   }
   h4 {
    font-size: 1rem !important;

   }

}
@media  (max-width: 414px)  {
   
   h6 {
       font-size: 0.8rem;
   }
   h5 {
       font-size: 1.2rem;
   }
   h4 {
    font-size: 1.5rem;

   }
 }
`

const Line = styled.div`
    margin-top: 3%;
    margin-left: 2%;
    width: 30rem;
    height:3rem;
    border-radius: 2%;
    
    box-shadow:0px 5px 5px #e2bcd8; 
   


`
const MainMacro = styled.div`
display: flex;
flex-direction: column;

align-items:center;

height: 30vh;


`


const NameDiv = styled.div`
border-radius: 2%;
@media  (max-width: 414px)  {
   
   h1 {
       font-size: 2.5rem !important;
   }
   
 }

width:50%;
display: flex;
align-items:center;
justify-content: center;
h1 {
    text-align: center;
   width: 100%;
    box-shadow:0px 5px 5px #e2bcd8; 
    background: linear-gradient(to right top ,#FCF6F5FF ,white);
    color: #23d997;
    font-size: 5rem;
    font-family: 'Bangers', cursive;
}


`

const Cal = styled.div`
@media  (max-width: 375px)  {
  
    h2 {
    font-size: 2rem !important;
    text-align: center;
}
.fire {
    font-size: 3rem !important;
}

}
@media  (max-width: 800px)  {
    h2 {
    font-size: 2rem !important;
    text-align: center;
}

}
display: flex;
justify-content: center;
padding-top:2%;
h2 {
    font-size: 4rem;
    text-align: center;
}
.fire {
    font-size: 5rem;
    
    margin-left: 2rem;
    
    color:  #ff7676;
    background: none;
}

`
const All = styled.div `
width:100%;
height: 100%;

`
const Check = styled.div`
@media  (max-width: 414px)  {
   
   button{
    width:2.6rem !important;
    height:2.6rem !important;
    font-size: 1rem !important;
   }
   
 }
display:flex;
width:100%;
justify-content: center;
justify-content: space-around;
align-items: center;
input {
    font-family: 'Bangers', cursive;
    height: 90%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
}
button {
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 1.5rem;
    border: none;
  
    
    cursor: pointer;
    background: #ff7676;
    color: white;
    width:4.6rem;
    height:4.6rem;
    border-radius: 50%;
    font-weight: 600;
  }

`

const Header = styled.div`
width:100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;

margin-top: 5%;
`

const Detail =  styled(motion.div)`
width: 60%;
border-radius: 1rem;

@media  (max-width: 800px)  {
    left: 3%;
  width:95%;

}
background: white;
position: absolute;
left: 20%;
top: 0%;
color: black;
display: flex;
flex-direction: column;
justify-content: center;

h2 {
    
    font-family: 'Kaushan Script', cursive;
}

`

const Card = styled.div`
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



export default FoodNF;