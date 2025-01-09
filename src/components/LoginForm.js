import React, { useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginOptions } from "../utils/validations";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitForgotPassword = () => {
    navigate("/forgot-password");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fetchData = async () => {
    try {
      const url = "https://mocki.io/v1/0a65a72c-5f80-4125-bf57-bbe945daf91e";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: result.data.user.username,
          fullname: result.data.user.fullName,
        })
      );
      dispatch(
        setUser({
          username: result.data.user.username,
          fullname: result.data.user.fullName,
        })
      );
    navigate("/dashboard");
      
    } catch (error) {
      console.log("Login Fail", error);
    }
  };
  const handleLogin = (data) => {
    fetchData();
  };
  const handleError = (errors) => {};
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(handleLogin, handleError)}
        className="form-input"
      >
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <CiUser className="icon-form" />
          <input
            type="text"
            name="user"
            placeholder="Type your username"
            {...register("user", loginOptions.user)}
          />
          <small className="text-danger">
            {errors?.user && errors.user.message}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <RiLockPasswordLine className="icon-form" />
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            {...register("password", loginOptions.password)}
          />
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
        </div>
        <div className="forgot-link">
          <a onClick={handleSubmitForgotPassword}>Forgot password?</a>
        </div>
        <button type="submit" className="btn-login">
          LOGIN
        </button>
        <div className="other-sign-up">
          <div>Or Sign Up Using</div>
          <div className="social-media">
            <a href="#">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook"
                width={32}
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="twitter"
                width={32}
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google"
                width={32}
              />
            </a>
          </div>
        </div>
        <div className="sign-up">
          <div>Or Sign Up Using</div>
          <span>SIGN UP</span>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default LoginForm;
