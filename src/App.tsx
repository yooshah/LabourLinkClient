import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Admin/Home";
import Registration from "./Pages/User/Registration&Login/Registration";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import JobPosts from "./Pages/Admin/JobPosts";
import MunicipalitiesByState from "./Pages/Admin/MunicipalityByState";
import Dashboard from "./Pages/Admin/Dashboard";
import Skills from "./Pages/Admin/Skills";
import Users from "./Pages/Admin/Users";
import Municipalities from "./Pages/Admin/Municipalities";
import { Toaster } from "react-hot-toast";

// React Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Admin Layout with Sidebar */}
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="jobposts" element={<JobPosts />} />
            <Route path="municipalities" element={<Municipalities />} />
            <Route path="skills" element={<Skills />} />
          </Route>

          {/* Authentication & Other Routes */}
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/municipality-by-state" element={<MunicipalitiesByState />} />
        </Routes>
      </Router>

      {/* Toaster Notifications */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 2000 },
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
