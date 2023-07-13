import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import About from "../Pages/About/About";
import Router from "../Routs/Router";
import Footer from "../Footer/Footer";
import Home from "../Pages/Home/Home";
import Blog from "./../Pages/Blog/Blog";
import Shop from "./../Pages/Shop/Shop";
import Contact from "./../Pages/Contact/Contact";
import Faqs from "../Pages/FAQ`S/Faqs";
import Notfound from "../Pages/Notfound/Notfound";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Details from "./../Details/Details";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

function App() {
  const [userData, setUserData] = useState(null);

  function informUserData() {
    const userDataIncode = localStorage.getItem("userToken");
    // const userDataDecode = jwtDecode(userDataIncode);

    setUserData(userDataIncode);
    // console.log(userDataDecode.first_name);
    // console.log(userDataDecode.last_name);
    // console.log(userDataDecode.email);
    // console.log(userDataDecode);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken") ) {
      informUserData();
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar userData={userData} setUserData= {setUserData}/>

      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="blog" element= {<Blog />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="faq`s" element={<Faqs />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route
          path="login"
          element={<Login informUserData={informUserData}/>} 
        ></Route>
        <Route path="details" element={<Details />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
