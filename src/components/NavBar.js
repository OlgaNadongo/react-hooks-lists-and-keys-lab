import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

   const linkItems=links.map((link, index)=>{
     return(
      <a href={'#'+ link} key={index}>{link}</a>
      )
   })

  return (
    
        <nav>
        {/* display an <a> tag for each link here */}
          {linkItems}
           
       </nav>
      )
}

export default NavBar;
