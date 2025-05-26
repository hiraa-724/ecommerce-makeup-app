import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <AppRoutes />
    </>
  );
}

export default App;
