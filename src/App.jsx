import React from 'react';
import {Link,Outlet} from 'react-router-dom'



export default function App() {
  return (
    <div>
      The Brand Village
      
      <div>
<Link to='/'>Home</Link>
<Link to='/Contact'>Contact us</Link>
<Link to='/bags'>Bags</Link>
<Link to='/shoes'>shoes</Link>
<Outlet/>
      </div>
      </div>

    
    
)};



