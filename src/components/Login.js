import React,{} from "react";
import Base from "../Base/Base";


function Login(){
    
  return(
    <Base
    title={"Login"}
    discription={"Login page"}
    >
    <div className="">
      <h3>WELCOME BACK..!</h3>
      <div className="us-container">
        
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login"/>
        </div>
        <div className="user">
          <div>
          <label for="Email"><b>Email</b></label><br/>
          <input type="Email" name="Email" id="Email"className="input" placeholder="abc@gmail.com"/><br/>
          <label for="Pass" ><b>Password</b></label><br/>
          <input type="Password" name="Password" id="Pass" className="input" /><br/><br/>
          <button className="input"><b>Login</b></button><br/><br/>

          <button ><b><i class="fa fa-google fa-1x" aria-hidden="true"></i>-Login with Google</b></button><br/><br/>

          <button><b><i class="fa fa-facebook fa-1x" aria-hidden="true"></i>-Login with facebook</b></button><br/><br/>

          <button>Forget Password?</button><br/><br/>
          <button>Create an new Account.!</button>
          </div>
          
        </div>

      </div>
    </div>

     </Base>
      )
}

export default Login 
