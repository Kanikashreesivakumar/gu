import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
        />
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
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-green-600 underline">Login</a>
        </p>
      </form>
    </div>
  );
}