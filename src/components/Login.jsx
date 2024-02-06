import React from "react";
import "../styles/Login.css";
import { FaGithub, FaLinkedin, FaDiscord, FaApple } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import {  useNavigate } from "react-router-dom";
import { Base, BY_APPLE, BY_GOOGLE, DONT_HAVE_ACCOUNT, REGISTER, SignIn, SIGN_IN_ACCOUNT } from "../constant/constant";
const Login = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/uploadcsv");
  }
  return (
    <div className="container">
      <div className="child1">
        <div className="baseIcon">
          <svg
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
            <path
              d="M0 40L20 30L40 40L50 30L80 40"
              stroke="#605BFF"
              stroke-width="4"
              fill="none"
            />
          </svg>
        </div>
        <div className="base">
          <span>{Base}</span>

        </div>
        <div className="socielMedia">
          <FaGithub />
          <FiTwitter />
          <FaLinkedin />
          <FaDiscord />
        </div>
      </div>
      <div className="child2">
        <div className="login">
          <div className="heading">
            <h1>{SignIn}</h1>
            <span>{SIGN_IN_ACCOUNT}</span>
            <div className="buttons">
              <button>
                <span>
                  <FcGoogle style={{paddingRight:"5px",fontSize:"1rem"}}/>
                {BY_GOOGLE}
                </span>
              </button>
              <button>
                <span>
                  <FaApple style={{paddingRight:"5px",fontSize:"1rem"}}/>
               {BY_APPLE}
                </span>
              </button>
            </div>
          </div>
          <div className="loginForm">
            <label className="label">Email address</label>
            <input className="input" type="email" placeholder="Enter Email" />
            <label className="label">Password</label>
            <input className="input" type="password" placeholder="Enter Password" />
            <span className="fg-rh">Forgot password?</span>
            <button onClick={handleClick} className="signin">{SignIn}</button>
          </div>
          <p style={{textAlign:"center",color:"#999999",fontSize:"0.7rem"}}>
            {DONT_HAVE_ACCOUNT} <span className="fg-rh">{REGISTER}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
