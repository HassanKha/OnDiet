
import React from 'react';

import sofra from "../img/sofra.jpg"
import  styled  from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { TitleAnim,C1Anim,C2Anim,C3Anim,photoAnim} from './../Animations/HomeAnimation';



const Home = () => {
    

    return (
     <Main>
<div  className="desc" >

<div className="title">
<div className="des">
<motion.h2 variants={TitleAnim } initial="hidden" animate="show" ><span >On Diet</span></motion.h2>

</div>
<div className="des" >
<motion.h3 variants={TitleAnim } initial="hidden" animate="show">without <span >Deprivation </span></motion.h3>
</div>
<div >
<h4>Calorie Counter & Diet Tracker</h4>

</div>
</div>
<p >Whether you want to lose weight, tone up, get healthy, change your habits, or start a new diet without deprivation , you’ll love <span >OnDiet</span></p>
<Link className="btn" to="/calculatecalories" ><button >Start</button></Link>
</div>
<div className="img">
    <motion.img variants={photoAnim} initial="hidden" animate="show" src={sofra} alt="meals" />
</div>
<motion.div variants={C2Anim} initial="hidden" animate="show" className="circle circle1"></motion.div>
<motion.div variants={C1Anim} initial="hidden" animate="show" className=" circle circle2"></motion.div>
     </Main>
    )
}


const Main = styled.main`

@media  (max-width: 800px)  {
    .img {
        width: 100% !important;
        height: 15vh !important;
        img { 
            width: 100% !important;
            margin-left:0% !important;

        }
    }
    .btn {
        margin-left: 5% !important;
    }
    .circle {
        display: none;
    }
    .desc {
        width:100% !important;
    }
 .des {
   
    overflow: visible !important;
    
    span {
        overflow: visible;
    }
}
.title {
    h2 {
        font-size: 5rem;
  
    }
    h3 {
        font-size: 3.5rem;
    }

    h4 {
        font-size: 1.5rem;
    }
    p{
        font-size: 0.5rem !important;
        width:50%;
    }
}
}

.des {
    overflow: hidden !important;
}
.circle1{
    background: black;
background: linear-gradient(to right top ,rgba(231, 198, 226,0.3) ,rgba(255,255,255,1));
height: 15rem;
width: 15rem;
position: absolute;
top: 20%;
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
height: 15rem;
width: 15rem;
position: absolute;
top: 35%;
left: 25%;
z-index: -5;
border-radius: 50%;
overflow-y: hidden;
&:hover{
    background: linear-gradient(to right bottom ,rgba(246, 237, 245,0.2) ,rgba(255,255,255,1));
}
}
width:100%;
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;

color:#000000FF;


@media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  
  }
  @media (max-width: 768px) {
   .title {
       width:100%;
   }
  }
  .desc {
      padding-left:10%;
      width : 40%;
      .title .des {
          
          overflow:hidden;
      }
  }
  .img {
    width : 60%;
    height: 90vh;
    img {
        margin-top:10%;
        margin-left:15%;
        width : 75%;
    
    }
  }

img {
  
    box-shadow: 0px 5px 5px #000000FF;

    &:hover {
        box-shadow: 0px 10px 10px #000000FF;
    }
}
.btn {
    margin-left: 40%;
}
button {
font-weight: bold;
font-size: 1.1rem;
font-family: 'Inter', sans-serif;
cursor: pointer;
padding: 1rem 2rem;
border: 3px solid #23d997;
background: transparent;
color: #000000FF;
transition: all 0.5s ease;
&:hover {
background-color:rgba(231, 198, 226,0.5);
color: #FCF6F5FF;
}
}
h2{
    font-weight: lighter;
    font-size: 7.5rem;
  
}
h3 {
    font-size: 5rem;
}
h4{
    font-size: 3rem; 
}
span{
    font-weight: bold;
    color: #23d997;
}
p{
  
    color:#000000FF;
    font-size: 1.4rem;
 
    line-height: 150%;
}


`
export default Home;

