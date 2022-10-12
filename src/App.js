import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'

import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navbar'
import {Products} from './components/Products'
import {Featureproduct} from './components/Featureproduct'
import {Newproduct} from './components/Newproduct'
import {Notpagefound} from './components/Notpagefound'
import {Users,Userone} from './components/Users'
import {Userdetails} from './components/Userdetails'
import React from 'react';

import Mount from './components/Mount'
import Usehook from './components/Usehook'

//class based


// class Header extends React.Component {
//   render() {
//         return (
//             <div>
//               <h1>AM H1</h1>
//               <h1>AM H2</h1>
//             </div>
//         )
//   }
// }

//function based

function Header() {
        return (
            <div>
              <h1>AM H1</h1>
              <h1>AM H2</h1>
            </div>
        )
  }


function App() {
    return (
    <>
    <Header />  
    <Mount /> 
    <Usehook />     
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />  
      <Route path='/products' element={<Products />} >
        <Route path="feature" element={<Featureproduct />} />
        <Route path="new" element={<Newproduct />} />
        <Route index element={<Newproduct />} />
        
      </Route>
      <Route path='users' element={<Users />} />
      <Route path='users/:id' element={<Userdetails />} />
      <Route path="*" element={<Notpagefound />} />
          
    </Routes>
    {/* <h1>welcome bhaskar first app react</h1> */}
    </>
    
  );
}

export default App;
