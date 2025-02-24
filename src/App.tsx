import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing react-router-dom
import Home from "./Components/Admin/Home";
import { Toaster } from "react-hot-toast";

import Registration from "./Pages/User/Registration&Login/Registration";

import AdminLogin from "./Pages/Admin/Login/AdminLogin";

import JobPosts from "./Pages/Admin/JobPosts";
// import AddMunicipality from './Pages/Admin/AddMunicipality';
import Municipalities from "./Pages/Admin/Municipalities";
import EmployerMainPage from "./Pages/User/Employer/EmployerMainPage";
import PostJobForm from "./Pages/User/Employer/PostJobPage";
import LoginPage from "./Pages/User/Registration&Login/UserLogin";
import ViewPostJob from "./Pages/User/Employer/ViewPostJob";
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
          <Route path="/employePostjob" element={<PostJobForm />} />
          <Route path="/userlogin" element={<LoginPage />} />
          <Route path="/api/job/jobpostbyclient" element={<ViewPostJob />} />
          {/* <Route path="/addMunicipality" element={<AddMunicipality/>} /> */}
          {/* Route for the Users component */}
          {/* <Route path="/" element={<Users />} /> */}
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 25px",
            backgroundColor: "#9333EA",
            color: "#FFF",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
