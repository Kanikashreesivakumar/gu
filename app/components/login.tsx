import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/register" className="text-blue-600 underline">Register</a>
        </p>
      </form>
    </div>
  );
}