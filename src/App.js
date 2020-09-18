import React, { useEffect, useState } from 'react';
import Header from './pages/components/Header'
import Home from './pages/home'
import Login from './pages/Login'
import Admin from './pages/admin'
import Notfound from './pages/notfound'
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Axios from 'axios'
import {connect} from 'react-redux'
import {LoginAction} from './redux/actions'
function App(props) {
  const [isloading,setloading]=useState(true)

  useEffect(()=>{//keep login
    const datastorage=JSON.parse(localStorage.getItem('datauser'))
    if(datastorage.id){
      Axios.get(`http://localhost:4000/users/${datastorage.id}`)
      .then((res)=>{
        props.LoginAction(res.data)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setloading(false)
      })
    }else{
      setloading(false)

    }
  },[])//didmount
  // useEffect(()=>{

  // })//didupdate
  // useEffect(()=>{
  //   return ()=>{

  //   }
  // }) //willunmount
  if(isloading){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/admin' component={Admin}/>
        <Route  path='*' component={Notfound}/>
      </Switch>
    </div>
  );
}

export default connect(null,{LoginAction}) (App);
