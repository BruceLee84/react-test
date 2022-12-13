import React, { useState } from "react";
// import './sign.css'


function Signup (){
    const [signdata, logFunction]= useState(
    <form>
    <h3>SignUp</h3>       
    <input type="text" placeholder="Name" name="Name"/>
    <input type="text" placeholder="Email" name="email"/>
    <input type="text" placeholder="Number" name="mobileNumber"/>
    <input type="text" placeholder="Password" name="setPassword"/>
    <center><button type="submit" class="sign">SignUp</button></center>
    </form>
    )

    const reg =()=>{
        logFunction(
            <form>
            <h3>Login</h3>
            <input type="text" placeholder="Name" name="Name"/>
            <input type="password" placeholder="Password" name="setPassword"/>
            <center><button type="submit" class="log" >Login</button></center> 
            <center><a href="">Forget Password</a></center>
            </form> 
        )
    }

    return(
        <>
        <div className="box">
            {signdata}
        <a href="#" onClick={reg}>Already Register</a>
        

        </div>
        </>
    )

}

export default Signup;