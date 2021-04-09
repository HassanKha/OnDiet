
import React , {useEffect, useState} from 'react';
import  styled  from 'styled-components';
import {useDispatch , useSelector} from "react-redux";
import { LoadFoodNF } from './../Actions/FoodNuitritionFacts';
import {Link} from 'react-router-dom';
import { NameFood } from './../Actions/FoodAction';
import {motion} from 'framer-motion';

function F({img,name,id,fetchname}) {

const dispatch = useDispatch();



const LoadNF = () => {
    document.body.style.overflow= "hidden";
    dispatch(LoadFoodNF(fetchname));
    dispatch(NameFood(fetchname));
    console.log(id);
}
const Food = useSelector(state => state.NF);
    return (
<>
{
    Food && (
     <Styledfood layoutId={id} onClick={LoadNF}>
         <Link className="link" to={`/food/${id}`}>
<h1>{name}</h1>
<img src={img} alt={name}/>
      </Link>
     </Styledfood>
    )
}
     </>
    )

}
const Styledfood = styled(motion.div)`
min-height: 30vh;
box-shadow:0px 5px 30px #e2bcd8;
@media  (max-width: 800px)  {

    min-height: 15vh;
}
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
img {
    width:100%;
    height: 40vh;
    object-fit: cover;
}
h1 {
    text-decoration:none;
    color:#000000FF;
    list-style: none;
    outline: none;
}
.link {
    color: black;
    text-decoration: none;
}
`;


export default F;