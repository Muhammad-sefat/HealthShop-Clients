import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-3 bg-teal-400 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-xl my-8">
      <h1 className="text-3xl font-bold text-center">Sing Up</h1>
      <form noValidate="" action="" className="space-y-6 text-left">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            User Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block dark:text-gray-600">
            User Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            placeholder="Photo"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="role" className="block dark:text-gray-600">
            User Role
          </label>
          <select
            id="role"
            name="role"
            className="block w-full mt-1 p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="User">User</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
        <button className="block w-full p-3 text-center font-medium bg-slate-200 rounded-lg  dark:text-gray-50 dark:bg-violet-600">
          Sign up
        </button>
      </form>

      <p className="text-sm text-center mt-3 sm:px-6 dark:text-gray-600">
        Already have an account please ?
        <Link
          to={"/signin"}
          rel="noopener noreferrer"
          href="#"
          className="underline font-medium dark:text-gray-800"
        >
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
