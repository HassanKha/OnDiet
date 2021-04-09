
import React  from 'react';

import Home from './components/Home';
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/nav"
import CC from './components/CalcCalories';
import Mac from './components/Macros';
import NF from './components/NF';
import {Switch , Route} from 'react-router-dom';




function  App  () {



  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
<Switch>
      <Route  path="/" exact>
         <Home/>
      </Route>

      <Route path="/calculatecalories">
         <CC/>
      </Route>

      <Route path={["/food/:id","/nutritionfacts"]} >
         <NF />
      </Route>

      <Route path="/Macronutrition">
          <Mac/>
      </Route>
 </Switch>
    </div>
  );
}

export default App;
