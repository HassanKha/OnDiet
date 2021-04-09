
import React from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
     <StyledNav>
<h1><Link id="logo" to="/">OnDiet</Link></h1>
<ul>
    <li>
    <Link to="/calculatecalories">Calculate Your Calories </Link>
    </li>
    <li>
    <Link to="/nutritionfacts">Get Nutrition Facts</Link>
    </li>
    <li>
    <Link to="/Macronutrition">Know Your Macros</Link>
    </li>
</ul>
     </StyledNav>
    )
}



const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
position: static;
background: linear-gradient(to right top ,#FCF6F5FF ,white);

box-shadow: 0px 1px 1px #FCF6F5FF;
align-items: center;
padding: 1rem 10rem;

a{
    text-decoration:none;
    color:#000000FF;
}
ul {
    display: flex;
    list-style: none;
}
li {
    padding-left: 10rem;
    position: relative;
    font-family: 'Kaushan Script', cursive;
    font-weight: 500;
    font-size: 1.3rem;
}
#logo {
    font-size:2.6rem;
    color:#000000FF;
    font-family: 'Kaushan Script', cursive;
    font-weight: 1500;
}
`;

export default Nav;