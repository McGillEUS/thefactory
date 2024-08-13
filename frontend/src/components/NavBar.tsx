function NavBar() {
  return (
    <div className="h-20 bg-factory-blue flex justify-around items-center font-medium">
      <div className=" flex gap-3 items-end text-white"> 
        <img src="/logo/factory_logo_inline_white.png" alt="" className="h-12"/>
        <a href="">HOME</a>
        <a href="">OFFICE HOURS</a>
        <a href="">WORKSHOPS</a>
      </div>

      <button className="bg-factory-green py-2 px-3 rounded-md">
          Reach out to us
        </button>


    </div>

  )

}

export default NavBar;
