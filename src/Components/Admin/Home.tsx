import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaUserCog, FaBook, FaServicestack, FaSignOutAlt } from "react-icons/fa";
import Users from "../../Pages/Admin/Users";
import JobPosts from "../../Pages/Admin/JobPosts";
import Skills from "../../Pages/Admin/Skills";
import Navbar from "../Navbar";

const Home = () => {
  const [active, setActive] = useState<string>("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "JobPosts", icon: <FaUserCog /> },
    { name: "Municipalities", icon: <FaBook /> },
    { name: "Skills", icon: <FaServicestack /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="flex h-screen">
      <Navbar />
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white fixed h-full flex flex-col p-4 left-0 bottom-0 "> {/* Increased mt-16 for space below navbar */}
        <div className="flex flex-col items-center justify-between flex-grow  mt-16">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center p-3 text-lg rounded-lg mb-3 w-full justify-center transition-all duration-300 ${
                active === item.name ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 flex-1 mt-16"> {/* Added mt-16 to account for the navbar height */}
        {active === 'Users' && <Users />}
        {active === 'JobPosts' && <JobPosts />}
        {active === 'Skills' && <Skills />}
      </div>
    </div>
  );
};

export default Home;
