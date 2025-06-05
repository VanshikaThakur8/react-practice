import React from 'react';
import profile from './assets/profile.jpg';

function FirstPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Mitchell</div>
          <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="md:hidden text-2xl cursor-pointer">
            <i className="ri-menu-line"></i>
          </label>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg text-blue-600 font-semibold mb-2">HELLO</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I'm <span className="text-blue-600">Mitchell</span><br />a Web Developer
            </h1>
            <p className="text-gray-700 mb-6">
              Welcome to my web developer portfolio! I'm Mitchell, a skilled and
              creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Hire Me
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
                Portfolio
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img src={profile} alt="profile" className="rounded-xl w-72 md:w-96 shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstPage;

