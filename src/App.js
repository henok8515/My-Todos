import React from "react";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
function App() {
  // const location = useLocation();
  // console.log(location);
  return (
    <div>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
