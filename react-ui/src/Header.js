import React from 'react';
import { Link } from "react-router-dom";
function Header() {
    return (
     
        <header class="header-area header-sticky">
           <div class="container">
               <div class="row">
                   <div class="col-12">
                       <nav class="main-nav">
                        <Link class="logo" to={{ pathname: "/"}}>Sidra's Kitchen</Link>
                           
                           <ul class="nav">
                               <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                               <li class="submenu">
                                   <a href="javascript:;">Menu</a>
                                   <ul>
                                       {/* <li><Link to={{ pathname: "/about"}}>Cakes</Link></li>
                                       <li><Link to={{ pathname: "/products"}}>Cookies</Link></li>
                                       <li><Link to={{ pathname: "/single-product"}}>Pasta</Link></li> */}
                                       <li><Link to={{ pathname: "/#cakes"}}>Cakes</Link></li>
                                       <li><Link to={{ pathname: "/#cookies"}}>Cookies</Link></li>
                                       <li><Link to={{ pathname: "/#pasta"}}>Pasta</Link></li>
                                   </ul>
                               </li>
                               <li class="scroll-to-section"><a href="#order">Order Now</a></li>
                               <li class="scroll-to-section"><a href="#contact">Contact Us</a></li>
                               <li class="scroll-to-section"><a href="#about">About</a></li>
                           </ul>        
                           <a class='menu-trigger'>
                               <span>Menu</span>
                           </a>
                         
                       </nav>
                   </div>
               </div>
           </div>
       </header>
      
       
    );
}

export default Header;