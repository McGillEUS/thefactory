import React, { useState, useContext } from "react";
import { LogIn, Menu, X } from "lucide-react"; // Import the X (close) icon
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { LoginContext } from "../Contexts/LoginContext";

type NavBarProps = {
  toggleDrawer: () => void;
};

function NavBar({ toggleDrawer }: NavBarProps) {
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleDrawer();
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    // Update login state to false
    setLoggedIn(false);

    // Redirect to the home page
    navigate("/");
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="lg:hidden bg-factory-blue h-20 flex justify-between py-3 pl-9">
        <img
          src="/logo/factory_logo_inline_white.png"
          alt="Factory Logo"
          className="h-12"
        />

        <div className="lg:hidden cursor-pointer bg-dark-brown p-2 mr-4">
          <button
            onClick={handleToggleDrawer}
            className="transition-transform duration-1000 ease-in-out"
          >
            {isDrawerOpen ? (
              <X size={44} color="#ffffff" />
            ) : (
              <Menu size={44} color="#ffffff" />
            )}
          </button>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="h-24 bg-factory-blue hidden lg:flex justify-between px-12 font-medium pt-1">
        <div className="flex gap-3 text-white items-center h-full">
          <img src="/factory_logo_512x512.png" alt="" className="w-14 mb-4" />
          <h1 className="text-white text-4xl font-medium">The Factory</h1>
          <div className="flex gap-3 font-medium mt-1 ml-3">
            <Link
              to="/"
              className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
            >
              Home
            </Link>
            <Link
              to="/office-hours"
              className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
            >
              Office Hours
            </Link>
            <Link
              to="/workshops"
              className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
            >
              Workshops
            </Link>
            <Link
              to="/inventory"
              className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
            >
              Inventory
            </Link>
          </div>
        </div>
        <div className="gap-5 flex items-center">
          <div className="flex items-center gap-2 text-white hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]">
            <a href="#">Contact us</a>
          </div>
          <button
            className="bg-factory-green py-2 px-7 rounded-xl text-white flex gap-2 hover:bg-factory-dark-green"
            onClick={isLoggedIn ? handleLogout : undefined} // Attach the logout handler
          >
            {isLoggedIn ? (
              <p>Log out</p>
            ) : (
              <>
                <LogIn color="white" />
                <Link to="/login">Login</Link>
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
