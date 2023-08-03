import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Profile from './Pages/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Error from './Pages/Error';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [isAuthorised, setIsAuthorised] = useState(false)
  return (
    <div className="App">
      <NavBar/>
    <h1>checkpoint API</h1>
    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/Users' element= {<User/>}/>
    <Route path='/user/:id' element= {<Profile/>}/>
    <Route path='/admin' element= {<PrivateRoute isAuthorised={isAuthorised}/>}>
    <Route path='/admin' element= {<Admin/>}/>
    </Route>
    <Route path='/login' element= {<Login/>}/>
    <Route path='/*' element= {<Error/>}/>

    </Routes>
    </div>
  );
};

export default App;
