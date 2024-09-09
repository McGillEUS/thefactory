import React, { useState } from "react";
import { LogIn, Menu, X } from "lucide-react"; // Import the X (close) icon
import { Link } from "react-router-dom";

type NavBarProps = {
  toggleDrawer: () => void;
};

function NavBar({ toggleDrawer }: NavBarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleDrawer();
  };

  return (
    <>
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

      <nav className="h-20 bg-factory-blue hidden lg:flex justify-around items-center font-medium">
        <div className="flex gap-3 items-end text-white">
          <img
            src="/logo/factory_logo_inline_white.png"
            alt="Factory Logo"
            className="h-12"
          />
          <Link to="/">Home</Link>
          <Link to="/office-hours">Office Hours</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/inventory">Inventory</Link>
        </div>

        <div className="gap-5 flex items-center">
          <button className="bg-factory-green py-2 px-3 rounded-md">
            Reach out to us
          </button>

          <div className="flex items-center gap-2 text-white hover:text-factory-green">
            <LogIn color="white" />
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
