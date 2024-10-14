import { useContext, useEffect } from "react";
import { LogIn, Menu, X } from "lucide-react"; // Import the X (close) icon
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { LoginContext } from "../Contexts/LoginContext";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode token

type NavBarProps = {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
};

function NavBar(props: NavBarProps) {
  const loginContext = useContext(LoginContext); // Access LoginContext
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Check token validity and update context on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode the token and check expiration
        const decodedToken = jwtDecode<{ exp: number }>(token); // Correct usage of jwtDecode
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          // Token expired, log out the user
          localStorage.removeItem("token");
          loginContext?.setLoggedIn(false); // Update context state
          navigate("/login"); // Redirect to login page
        } else {
          // Token is valid, ensure the user stays logged in
          loginContext?.setLoggedIn(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token"); // Remove invalid token
        loginContext?.setLoggedIn(false);
        navigate("/login"); // Redirect to login
      }
    } else {
      loginContext?.setLoggedIn(false); // No token, user is logged out
    }
  }, [loginContext, navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    if (loginContext) {
      loginContext.setLoggedIn(false); // Update login state
      navigate("/"); // Redirect to homepage
    }
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to login page
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
            onClick={props.toggleDrawer}
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#57bf94] underline decoration-[#57bf94] decoration-[3px] underline-offset-4"
                  : "text-white hover:text-[#57bf94] hover:underline hover:decoration-[#57bf94] hover:decoration-[3px] hover:underline-offset-4"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/office-hours"
              className={({ isActive }) =>
                isActive
                  ? "text-[#57bf94] underline decoration-[#57bf94] decoration-[3px] underline-offset-4"
                  : "text-white hover:text-[#57bf94] hover:underline hover:decoration-[#57bf94] hover:decoration-[3px] hover:underline-offset-4"
              }
            >
              Office Hours
            </NavLink>

            <NavLink
              to="/workshops"
              className={({ isActive }) =>
                isActive
                  ? "text-[#57bf94] underline decoration-[#57bf94] decoration-[3px] underline-offset-4"
                  : "text-white hover:text-[#57bf94] hover:underline hover:decoration-[#57bf94] hover:decoration-[3px] hover:underline-offset-4"
              }
            >
              Workshops
            </NavLink>

            <NavLink
              to="/our-lab"
              className={({ isActive }) =>
                isActive
                  ? "text-[#57bf94] underline decoration-[#57bf94] decoration-[3px] underline-offset-4"
                  : "text-white hover:text-[#57bf94] hover:underline hover:decoration-[#57bf94] hover:decoration-[3px] hover:underline-offset-4"
              }
            >
              Our Lab
            </NavLink>

            {/* Only show Members and Inventory links if logged in */}
            {loginContext?.isLoggedIn && (
              <>
                <NavLink to="/members" className="nav-link">
                  Members
                </NavLink>
                <NavLink to="/inventory" className="nav-link">
                  Inventory
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div className="gap-5 flex items-center">
          <div className="flex items-center gap-2 text-white hover:underline underline-offset-4 decoration-[3px] decoration-[#57bf94]">
            <a
              href="mailto:thefactory@mcgilleus.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
          <button
            className="bg-factory-green py-2 px-7 rounded-xl text-white flex gap-2 hover:bg-factory-dark-green"
            onClick={loginContext?.isLoggedIn ? handleLogout : handleLoginClick} // Attach the correct handler
          >
            {loginContext?.isLoggedIn ? (
              <p>Log out</p>
            ) : (
              <>
                <LogIn color="white" />
                <p>Login</p>
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
