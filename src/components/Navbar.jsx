import React from "react";

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white py-8">
      {" "}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-slate-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-slate-300">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
