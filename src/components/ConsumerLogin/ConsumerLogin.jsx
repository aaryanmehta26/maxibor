// src/components/ConsumerLogin.jsx
"use client";

import React, { useState } from "react";
import { Lock, User } from "lucide-react";

const ConsumerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Consumer login attempted with:", { email, password });
    // Placeholder for actual login logic.
    // In a real application, you would call an API here.
    // Replaced alert() with console.log as per best practices.
    console.log("Consumer login logic is not implemented yet.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Maxibor Client Portal
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Access your project dashboards and data.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              className="text-sm font-medium text-gray-700 flex items-center mb-1"
              htmlFor="consumer-email"
            >
              <User className="h-4 w-4 mr-2 text-gray-600" />
              Email Address
            </label>
            <input
              id="consumer-email"
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="client@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700 flex items-center mb-1"
              htmlFor="consumer-password"
            >
              <Lock className="h-4 w-4 mr-2 text-gray-600" />
              Password
            </label>
            <input
              id="consumer-password"
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
            className="w-full bg-gray-800 text-white p-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-md"
          >
            Log in to your account
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

export default ConsumerLogin;
