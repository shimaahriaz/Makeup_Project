import React, { useState } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import { PiPasswordBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import img from "../../../images/Login.jpg";
import  "./Login.css";



const Login = (props) => {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, seterrorMsg]= useState("");
  const [errorValidation, seterrorValidation]= useState([]);
  const [looding, setLooding]= useState(false)

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function goLogIn() {
    navigate("/home");
  }

  function validation(){
    let schema= Joi.object({
      email: Joi.string().email({tlds:{allow:["com", "net"]}}),
      password: Joi.string().alphanum().required(),
    })
      return schema.validate(user,{abortEarly: false})
    }

  async function submitFormData(e) {
    e.preventDefault();
    
    setLooding(true);


    let validationErrorResponse= validation();
    if(validationErrorResponse.error){
      seterrorValidation(validationErrorResponse.error.details)
      
    }
    

    else{
   localStorage.setItem("userToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")
         goLogIn()

      // let {data} = await axios.post("https://route-movies-api.vercel.app/signin", user);
      // console.log(data)
      // if(data.message === "success"){
      //   localStorage.setItem("userToken", data.token)
        props.informUserData()
      //   goLogIn()
      // }
      // else{
      //   seterrorMsg(data.message)
       
      // }
    }
    setLooding(false)
  }
  return (
   
    <div className="form-contact">
      <div className="container">
      <h1 className="h-contact">Login</h1>
        
          
      
            <form onSubmit={submitFormData} className="form-floating">
            
              {errorValidation.map((error, index)=>
              <div key= {index} className='alert alert-danger'>{error.message}</div>
              )}
            
           
                   
              <div className="">
              <div className="mb-2 input-group">
                <span className="input-reglogin">
                  <TfiEmail className="icon-contact fs-5 fw-bold" />
                </span>
                <input
                  onChange={getUserData}
                  type="email"
                  className="form-control form-registerlogin"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  name="email"
                />
                <p className="line-contact"></p>
              </div>
              <div id="emailHelp" className="form-text text-danger">
              {errorMsg === "email doesn't exist" ? errorMsg : ""}.
              </div>
              <p className="size-contact"></p>
              <div class="mb-2 input-group">
                <span className="input-reglogin">
                  <PiPasswordBold className="icon-contact" />
                </span>
                <input
                  onChange={getUserData}
                  type="password"
                  className="form-control form-registerlogin"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                />
                <p className="line-contact"></p>
              </div>
              <div id="emailHelp" className="form-text text-danger">
              {errorMsg === "incorrect password" ? errorMsg : ""}
              </div>
              
              <p className="size-contact"></p>
              
              <button type="submit" className="btn btn-primary float-end">
                { looding? <i className='fa fa-spinner fa-spin text-warning fs-5'></i> :"Submit"}
              </button> 
              <div className="clearfix"></div>
              <p className="pb-5"></p>
              </div>
             
           
            </form>
          </div>
        </div>
     
 
  );

};

export default Login;
