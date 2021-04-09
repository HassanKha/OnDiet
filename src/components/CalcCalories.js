
import React , {useEffect, useState} from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom';
import Cboard from './CaloriesBoard';
import {useLocation} from "react-router-dom";
import {motion} from 'framer-motion';
import { TitleAnim,C1Anim,C2Anim,C3Anim,photoAnim} from './../Animations/HomeAnimation';

function CC() {

    const [Weight,setWeight] = useState("");
    const [Height,setHeight] = useState("");
    const [Age,setAge] = useState("");
    const [Sex,setSex] = useState("MALE");
    const [ACTIVITY,setACTIVITY] = useState("1");
    const [FullData,setFullData] = useState(true);
    const [Calories,setCalories] = useState(null);

    const Location = useLocation();
    const pathId = Location.pathname.split("/")[2];

    

    const GetCalorie = () => {

console.log(Weight + Height + Age + Sex + ACTIVITY);


const SexNum = Sex === "MALE" ? 5 : -161 ;
const Cal = 10*parseFloat(Weight) + 6.25*parseFloat(Height) - 5*parseFloat(Age) + SexNum ;
const AllIntake = Cal*parseFloat(ACTIVITY);

setCalories(AllIntake);

if(Number.isNaN(AllIntake)){
 
    setFullData(false);
} 
    }

    const GetWeight = (e) => {
setWeight(e.target.value);
    }
    const GetHeight = (e) => {

        setHeight(e.target.value);
    }
    const GetAge = (e) => {

        setAge(e.target.value);
    }
    const GetSex = (e) => {

        setSex(e.target.value);
    }
    const GetActivity = (e) => {

        setACTIVITY(e.target.value);
    }

    return (
     <Calc>
          {pathId && <Cboard calories={Calories} FullData={FullData} setFullData={setFullData} />}
<Left> 
     <div className="des">
<motion.h2 variants={TitleAnim } initial="hidden" animate="show" > <span>On Diet</span></motion.h2>

</div>
<div >
<h3>Calorie Calculator to <span className="eat"> FIND OUT</span></h3>
</div>
<div className="des1">
<h4>How Many Calories you really Need! </h4>
<h4>Match it to your goals and Activity level to help you make better <span>Nutritional Choices.</span> </h4>
</div>
</Left>
<Form>
    <h1>OnDiet <span>Calorie Calculator</span></h1>
    <CalorieForm>
        <Input>
        <h6>WEIGHT (KG)</h6>
        <input  defaultValue="" onChange={GetWeight} type="text"/>
        </Input>
        <Input>
        <h6>HEIGHT (CM)</h6>
        <input  defaultValue="" onChange={GetHeight} type="text"/>
        </Input>
        <Input>
        <h6>AGE</h6>
        <input  defaultValue="" onChange={GetAge} type="text"/>
        </Input>
        <Input className="sex">
        <h6>SEX</h6>
        <select onChange={GetSex}>
    <option value="male">MALE</option>
    <option value="female">FEMALE</option>
  
  </select>
        </Input>
        <Input className="activity">
        <h6>ACTIVITY LEVEL</h6>
        <select onChange={GetActivity}>
    <option value="1">Basic Metabolic Rate (BMR)</option>
    <option value="1.2">SEDENTARY</option>
    <option value="1.375">LIGHTLY ACTIVE</option>
    <option value="1.55">MODERATELY ACTIVE</option>
    <option value="1.725">VERY ACTIVE</option>
    <option value="1.9">EXTRA ACTIVE</option>
  </select>
        </Input>
       
        <Input> <Link className="link" to="/calculatecalories/YourCaloriesIntake"> <button type="submit" onClick={GetCalorie} > Calculate </button></Link></Input>
       
        
    </CalorieForm>
        
    
</Form>
<Right><div className="header">
<div className="des"><div className="des1"><motion.h3 variants={TitleAnim } initial="hidden" animate="show"> <span>Determine Your Daily Caloric</span></motion.h3></div><h2 > Needs Based on Your Height, Weight, Age and Activity Level.</h2></div>
<div><h4>In addition to Determining the Calories Needed to Maintain Weight, Use <span>OnDiet</span> Calculator and Figure out How Many Calories you need to Burn in Order to Drop Pounds.</h4></div>
</div>

</Right>
<motion.div variants={C3Anim} initial="hidden" animate="show" className="circle circle1"></motion.div>
<motion.div variants={C2Anim} initial="hidden" animate="show" className=" circle circle2"></motion.div>
<motion.div variants={C3Anim} initial="hidden" animate="show" className="circle circle3"></motion.div>
<motion.div variants={C1Anim} initial="hidden" animate="show" className=" circle circle4"></motion.div>
     </Calc>
    )
}

const CalorieForm = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
margin-top: 5%;
` 
const Input = styled.div`
@media  (max-width: 414px)  {
  
    width: 80%;
 }
