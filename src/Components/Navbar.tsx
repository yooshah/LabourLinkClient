import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-2 z-50 ">
      <div className="container mx-auto">
        <div className="flex items-center">
         
          <a href="#" className="text-2xl font-bold text-gray-800">
            <img src="/assets/Logo.png" alt="Logo" className="h-16 w-auto -mt-2" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
