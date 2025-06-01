import React, { useState } from 'react';

function RegisterPage({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    alert(`Registration Successful!\nGender: ${gender}\n(Demo only, no saving)`);
    onSwitchToLogin();
  };

  const handleClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setGender('');
    setTermsAccepted(false);
  };

  return (
    <div className="bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 p-1 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Gender</label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label className="text-gray-700">I accept the terms and conditions</label>
          </div>

          <div className="flex justify-between gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="w-full py-2 rounded-md bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold hover:opacity-90 shadow-md"
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:opacity-90 shadow-md"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-pink-600 font-medium hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
