import { Link } from "react-router-dom";

type NavDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const NavDrawer = (props: NavDrawerProps) => {
  return (
    <div
      className={`flex flex-col text-white items-center justify-start gap-7 font-museo-moderno text-[27px] text-cream font-black fixed top-0 left-0 w-96 h-full bg-factory-blue transform ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <img
        src="/logo/factory_logo_inline_white.png"
        alt=""
        className="h-12 mt-10"
      />
      <Link to="/" onClick={props.toggleDrawer}>
        Home
      </Link>
      <Link to="/office-hours" onClick={props.toggleDrawer}>
        Office Hours
      </Link>

      <Link to="/workshops">Workshops</Link>

      <Link to="/inventory" onClick={props.toggleDrawer}>
        Inventory
      </Link>
    </div>
  );
};

export default NavDrawer;
