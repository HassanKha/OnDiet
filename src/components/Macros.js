
import React , {useState} from 'react';
import  styled  from 'styled-components';
import {motion} from 'framer-motion';
import { TitleAnim,C1Anim,C2Anim,C3Anim,photoAnim} from './../Animations/HomeAnimation';

const Mac = () => {

    const [Weight,setWeight] = useState("");
    const [BF,setBF] = useState("");
    const [Goal,setGoal] = useState("lose:20");
    const [ACTIVITY,setACTIVITY] = useState("0.9:1.1");
    const [FullData,setFullData] = useState(true);
    const [Calories,setCalories] = useState(null);
    const [Protein,setProtein] = useState("0");
    const [Carb,setCarb] = useState("0");
    const [Fat,setFat] = useState("0");

    const Changetostring = (x) =>{
     
        var F = x.toString();
     
      
        return F;
     }

const GetRadio = () => {
      const LMM = parseFloat(Weight) - (parseFloat(Weight)*parseFloat(BF))/100 ;
      var calories = parseFloat(Calories);
         
      if(Goal.split(":")[0] === "lose"){
              setProtein(LMM*2.2*parseFloat(ACTIVITY.split(":")[1]));
              const CalorieProtein = LMM*2.2*parseFloat(ACTIVITY.split(":")[1])*4;
              calories = calories - CalorieProtein;

              setFat(((parseFloat(Goal.split(":")[1])*Calories)/100)/9);
              const CaloriesFat = (parseFloat(Goal.split(":")[1])*Calories)/100;
              calories = calories - CaloriesFat;

              const CaloriesCarb = calories/4;
              setCarb(CaloriesCarb);


      }
      else {
        setProtein(LMM*2.2*parseFloat(ACTIVITY.split(":")[0]));
        const CalorieProtein = LMM*2.2*parseFloat(ACTIVITY.split(":")[0])*4;
        calories = calories - CalorieProtein;
    
        setFat(((parseFloat(Goal.split(":")[1])*Calories)/100)/9);

        const CaloriesFat = (parseFloat(Goal.split(":")[1])*Calories)/100;
        calories = calories - CaloriesFat;

        const CaloriesCarb = calories/4;
        setCarb(CaloriesCarb);
      }
      console.log(Carb+ " " + Protein + " " + Fat);

}

const GetCalories = (e) => {
    setCalories(e.target.value);
    GetRadio();
}
const GetWeight = (e) => {
    setWeight(e.target.value);
    GetRadio();
}
const GetBF = (e) => {
    setBF(e.target.value); 
    GetRadio();
}
const GetActivity = (e) => {
    setACTIVITY(e.target.value); 
    GetRadio();
}
const GetGoal = (e) => {
    setGoal(e.target.value); 
    GetRadio();
}


    return (
     <StyleMac>
<Description>
<CM> <div className="des"><motion.h1 variants={TitleAnim } initial="hidden" animate="show"><span variants={TitleAnim } initial="hidden" animate="show">Count Macros</span></motion.h1></div></CM> <h2>OnDiet Macro Calculator Shows your Optimal Macronutrients Based on Your Calories, BodyFat, Weight and Your Goal. </h2>
<h3> Use Your Results with <span>OnDiet</span> Macro Counting to Lose Fat or Gain Muscle.</h3>
</Description>
<MacroForm>
    <Header>
<h1>OnDiet <span>Macro Calculator</span></h1>
</Header>
<FullForm>
<Form>
        <Input>
        <h6>Calories Intake (Kcal)</h6>
        <input onChange={GetCalories}  type="text"/>
        </Input>
        <Input>
        <h6>WEIGHT (KG)</h6>
        <input onChange={GetWeight}  type="text"/>
        </Input>
        <Input>
        <h6>Body Fat %</h6>
        <input onChange={GetBF} type="text"/>
        </Input>
        <Input>
        <h6>Fitness Goal</h6>
        <select onChange={GetGoal}>
            <option value="lose:20">Lose Fat</option>
            <option value="gain:35">Gain Muscle</option>
        </select>
        </Input>
    <Input className="act"> 
        <h6>ACTIVITY LEVEL</h6>
        <select className="activity" onChange={GetActivity} >
              <option value="0.9:1.1">LIGHTLY ACTIVE</option>
              <option value="1:1.2">MODERATELY ACTIVE</option>
              <option value="1.1:1.3">VERY ACTIVE</option> 
        </select>
    </Input>
        <Input> <button type="submit" onClick={GetRadio}> Ratio </button></Input>
</Form>
 <Ratio>
      <Macro><h3>Protein <span>{Number.isNaN(Protein) || Protein < 0 ? 0 : Protein.toString().substring(0,5)}</span> <span>gram</span></h3><Line><Per percentage={Number.isNaN((parseFloat(Protein)*4*100)/parseFloat(Calories)) || ((parseFloat(Protein)*4*100)/parseFloat(Calories)).toString().substring(0,4) < 0  ?  0 : (parseFloat(Protein)*4*100)/parseFloat(Calories)  } ></Per></Line><h3>{Number.isNaN((parseFloat(Protein)*4*100)/parseFloat(Calories)) ? 0 + "%" : ((parseFloat(Protein)*4*100)/parseFloat(Calories)).toString().substring(0,4) > 100 || ((parseFloat(Protein)*4*100)/parseFloat(Calories)).toString().substring(0,4) < 0 ? "0%" : ((parseFloat(Protein)*4*100)/parseFloat(Calories)).toString().substring(0,4) + "%"}</h3></Macro>
      <Macro><h3>Carb <span>{Number.isNaN(Carb) || Carb < 0 ? 0 : Carb.toString().substring(0,5)}</span> <span>gram</span></h3><Line><Per percentage={Number.isNaN((parseFloat(Carb)*4*100)/parseFloat(Calories)) || ((parseFloat(Carb)*4*100)/parseFloat(Calories)).toString().substring(0,4) < 0  ? 0 : (parseFloat(Carb)*4*100)/parseFloat(Calories) }  ></Per></Line><h3>{Number.isNaN((parseFloat(Carb)*4*100)/parseFloat(Calories)) ? 0 + "%" : ((parseFloat(Carb)*4*100)/parseFloat(Calories)).toString().substring(0,4) > 100 || ((parseFloat(Carb)*4*100)/parseFloat(Calories)).toString().substring(0,4) < 0 ? "0%" : ((parseFloat(Carb)*4*100)/parseFloat(Calories)).toString().substring(0,4) + "%"}</h3></Macro>
      <Macro><h3>Fat <span>{Number.isNaN(Fat) || Fat < 0 ? 0 : Fat.toString().substring(0,5)} </span> <span>gram</span></h3><Line><Per percentage={Number.isNaN((parseFloat(Fat)*4*100)/parseFloat(Calories)) || ((parseFloat(Fat)*9*100)/parseFloat(Calories)).toString().substring(0,4) < 0  ? 0 : (parseFloat(Fat)*9*100)/parseFloat(Calories) }  ></Per></Line><h3>{Number.isNaN((parseFloat(Fat)*9*100)/parseFloat(Calories)) ? 0 + "%" : ((parseFloat(Fat)*9*100)/parseFloat(Calories)).toString().substring(0,4) > 100 || ((parseFloat(Fat)*9*100)/parseFloat(Calories)).toString().substring(0,4) < 0 ? "0%" : ((parseFloat(Fat)*9*100)/parseFloat(Calories)).toString().substring(0,4) + "%"}</h3></Macro>
 </Ratio>
</FullForm>
</MacroForm>
<motion.div variants={C3Anim} initial="hidden" animate="show" className="circle circle1"></motion.div>
<motion.div variants={C3Anim} initial="hidden" animate="show" className=" circle circle2"></motion.div>
     </StyleMac>
    )
}

