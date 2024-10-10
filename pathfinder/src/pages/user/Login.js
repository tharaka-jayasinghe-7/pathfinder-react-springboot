import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">User Login</h2>
      {/* Add your login form here */}
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
