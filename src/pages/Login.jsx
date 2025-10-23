import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ auth, email, password });
    signIn(email, password)
      .then((response) => {
        const user = response.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">
              Don't have an account?{" "}
              <Link className="text-secondary" to={"/auth/register"}>
                <span>Register</span>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
