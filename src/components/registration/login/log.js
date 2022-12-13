import React, { Component } from "react";
// import './log.css'


class Login extends Component{
    render(){
        return (
         <body>   
        <div className="box"> 
        <h3>Login</h3>
        <input type="text" placeholder="Name" name="Name"/>
        <input type="password" placeholder="Password" name="setPassword"/>
        <center><button type="submit" class="log" >Login</button></center> 
        <center><a href="">Forget Password</a></center>
        <center><a href="">New User</a></center>
        </div>
        </body>
        )
        
    } 

}

export default Login