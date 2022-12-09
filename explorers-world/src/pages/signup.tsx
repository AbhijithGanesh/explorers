import { navigate } from "gatsby";
import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { sign_up_wrapper } from "../utils/auth";

const SignUp = (): React.ReactNode => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  return (
    <Layout>
      <section className="py-8 text-white text-2xl font-extrabold">
        Sign up for a <i>new account </i>
      </section>
      <form>
        <input
          className="bg-gray-300 text-black font-medium text-xl rounded-md px-2 my-2 w-full"
          type="email"
          name="email"  
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-300 text-black font-regular text-xl w-full rounded-md  px-2 justify-center"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="my-2 bg-gray-300 text-black font-regular text-xl w-full rounded-md  px-2 justify-center"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </form>
      <button
        className="bg-teal-600 my-2 w-full  text-white font-semibold text-lg rounded-lg px-2 py-1"
        onClick={async (e) => {
          sign_up_wrapper(email, password, username);
          e.preventDefault();
          navigate("/login");
        }}
      >
        Signup
      </button>
    </Layout>
  );
};

export default SignUp;
