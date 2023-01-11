import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Devs from "../pages/AdditionalPages/Devs";
import ProtectedRoutes from "./ProtectedRoutes";
import Project from "../pages/AdditionalPages/Project";
import Faq from "../pages/AdditionalPages/FAQ";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/devs" element={<Devs />} />
      <Route path="/project" element={<Project />} />
      <Route path="/faq" element={<Faq />} />

      <Route path="/" element={<ProtectedRoutes />}>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
