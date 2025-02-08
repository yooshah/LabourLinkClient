import { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing react-router-dom
import Home from './Components/Admin/Home';
import Users from './Pages/Admin/Users';
import Skills from './Pages/Admin/Skills';
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>  {/* Wrapping the app with BrowserRouter */}
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" element={<Home/>} />

          {/* Route for the Users component */}
          {/* <Route path="/" element={<Users />} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
