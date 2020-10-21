
import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: ''
        }

    this.letLogin = this.letLogin.bind(this)  

    }

    handleUsernameChange(name){
        this.setState({username: name})
    }
    
    handlePasswordChange(pass){
        this.setState({password: pass})
    }

    letLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={e => this.handleUsernameChange(e.target.value)} type='text'></input>
                <input onChange={e => this.handlePasswordChange(e.target.value)} type='text'></input>
                <button onClick={this.letLogin}>Login</button>
            </div>
        )
    }

}
    
export default Login
