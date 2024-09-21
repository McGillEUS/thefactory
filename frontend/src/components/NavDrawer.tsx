import { LogIn } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavDrawerProps = {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
};

const NavDrawer = (props: NavDrawerProps) => {
  return (
    <div
      className={`flex flex-col pb-8 text-white items-center justify-between font-museo-moderno text-[25px] text-cream font-black fixed top-0 left-0 w-96 h-full bg-factory-blue transform ${
        props.isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col gap-7 items-center">
        <img
          src="/logo/factory_logo_inline_white.png"
          alt=""
          className="h-12 mt-10"
        />
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#57bf94" : "white",
          })}
          onClick={props.toggleDrawer}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/office-hours"
          style={({ isActive }) => ({
            color: isActive ? "#57bf94" : "white",
          })}
          onClick={props.toggleDrawer}
          end
        >
          Office Hours
        </NavLink>
        <NavLink
          to="/workshops"
          style={({ isActive }) => ({
            color: isActive ? "#57bf94" : "white",
          })}
          onClick={props.toggleDrawer}
          end
        >
          Workshops
        </NavLink>
        <NavLink
          to="/our-lab"
          style={({ isActive }) => ({
            color: isActive ? "#57bf94" : "white",
          })}
          onClick={props.toggleDrawer}
          end
        >
          Our Lab
        </NavLink>
      </div>

      <div className="gap-5 flex flex-col items-center">
        <div className="flex items-center gap-2 text-white">
          <a href="#">Contact us</a>
        </div>
        <button className="bg-factory-green py-2 px-7 rounded-xl text-white flex gap-2 hover:bg-factory-dark-green items-center">
          <LogIn color="white" />
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default NavDrawer;
