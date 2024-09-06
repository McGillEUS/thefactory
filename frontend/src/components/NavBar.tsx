import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className="h-20 bg-factory-blue flex justify-around items-center font-medium">
      <div className=" flex gap-3 items-end text-white"> 
        <img src="/logo/factory_logo_inline_white.png" alt="" className="h-12"/>
        <Link to="/">Home</Link>
        <Link to="/office-hours">Office Hours</Link>
        <Link to="/workshops" >Workshops</Link>
        <Link to="/resources" >Resources</Link>
        <Link to="/inventory" >Inventory</Link>
       
      </div>

      <button className="bg-factory-green py-2 px-3 rounded-md">
          Reach out to us
        </button>


    </div>

  )

}

export default NavBar;
