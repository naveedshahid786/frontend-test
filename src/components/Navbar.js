import React from 'react';
    
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-dark text-white">
      <h3 className="ml-5">Dynamic Webpage</h3>
        <button className="btn btn-outline-success mr-5 my-2 my-sm-0" >Login</button>
    </nav>
  );
};
export default Navbar;