height: 10%;
display: flex;
justify-content: center;

align-items: center;
width: 40%;
.link {
    width: 50%;
    height:100%;
}
input {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 2rem;
    
}
button {
    box-shadow:0px 5px 30px #e2bcd8; 
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
    font-weight: 600;
    font-family: 'Kaushan Script', cursive;
    font-size: 2rem;
}
h6 {
font-size: 1.5rem;
padding-right:0.8rem;
text-align: center;
}
` 


const Form = styled.div`
@media  (max-width: 414px)  {
  
 h1 {
     font-size: 2.5rem !important;
 }
}
@media  (max-width: 800px)  {
  
  width:100%;
 

}
overflow: hidden;
font-family: 'Kaushan Script', cursive;
height: 90vh;
width: 40%;
display: flex;
flex-direction:column;
overflow: hidden;
align-items: center;
.activity  {
    width: 60%;
   select {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 1.5rem;
   }
}
.sex {
    select {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 1.5rem;
   }
}

h1 {
    text-align: center;
    margin-top: 10%;
    font-size: 4rem;
    span {
        font-weight: bold;
    color: #23d997;
    }
    box-shadow:0px 5px 30px #e2bcd8; 
    width: 100%;
    
}
`
const Left = styled.div`

@media  (max-width: 360px)  {
  
    .des,.des1 {
    overflow: visible ;
  }
 
  
}
@media  (max-width: 414px)  {
  
  width: 100% !important;
  height: 70vh !important;
  
h2 {
    font-size : 3.5rem !important;
}
h3 {
    font-size : 2.7rem !important;
    span {
        font-size : 2.8rem !important;
    }
}
h4 {
    font-size : 1.5rem !important;
    span {
        font-size : 1.6rem !important;
    }
}
}
@media  (max-width: 768px)  {
  
  .des {
    overflow: visible !important;
  }
 

}
@media  (max-width: 800px)  {
    height: 40vh;
  width:100%;
  .des {
      text-align: center;
  }
}
height: 90vh;
width: 30%;
.des {
    overflow: hidden;
}
@media (max-width: 768px) {
  
  width:100%;

}
@media (max-width: 375px) {
  height: 100%;
  width:100%;
h2{
    font-size: 5rem;
}
h3 {
    font-size: 2rem;
}
h4 {
    font-size: 1rem;
    span {
        font-size: 1.1rem;
    }
}


}
.des1{
    width: 90%;
}

h2{
    font-weight: lighter;
    font-size: 7rem;
    overflow: hidden;
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
    
}
span{
    
    font-weight: bold;
    color: #23d997;
}
display: flex;
flex-direction:column;
align-items: center;

padding: 3rem 3rem;
`

const Right = styled.div`
@media  (max-width: 414px)  {
  
  width: 100%;
  .des .des1 {
      overflow: visible !important;
      h3 {
          span {
            font-size: 3.5rem !important;
          }
      }
  }
  
}
@media  (max-width: 800px)  {
  
  width:100%;
  
  
}
@media  (max-width: 768px)  {
  
  .des {
    overflow: visible !important;
  }
 

}
height: 90vh;
width: 30%;
display: flex;
flex-direction:column;
align-items: center;
overflow: hidden;
.header .des .des1 {
    overflow: hidden;
}
@media (max-width: 768px) {
  
  width:100%;

}
@media (max-width: 375px) {
  height: 100%;


}
div{
    width: 90%;
    
h3 {
    text-align: center;
    
    span {
        font-size: 5rem;
        color: #23d997;
    }
}
h2 {
    text-align: center;
    font-size: 2.2rem;
}
h4 {
    text-align: center;
    font-size: 1.3rem;
   span {
    text-align: center;
    font-size: 1.5rem;
        color: #23d997;
   }
}

}
.header {
    margin-top: 25%;
    text-align: center;
    display: flex;
flex-direction:column;
align-items: center;
overflow: hidden;
.des {
    overflow: hidden;
}
}
`

const Calc = styled.div`

min-height: 90vh;
background: linear-gradient(to right top ,#FCF6F5FF ,white);
display:flex;
flex-wrap: wrap;
.circle1{
    background: black;
background: linear-gradient(to right top ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 10rem;
width: 10rem;
position: absolute;
top: 15%;
left:5%;
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
left: 20%;
border-radius: 50%;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}
.circle3 {
    box-shadow: 2px 2px 2px #c7c6c6;
background: black;
background: linear-gradient(to right bottom ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 12rem;
width: 12rem;
position: absolute;
top: 50%;
left: 85%;
border-radius: 50%;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}
.circle4 {
    box-shadow: 2px 2px 2px #c7c6c6;
background: black;
background: linear-gradient(to right bottom ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 12rem;
width: 12rem;
position: absolute;
top: 20%;
left: 75%;
border-radius: 50%;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}

@media  (max-width: 800px)  {
   .circle {
       display:none;
   }
}

`

export default CC;