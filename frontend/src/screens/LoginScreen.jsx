import { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="py-3 text-center">
          New Customer?{" "}
          <Link to="/register" className="text-primary underline font-semibold">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
