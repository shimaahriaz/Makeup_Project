import React, { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = (props) => {

  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
    localStorage.removeItem("userToken");
    props.setUserData(null)
  }

  function goToSearch() {
    navigate("/search");
  }


  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    if (!cart || !Array.isArray(cart)) {
      return "";
    }
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity || "";
    });
    return total;
  };




  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.navbar-nav li a');

    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
      });
    });
  }, []);

  



  return (
    <>
     
      <nav className="navbar navbar-expand-lg d-flex align-items-center fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"home"}>
            WAVEY<p className="text-nav">BEAUTY</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link me-4" aria-current="page" to={"home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link me-4" aria-current="page" to={"shop"}>
                  Shop
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link me-4"
                  aria-current="page"
                  to={"about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4" to={"blog"}>
                  Blog
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link me-4" to={"faq`s"}>
                  FAQ`S
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="d-flex align-items-center mb-0">
			          
			    <li className="circle serachIcone_nav" onClick={goToSearch}>
                <AiOutlineSearch className="icon" />
              </li>
              <li className="circle ms-3" onClick={() => navigate("/cart")}>
                <BsFillHandbagFill className="icon" />
                <p>{getTotalQuantity() || ""}</p>
              </li>
              {props.userData ? (
                <li
                  onClick={goToLogin}
                  className="circle ms-3 text-info-emphasis"
                >
                  <BiLogOutCircle className="icon" />
                 
                </li>
              ) : (
                <>
                  <li className="circle ms-3">
                    <Link to={"register"}>
                      <FaRegAddressCard className="icon" />
                    </Link>
                  </li>
                  <li className="circle ms-3">
                    <Link to={"login"}>
                      <BiLogInCircle className="icon" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
