import React from "react";
import  ReactDOM from "react-dom";

import fabfruit  , {fabprog ,MyName }from "./App";

ReactDOM.render(
 <>
  <app>
   <ol>
    <li>Mango</li>
    <li>Banana</li>
    <li>{MyName ()}</li>
    <li>{fabfruit}</li>
   </ol> 
  </app>
 </>, document.getElementById('root')
)