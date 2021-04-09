
import React , {useEffect, useState} from 'react';
import  styled  from 'styled-components';
import {useDispatch , useSelector} from "react-redux";
import { LoadFoods } from './../Actions/FoodAction';
import F from './Food';
import FoodNF from './FoodNF';
import {useLocation} from "react-router-dom";
import { SearchFoods } from './../Actions/FoodAction';
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion';
import { TitleAnim,C1Anim,C2Anim,C3Anim,photoAnim} from './../Animations/HomeAnimation';

const NF = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoadFoods());
        
       },[dispatch]);

    const Food = useSelector(state => state.Food);
    const Location = useLocation();
  
    const pathId = Location.pathname.split("/")[2];
    const [InputState,SetState] = useState("");

const InputHandler = (e) => {
SetState(e.target.value);
}

const BTNHandler = () => {
    dispatch(SearchFoods(InputState));
    console.log(InputState);
}

    return (
     <StyleNF>
         <AnimateSharedLayout type="crossfade">
         <AnimatePresence>
            {pathId && <FoodNF key={pathId} pathId={pathId} />}
            </AnimatePresence>
         <SearchStyled>
         <div className="des">
<motion.h2 variants={TitleAnim } initial="hidden" animate="show"><span>On Diet</span></motion.h2>

</div>
<div >
<h3> Starts with What <span className="eat" >YOU EAT</span></h3>
</div>
<div className="searchdiv" >
<h4 >Track calories, break down ingredients, and log activities with <span className="diet">OnDiet</span></h4>
 <input type="text" onChange={InputHandler}/>
 <button type="submit" onClick={BTNHandler}> GO </button>
</div>
</SearchStyled>

<StyledIMG>
{
   
   Food.FoodSearched.results &&
   Food.FoodSearched.results.map((food)=>(
    food.alt_description &&
    <F img={food.urls.full} key={food.id} name={food.alt_description} fetchname={InputState +" " + food.alt_description} id={food.id} />
    
   ))
    
}
{
   
    Food.RandomFood.results &&
    Food.RandomFood.results.map((food)=>(
     food.alt_description &&
     <F img={food.urls.full} key={food.id} name={food.alt_description} fetchname={ food.alt_description} id={food.id} />
     
    ))
     
}
</StyledIMG>
<motion.div variants={C3Anim} initial="hidden" animate="show" className="circle circle1"></motion.div>
<motion.div variants={C1Anim} initial="hidden" animate="show" className=" circle circle2"></motion.div>
</AnimateSharedLayout>
     </StyleNF>
    )
}
const SearchStyled = styled(motion.div)`
@media  (max-width: 414px)  {
   
  width:100% !important;
 
}
@media  (max-width: 375px)  {
   
  .searchdiv {
      height: 40vh;
  }
    button {
    margin-right: 5% !important;
    width: 4rem !important;
    height: 4rem !important;
}
 }
@media  (max-width: 800px)  {
    width: 30%;
    h2 {
        font-size: 4rem !important;
    }
    h3 {
    font-size: 2rem !important;
}
h4{
    font-size: 1.4rem !important; 
    span {
        
        font-size: 1.5rem !important; 
    }
}
.eat {
    font-size: 2rem !important; 
    
}
button {
    margin-left: 15% !important;
}
}
width: 30%;
h2{
    font-weight: lighter;
    font-size: 7rem;
}
h3 {
    font-size: 3.5rem;
}
h4{
    font-size: 1.4rem; 
    span {
        
        font-size: 1.5rem; 
    }
}
.eat {
    font-size: 5rem; 
    padding:1rem 2rem;
}
.des {
    overflow: hidden;
}
span{
    
    font-weight: bold;
    color: #23d997;
}
display: flex;
flex-direction:column;
align-items: center;

padding: 3rem 3rem;

input {
    width: 90%;
    margin-top: 20%;
    height:40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
}
button {
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 1.5rem;
    border: none;
    margin-top: 1rem;
    margin-left: 35%;
    cursor: pointer;
    background: #ff7676;
    color: white;
    width:5rem;
    height:5rem;
    border-radius: 50%;
    font-weight: 600;
  }
`;
const StyleNF = styled(motion.div)`
background: linear-gradient(to right top ,#FCF6F5FF ,white);
min-height: 90vh;
display: flex;
flex-wrap: wrap;
h1 {
    font-family: 'Kaushan Script', cursive;
    font-size: 1.8rem;
}


color:#000000FF;
.circle1{
    background: black;
background: linear-gradient(to right top ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 10rem;
width: 10rem;
position: absolute;
top: 12%;
left:3%;
border-radius: 50%;
box-shadow: 2px 2px 2px #c7c6c6;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}
.circle2 {
    box-shadow: 2px 2px 2px #c7c6c6;
background: black;
background: linear-gradient(to right bottom ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 10rem;
width: 10rem;
position: absolute;
top: 37%;
left: 18%;
border-radius: 50%;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
z-index: 1;
}
@media  (max-width: 800px)  {
.circle {
    display: none;
}
    
}
`
const StyledIMG = styled(motion.div)`
z-index: 2;
padding: 4rem 1rem;
width: 70%;
overflow: scroll;
overflow-x: hidden;

height: 90vh;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;

@media  (max-width: 414px)  {
   
   width:100% !important;
  
 }

`
export default NF;