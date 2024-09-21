import { useContext } from "react";
import { LogIn, Menu, X } from "lucide-react"; // Import the X (close) icon
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { LoginContext } from "../Contexts/LoginContext";
import { NavLink } from "react-router-dom";

type NavBarProps = {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
};

function NavBar(props: NavBarProps) {
  const loginContext = useContext(LoginContext); // Now properly typed

  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleToggleDrawer = () => {
    props.toggleDrawer();
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    if (loginContext) {
      loginContext.setLoggedIn(false); // Update login state via context
      navigate("/");
    }
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
            {props.isDrawerOpen ? (
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
            {/* <Link
              to="/"
              className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
            >
              Home

            </Link> */}
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "undefined",
                textDecorationColor: isActive ? "#57bf94" : "transparent",
                textDecorationThickness: isActive ? "4px" : "none",
                textUnderlineOffset: isActive ? "4px" : "none",
              })}
              // className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/office-hours"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "undefined",
                textDecorationColor: isActive ? "#57bf94" : "transparent",
                textDecorationThickness: isActive ? "4px" : "none",
                textUnderlineOffset: isActive ? "4px" : "none",
              })}
              // className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
              end
            >
              Office Hours
            </NavLink>

            <NavLink
              to="/workshops"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "undefined",
                textDecorationColor: isActive ? "#57bf94" : "transparent",
                textDecorationThickness: isActive ? "4px" : "none",
                textUnderlineOffset: isActive ? "4px" : "none",
              })}
              // className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
              end
            >
              Workshops
            </NavLink>
            <NavLink
              to="/our-lab"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "undefined",
                textDecorationColor: isActive ? "#57bf94" : "transparent",
                textDecorationThickness: isActive ? "4px" : "none",
                textUnderlineOffset: isActive ? "4px" : "none",
              })}
              // className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
              end
            >
              Our Lab
            </NavLink>

            {
              <>
                {loginContext?.isLoggedIn && (
                  <NavLink
                    to="/members"
                    style={({ isActive }) => ({
                      textDecoration: isActive ? "underline" : "undefined",
                      textDecorationColor: isActive ? "#57bf94" : "transparent",
                      textDecorationThickness: isActive ? "4px" : "none",
                      textUnderlineOffset: isActive ? "4px" : "none",
                    })}
                  >
                    Members
                  </NavLink>
                )}
                {loginContext?.isLoggedIn && (
                  <NavLink
                    to="/inventory"
                    style={({ isActive }) => ({
                      textDecoration: isActive ? "underline" : "undefined",
                      textDecorationColor: isActive ? "#57bf94" : "transparent",
                      textDecorationThickness: isActive ? "4px" : "none",
                      textUnderlineOffset: isActive ? "4px" : "none",
                    })}
                    // className="hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]"
                    end
                  >
                    Inventory
                  </NavLink>
                )}
              </>
            }
          </div>
        </div>
        <div className="gap-5 flex items-center">
          <div className="flex items-center gap-2 text-white hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thefactory@mcgilleus.ca&su=Inquiry&body=Hello%20there!"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // For security reasons to prevent tab hijacking
            >
              Contact Us
            </a>
          </div>
          <button
            className="bg-factory-green py-2 px-7 rounded-xl text-white flex gap-2 hover:bg-factory-dark-green"
            onClick={loginContext?.isLoggedIn ? handleLogout : undefined} // Attach the logout handler
          >
            {loginContext?.isLoggedIn ? (
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
