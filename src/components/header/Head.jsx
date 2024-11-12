import { Link, NavLink } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";

import { useState } from 'react';
import styles from './head.module.css';

function Head() {
  // const { counter, setcount } = useState(0);
 
    
    const [show, setshow] = useState(false);

  
    const toggleMenu = () => {
      if(show===false){
        setshow(true)
      }else{
        setshow(false)
      }
    };
  return (
    <>
      <div className="container-flued bg-light bg-gradient shadow">
        <nav className="nav navbar container">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <img
                // className="{`${styles.logoimg}`}"
                style={{ height: '60px', width: '80px' }}
                src="https://cdn.pixabay.com/photo/2023/05/30/16/57/taco-8029161_1280.png"
                alt="logo"
              />
            </Link>
          </li>
          {show && (
          <div  className={`${styles.navitems}`}>
            <ul
              className="nav d-flex align-item-center justify-content-center"
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shoping">
                  Shoping
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <NavLink className="nav-link fs-3 pt-0" to="/Addcart">
                <TiShoppingCart />
                <span className="fs-5">0</span>
              </NavLink>
              <li></li>
             
            </ul>
          </div>
          )}
          <span className={`${styles.menubtn}`} onClick={toggleMenu}>
        {show ? < FaXmark /> : < RxHamburgerMenu />}
          
          </span>
          
        </nav>
      </div>
    </>
  );
}
export default Head;
