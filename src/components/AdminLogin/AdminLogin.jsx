// src/components/AdminLogin.jsx
"use client";

import React, { useState } from "react";
import { Lock, User } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin login attempted with:", { email, password });
    alert("Admin login logic is not implemented yet.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            Maxibor Admin Login
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Access the administrative dashboard.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              className="text-sm font-medium text-gray-700 flex items-center mb-1"
              htmlFor="admin-email"
            >
              <User className="h-4 w-4 mr-2 text-green-600" />
              Email Address
            </label>
            <input
              id="admin-email"
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="admin@maxibor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700 flex items-center mb-1"
              htmlFor="admin-password"
            >
              <Lock className="h-4 w-4 mr-2 text-green-600" />
              Password
            </label>
            <input
              id="admin-password"
              name="password"
              type="password"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow-md"
          >
            Log in as Admin
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-green-600 hover:text-green-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
