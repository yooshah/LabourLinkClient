import { useState } from "react";
import { useRegisterUser } from "../../../Hooks/User/RegisterHook";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
  
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Labour", 
  });

  const { mutate, isError, error } = useRegisterUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleUserType = () => {
    setFormData((prevData) => ({
      ...prevData,
      userType: prevData.userType === "Labour" ? "Employer" : "Labour",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    mutate(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold text-purple-600 absolute top-8 left-10">
        Labour Link
      </h1>

      {/* Reduced width and overall size */}
      <div className="bg-white shadow-md rounded-xl p-4 w-[20rem] h-[auto]">
        <h2 className="text-xl font-semibold mb-3">
          <span className="bg-yellow-300 px-1 font-bold rounded">Reg</span>ister
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
           
          
          </div>

          <div>
            <label className="block text-xs font-medium">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium">Password*</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium">Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          {/* Toggle Button for UserType */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">User Type: {formData.userType}</span>
            <button
              type="button"
              onClick={toggleUserType}
              className="bg-gray-300 w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out p-1"
            >
              <div
                className={`w-5 h-5 bg-blue-500 rounded-full transform transition duration-300 ease-in-out ${
                  formData.userType === "Employer" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white p-1 rounded-md w-full text-sm hover:bg-purple-700 disabled:bg-purple-400"
          >
            Confirm
          </button>

          {isError && <p className="text-red-500 text-xs mt-2">{error?.message}</p>}
        </form>

        <p className="mt-3 text-xs text-center">
          Already have an account? {" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
import { useState } from "react";
import { useRegisterUser } from "../../../Hooks/User/RegisterHook";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
  
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Labour", 
  });

  const { mutate, isError, error } = useRegisterUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleUserType = () => {
    setFormData((prevData) => ({
      ...prevData,
      userType: prevData.userType === "Labour" ? "Employer" : "Labour",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    mutate(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold text-purple-600 absolute top-8 left-10">
        Labour Link
      </h1>

      {/* Reduced width and overall size */}
      <div className="bg-white shadow-md rounded-xl p-4 w-[20rem] h-[auto]">
        <h2 className="text-xl font-semibold mb-3">
          <span className="bg-yellow-300 px-1 font-bold rounded">Reg</span>ister
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
           
          
          </div>

          <div>
            <label className="block text-xs font-medium">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium">Password*</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium">Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full p-1 text-xs border rounded-md"
              required
            />
          </div>

          {/* Toggle Button for UserType */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">User Type: {formData.userType}</span>
            <button
              type="button"
              onClick={toggleUserType}
              className="bg-gray-300 w-12 h-6 rounded-full flex items-center transition duration-300 ease-in-out p-1"
            >
              <div
                className={`w-5 h-5 bg-blue-500 rounded-full transform transition duration-300 ease-in-out ${
                  formData.userType === "Employer" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white p-1 rounded-md w-full text-sm hover:bg-purple-700 disabled:bg-purple-400"
          >
            Confirm
          </button>

          {isError && <p className="text-red-500 text-xs mt-2">{error?.message}</p>}
        </form>

        <p className="mt-3 text-xs text-center">
          Already have an account? {" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;