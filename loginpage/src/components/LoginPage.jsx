import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const handleSubmit = () => {
    if (email === 'test@gmail.com' && username === 'test' && password === 'test@123') {
      setIsLoggedIn(true);
      setLoginSuccess(true);
    } else {
      setIsLoggedIn(false);
      setLoginSuccess(true);
    }
  };

  if (isLoggedIn) {
    return loginSuccess ? <ProfileCard /> : <p>No profile found</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-4">
      <div className="bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[2px] rounded-2xl shadow-lg w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="flex justify-between gap-3">
            <button
              onClick={handleClear}
              className="w-full py-2 rounded-md bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold hover:opacity-90 shadow-md"
            >
              Clear
            </button>
            <button
              onClick={handleSubmit}
              className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:opacity-90 shadow-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
