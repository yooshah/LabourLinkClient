import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing react-router-dom
import Home from "./Components/Admin/Home";

import Registration from "./Pages/User/Registration&Login/Registration";

import AdminLogin from "./Pages/Admin/Login/AdminLogin";

import JobPosts from "./Pages/Admin/JobPosts";
// import AddMunicipality from './Pages/Admin/AddMunicipality';
import Municipalities from "./Pages/Admin/Municipalities";
import EmployerMainPage from "./Pages/User/Employer/EmployerMainPage";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/jobPosts" element={<JobPosts />} />
          <Route path="/municipalities" element={<Municipalities />} />
          <Route path="/employer/homepage" element={<EmployerMainPage />} />
          {/* <Route path="/addMunicipality" element={<AddMunicipality/>} /> */}
          {/* Route for the Users component */}
          {/* <Route path="/" element={<Users />} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
