import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";


const Header = ({ auth, logout }) => {
  
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 450
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleClick = (e) => {
    const header = document.querySelector('.containers');
    const width = window.innerWidth
    const nav = document.querySelector('.n-right')
    const wrap = document.querySelector('.n-wrapper')
    const gue = document.querySelector(".guest")
    const str = document.querySelector(".started")
    
    header.classList.toggle('active')
    if (width <= 768) {
      nav.classList.toggle('display')
      wrap.classList.toggle('height')
      gue.classList.toggle("display")
      str.classList.toggle("hide")
    }
  };

  const guestLinks = (
    <div style={{ display: "flex", gap: "20px" }}>
      <button className="btn login">
        <Link className="auth" to="/">
          Login
        </Link>
      </button>
      <button className="btn btn-primary">
        <Link className="auth" to="/" style={{ color: '#fff'}}>
          Get Started
        </Link>
      </button>
    </div>
  );

  return (
    <div className="header-section p-3">
      <button className="started btn btn-primary">
        <Link className="auth" to="/" style={{ color: '#fff'}}>
          Get Started
        </Link>
      </button>
      <div className="n-wrapper">
        <div className="hamburger" style={{ position: "absolute", right: "20px", top: '0px' }}>
          <div className="containers" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 200 200"
            >
              <g strokeWidth="6.5" strokeLinecap="round">
                <path
                  d="M72 82.286h28.75"
                  fill="#000"
                  fillRule="evenodd"
                  stroke="#000"
                />
                <path
                  d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                  fill="none"
                  stroke="#000"
                />
                <path
                  d="M72 125.143h28.75"
                  fill="#000"
                  fillRule="evenodd"
                  stroke="#000"
                />
                <path
                  d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                  fill="none"
                  stroke="#000"
                />
                <path
                  d="M100.75 82.286h28.75"
                  fill="#000"
                  fillRule="evenodd"
                  stroke="#000"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#000"
                  fillRule="evenodd"
                  stroke="#000"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="n-left">
          <div className="n-name">
              <Link to='/'>
                <img src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/613e9ef6d25b70060cb305ca_fivetran-logo.fb5c1b9c.svg" alt="logo" />
              </Link>
          </div>
        </div>

        
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>
                <Link
                  className="navlinks"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className="navlinks"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="navlinks"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Connectors
                </Link>
              </li>
              <li>
                <Link
                  className="navlinks"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="navlinks"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="guest">
            {guestLinks}
        </div>
        

      </div>
      
    </div>
  );
};


export default Header;
