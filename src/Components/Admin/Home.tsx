import { useState } from "react";
import { 
  FaTachometerAlt, FaUsers, FaUserCog, FaBook, 
  FaServicestack, FaSignOutAlt, FaUserFriends, 
  FaEye, FaHeart, FaBookmark 
} from "react-icons/fa";
import Users from "../../Pages/Admin/Users";
import JobPosts from "../../Pages/Admin/JobPosts";
import Skills from "../../Pages/Admin/Skills";
import Municipalities from "../../Pages/Admin/Municipalities";
import Dashboard from "../../Pages/Admin/Dashboard";

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white fixed h-full flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
        <div className="flex flex-col flex-grow">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center p-3 text-lg rounded-lg mb-3 w-full cursor-pointer transition-all duration-300 
                ${active === item.name ? "opacity-100" : "opacity-50 hover:opacity-100"}
              `}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 flex-1">
     

       
        {/* Dynamic Page Rendering */}
        {active === "Dashboard" && <Dashboard/>}
        {active === "Users" && <Users />}
        {active === "JobPosts" && <JobPosts />}
        {active === "Skills" && <Skills />}
        {active === "Municipalities" && <Municipalities />}
      </div>
    </div>
  );
};

export default Home;
