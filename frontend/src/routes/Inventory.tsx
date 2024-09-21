import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { LoginContext } from "../Contexts/LoginContext";



function Inventory() {
  const loginContext = useContext(LoginContext); // Now properly typed

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token, redirect to login
      navigate("/login");
    } else {
      try {
        // Decode token and check expiration
        const decodedToken = jwtDecode(token); // Correct usage of jwtDecode
        const currentTime = Date.now() / 1000; // Current time in seconds

        if ((decodedToken as { exp: number }).exp < currentTime) {
          // Token expired, redirect to login
          localStorage.removeItem("token"); // Remove invalid token
          navigate("/login");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        // In case the token is invalid, redirect to login
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <div>
      <h1>Inventory Page</h1>
      {/* Display content based on login status */}
      {loginContext?.isLoggedIn ? (
        <div>
          {/* Add your inventory content here */}
          <p>You ARE logged in</p>
        </div>
      ) : (
        <p>You are NOT logged in</p>
      )}
    </div>
  );
}

export default Inventory;
