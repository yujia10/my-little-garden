import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { TbPlant2 } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import './navigation.style.scss'

function Navigation() {
  const [showLinks, setShowLinks] = useState(false);

  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const toggleLinks = ()=>{
    setShowLinks(!showLinks)
  }

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }else{
      linksContainerRef.current.style.height ='0px';
    }
  },[showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/succulents" className="logo">
            <TbPlant2 />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <div className="links" ref={linksRef}>
            <Link to="/succulents" className="nav-link">
              SUCCULENTS
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link to="/caring-tips" className="nav-link">
              CARING TIPS
            </Link>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
          </div>
        </div>

        <div className="social-icons">
          <a href="#">
            <MdEmail />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navigation;