const Per = styled.div`
width: ${props => props.percentage > 100 ? "0%" : props.percentage + "%" };
height: 100%;
background: #ff7676;
transition: width 0.5s;
`


const Line = styled.div`
width: 100%;
height: 100%;

border-radius: 2%;
box-shadow:0px 5px 30px #e2bcd8; 
`

const Macro = styled.div`
@media  (max-width: 800px)  {
width : 100%;

}
width: 85%;
height: 12%;
display: flex;
justify-content: center;
justify-content: space-around;
align-items: center;
h3 {
    padding: 1rem;
    font-size: 2rem;
    display: flex;
    span {
        font-size: 0.8rem;
        padding-left: 0.2rem;
    }
}

`

const Ratio = styled.div`
width: 50%;
height:100%;
@media  (max-width: 375px)  {
    margin-top:60%;
    width: 100%;
    }
@media  (max-width: 800px)  {
width: 100%;
}
@media  (max-width: 375px)  {
    width: 100% !important;
    height:60vh !important;
}
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-evenly;
align-items: center;
`


const Input = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:space-around;
width: 50%;
height: 30%;
@media  (max-width: 414px)  {
    width: 100%;

}
.activity {
    font-family: 'Inter', sans-serif;
   font-size: 1.4rem;
   width: 55%;
   
}
button {
    box-shadow:0px 5px 30px #e2bcd8; 
    width: 40%;
    height: 50%;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
    font-weight: 600;
    font-family: 'Kaushan Script', cursive;
    font-size: 2rem;
}
input {
    width: 30%;
    height: 45%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 2rem;
    
}

