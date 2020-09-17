import React, { useEffect } from 'react';
import Header from './pages/components/Header'
import Home from './pages/home'
import Login from './pages/Login'
import {Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  // useEffect(()=>{

  // },[])//didmount
  // useEffect(()=>{

  // })//didupdate
  // useEffect(()=>{
  //   return ()=>{

  //   }
  // }) //willunmount
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
