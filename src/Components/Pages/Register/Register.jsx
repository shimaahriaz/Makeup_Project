import  axios  from 'axios';
import Joi from 'joi';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { PiPasswordBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
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
    navigate("/login");
  }

  function validation(){
    let schema= Joi.object({
      first_name: Joi.string().alphanum().required(),
      last_name: Joi.string().alphanum().required(),
      age: Joi.number().min(20).max(90).required(),
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
      goLogIn();
      // let {data} = await axios.post("https://route-movies-api.vercel.app/signup", user);
      // console.log(data)
      // if(data.message === "success"){
      //   goLogIn()
      // }
      // else{
      //   seterrorMsg(data.errors.email.message)
      // }
    }
    setLooding(false)
  }
  return (
   
    <div className="form-contact">
      <div className="container">
      <h1 className="h-contact">Register</h1>
        
          
      
            <form onSubmit={submitFormData} className="form-floating">
            <div className="row">
              {errorValidation.map((error, index)=>
              <div key= {index} className='alert alert-danger'>{error.message}</div>
              )}
            
           
                   <div className="col-lg-6">
              <div className="mb-2 input-group">
                <span className="input-group-text input-reglogin">
                  <FiUser className="icon-contact" />
                </span>
                <input
                  onChange={getUserData}
                  type="text"
                  className="form-control form-registerlogin"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="first name"
                  name="first_name"
                />
                <p className="line-contact"></p>
              </div>
              {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
              </div> */}
              <p className="size-contact"></p>

              <div className="mb-2 input-group">
                <span className="input-group-text input-reglogin">
                  <FiUser className="icon-contact" />
                </span>
                <input
                  onChange={getUserData}
                  type="text"
                  className="form-control form-registerlogin"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="last name"
                  name="last_name"
                />
                <p className="line-contact"></p>
              </div>
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
              <p className="size-contact"></p>

              <div className="mb-2 input-group">
                <span className="input-group-text input-reglogin">
                  <FiUser className="icon-contact" />
                </span>
                <input
                  onChange={getUserData}
                  type="number"
                  className="form-control form-registerlogin"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="age"
                  name="age"
                />
                <p className="line-contact"></p>
              </div>
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
              <p className="size-contact"></p>
              </div>
              <div className="col-lg-6">
              <div className="mb-2 input-group">
                <span className="input-group-text input-reglogin">
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
              {errorMsg? errorMsg : ""}.
              </div>
              <p className="size-contact"></p>
              <div class="mb-2 input-group">
                <span className="input-group-text input-reglogin">
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
              {/* <div id="emailHelp" className="form-text">
                jhgghffftu
              </div> */}
              
              <p className="size-contact"></p>
              
              <button type="submit" className="btn btn-primary float-end">
                { looding? <i className='fa fa-spinner fa-spin text-warning fs-5'></i> :"Submit"}
              </button> 
              <div className="clearfix"></div>
              <p className="account-log-contact mt-3 float-end">
              Aleardy hava an account?
              <span onClick={goLogIn} className="login">
                Log In
              </span>
            </p>
              </div>
             
            </div>
            </form>
          </div>
        </div>
     
 
  );
};

export default Register;
