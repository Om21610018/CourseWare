import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  // Custom hook to listen to route changes
  const useIsHomePage = () => {
    const location = useLocation();
    useEffect(() => {
      setIsHomePage(
        location.pathname === "/" || location.pathname === "/about"
      );
    }, [location]);
  };

  // Call custom hook
  useIsHomePage();

  return (
    < >
      <div className=" bg-gray-100">
      <Header />
      <ToastContainer />
      <div className="w-10/12 mx-auto bg-gray-100">
        <Outlet />
      </div>
      {isHomePage && <Footer />}
      </div>
    </>
  );
};

export default App;
