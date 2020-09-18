import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Notfound from './notfound'
class Admin extends Component {
    state = {  }
    render() {
        if (this.props.Auth.role!=='admin'){
            return (
                <Notfound/>
                // <Redirect to='/notfound'/>
            )
        }
        return (
            <div>
                <h1>Admin</h1>
            </div>
          );
    }
}

const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default connect(Mapstatetoprops) (Admin);