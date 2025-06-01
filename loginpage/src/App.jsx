import React from 'react';
import LoginPage from './components/LoginPage';
import ProfileCard from './components/ProfileCard';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';




function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showLogin ? (
        <LoginPage />
      ) : (
        <RegisterPage onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;