select {
    width: 45%;
    height: 45%;
    border: none;
    box-shadow:0px 5px 30px #e2bcd8; 
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
    
}
h6 {
    font-size: 1.5rem;
    text-align: center;
    padding-right: 0.6rem;
}
` 






const Form = styled.div`
width: 50%;

@media  (max-width: 375px)  {
    width: 100% !important;
  height: 100% !important;
}
@media  (max-width: 414px)  {
    width: 100%;
height: 70vh;
}
@media  (max-width: 800px)  {
width : 100%;
overflow: visible !important;
}
@media  (max-width: 768px)  {

    width : 100%;

}
.act {
    width : 50%;
}
height:100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const FullForm = styled.div`
width: 100%;
height: 100%;

@media  (max-width: 800px)  {

display: flex;
flex-direction: column;

}
@media  (max-width: 375px)  {
    
flex-direction: column !important;
width: 100%;
height: 100%;
}
display: flex;

`


const Description = styled.div`
width: 100%;
height: 30vh;
@media  (max-width: 360px)  {
    h1 {
        font-size: 0.4rem !important;
    }
    h2{
  
    font-size: 0.4rem !important;
}
h3 {
   
    font-size: 0.1rem !important;
 
}

}
@media  (max-width: 414px)  {
    width : 100%;
    height: 50vh;
    h1 {
        font-size: 0.5rem !important;
    }
    h2{
  
    font-size: 0.5rem !important;
}
h3 {
   
    font-size: 0.2rem !important;
 
}
}
@media  (max-width: 768px)  {

width : 100%;
h2{
    margin-left:2rem;
    font-size: 1.7rem !important;
}
h3 {
    margin-left:7rem;
    font-size: 1.2rem !important;
    span {
        color: #23d997;
    }
}
}
h2{
    margin-left:2rem;
    font-size: 2rem;
}
h3 {
    margin-left:7rem;
    font-size: 1.5rem;
    span {
        color: #23d997;
    }
}
`
const CM = styled(motion.div)`
@media  (max-width: 414px)  {
    
   
    h1 {
        font-size: 0.5rem !important;
        span {
            font-size:3.5rem !important;
        }
    }
    h2{
    
    font-size: 0.5rem !important;
}

}
width:100%;
div,.des {
    overflow: hidden;
}

 margin-top: 2rem;
 margin-left:3rem;
    span {
        font-size: 7rem;
    color: #23d997;
    font-weight: bold;
   
    }

`
const Header = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media  (max-width: 414px)  {
    width: 100%;
    h1 {
    font-size: 1rem !important;
}
}
@media  (max-width: 768px)  {

width : 100%;
h1 {
    font-size: 3rem !important;
}
}
`
const MacroForm = styled.div`
font-family: 'Kaushan Script', cursive;
@media  (max-width: 360px)  {
    margin-top: 10%;
}
height: 60vh;
width: 100%;
display :flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1 {
    text-align: center;
    
    font-size: 4rem;
    span {
        font-weight: bold;
    color: #23d997;
    }
    box-shadow:0px 5px 30px #e2bcd8; 
    
}
`

const StyleMac = styled.div`
@media  (max-width: 800px)  {
overflow: visible !important;
}
min-height: 90vh;
overflow: hidden;
overflow-y: hidden;
background: linear-gradient(to right top ,#FCF6F5FF ,white);
display: flex;
flex-direction: column;
.circle1{
    background: black;
background: linear-gradient(to right top ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 10rem;
width: 10rem;
position: absolute;
top: 12%;
left:20%;
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
top: 20%;
left: 40%;
border-radius: 50%;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}
@media  (max-width: 768px)  {

.circle {
    display: none;
}
}
`
export default Mac;