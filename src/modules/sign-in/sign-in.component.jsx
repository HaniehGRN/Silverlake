import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import FormInput from "../../shared/components/form-input/form-input.component";
import CustomButton from "../../shared/components/custom-button/custom-button.component";
import {setAuthMode} from "../../config/redux/features/auth/authSlice";
import { setCurrentUser } from "../../config/redux/features/user/userSlice";

import "../sign-up/sign-up.styles.scss";
import "./sign-in.styles.scss";

const SignIn = () => {

          const dispatch = useDispatch();

          const [email, setEmail] = useState("");
          const [passWord, setPassWord] = useState('');
          const [signInHoverState, setSignInHoverState] = useState(true);
          const [infoHoverState, setInfoHoverState] = useState(false);

          const handleEmailChange = (e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
          }

          const handlePassChange = (e) => {
                    e.preventDefault();
                    setPassWord(e.target.value);
          }

          const handleMouseEnterInfo = () => {
                    setInfoHoverState(true);
                    setSignInHoverState(false);
          }

          const handleMouseLeaveInfo = () => {
                    setInfoHoverState(false);
                    setSignInHoverState(true);
          }

          const handleMouseEnterSignIn = () => {
                    setSignInHoverState(true);
          }

          const handleMouseLeaveSignIn = () => {
                    console.log("yay")
          }

          const handleGoogleClick = () => {
                    console.log("google click")
          }

          const handleSubmit = (e) => {
                    e.preventDefault();
                    dispatch(setCurrentUser({id: 1, dispalyName: "hanieh", email: "hanieh@gmail.com" }));
                    setPassWord("");
                    setEmail("");
          }

          const handleClick = (e) => {
                    e.preventDefault(); 
                    dispatch(setAuthMode("sign-up"));
          }

          return (
                    <div className="sign-container">
                              <form
                                        className={`info-part ${infoHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterInfo}
                                        onMouseLeave={handleMouseLeaveInfo}
                                        onSubmit={handleClick}
                              >
                                        <h1>info part</h1>
                                        <p>lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</p>
                                        <CustomButton>i don't have an account</CustomButton>
                              </form>
                              <form
                                        className={`auth-part ${signInHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterSignIn}
                                        onMouseLeave={handleMouseLeaveSignIn}
                              >
                                        <FormInput
                                                  name="email"
                                                  type="email"
                                                  value={email}
                                                  label="Email"
                                                  handleChange={handleEmailChange}
                                                  required
                                        >
                                                  <MdEmail />
                                        </FormInput>
                                        <FormInput
                                                  name="password"
                                                  type="password"
                                                  value={passWord}
                                                  label="Password"
                                                  handleChange={handlePassChange}
                                                  required
                                        >
                                                  <MdOutlinePassword />
                                        </FormInput>
                                        <CustomButton onclick={handleSubmit}>SIGN IN</CustomButton>
                                        <CustomButton type="google-sign-in" onclick={handleGoogleClick}><FcGoogle className="google-icon" />SIGN IN WITH GOOGLE</CustomButton>
                                        <Link to="/ch" className="frgt-pass-link">Forget Password</Link>
                              </form>
                    </div>
          )
};

export default SignIn;