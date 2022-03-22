import React from 'react';
import { BrowserRouter as Router,
 Route, 
 Link, 
 Routes } from 'react-router-dom';

import './App.css';
import './script'
//screens
import Home from './screens/home';
import Profile from './screens/profile';
import Login from './screens/login';
import Register from './screens/register';
import FormReg from './screens/form';
 

function App() {
    return (
      <Router>

        <nav>

          <div className="site-title">
            <a href="/"><h1>DOUBLE-T PRODUCTIONS</h1></a>
            <p>A no is just a yes, upside down</p>
          </div>

          <ul>
            <li><a href="/">Home</a></li>
            <li> <Link to="/register" >Register</Link></li>
            <li> <Link to="/login">Login</Link></li>
            <li> <Link to="/form">Form</Link></li>
          </ul>

        </nav>

          <main className="main">
            <div className="content">
              
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/form" element={<FormReg />}></Route>
                </Routes>

            </div>
          </main>
          
    <footer>
      Copyright &copy; DOUBLE-T PRODUCTIONS  
    </footer>
    
      </Router>

    
    );
  }
  
  export default App;
  