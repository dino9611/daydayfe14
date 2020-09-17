import React, { Component, createRef } from 'react';
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 
toast.configure()
class Login extends Component {
    state = {
        username:'',
        password:'',
        liat:createRef(),
        liatpassword:false
    }

    componentDidMount(){
        // ngisi data ke state biasanya akses data dari backend
    }
    componentDidUpdate(){
        // jalan pada saat setelah setstate atau adanya perubahan props/ data di redux
        
    }
    componentWillUnmount(){
        // bersih bershi tertrigger pada saat sesaat mau pindah page
    }

    onChangeInput=(e,property)=>{
        this.setState({[property]:e.target.value})
    }

    onLoginClick=()=>{
        const {password,username}=this.state
        if(password===''||username===''){ //username atau password kosong
            toast.error('harus isi inputnya!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }else{

        }
     
    }
    

    render() {
        console.log(this.props.bebas)
        return (
            <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
                <div className='py-4 px-4' style={{width:'30%',border:'1px solid black',display:'flex',flexDirection:'column'}}>
                    <h2 style={{alignSelf:'center'}}>Login</h2>
                    <input onChange={(e)=>this.onChangeInput(e,'username')} className='form-control mt-2' type="text" placeholder='username'/>
                    <input onChange={(e)=>this.onChangeInput(e,'password')}  className='form-control mt-2' type={this.state.liatpassword?'text':"password"} placeholder='password'/>
                    <div className='mt-2'>
                        <input type='checkbox' onClick={(e)=>this.setState({liatpassword:e.target.checked})}  /> liat password
                    </div>
                    <button className='mt-2 btn btn-primary' onClick={this.onLoginClick} style={{alignSelf:'flex-end'}} >Login</button>           
                </div>
            </div>
          );
    }
}

const MapstateToProps=(state)=>{
    return{
        bebas:state.Auth
    }
}

export default connect(MapstateToProps)(Login);