import React from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCounter,
  decrementCounter,
  decrementQuantity,
  increaseCounter,
  incrementCounter,
  incrementQuantity,
} from "../../Redux/Slice/Cart";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../images/beautiful-still.jpg";
import imag from "../../images/elegant-skin.jpg";
import "./Details.css";

const Details = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const counter = useSelector((state) => state.cart.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const [count, setCount] = useState(1);
  const [countQuintity, setCountQuintity] = useState(1);
  const [countHeart, setCountHeart] = useState(1);

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [search, setSearch] = useSearchParams();

  async function showData() {
    try {
      let result = await axios.get("newProducts.json");
      result = result.data.find((item) => item.id === +search.get("id"));
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  useEffect(() => {
    showData();
  });

  const handleAddToCart = () => {
    dispatch(addToCart({ ...data, quantity: countQuintity, counter: count }));
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const handleDecrementQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrementQuantity = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const isMinQuantity = count === 1;
  const isMaxQuantity = count === 5;

  const handleClickHeart = () => {
    if (countHeart > 0) {
      setCountHeart(countHeart - 1);
    } else {
      setCountHeart(countHeart + 1);
    }
  };

  const navigate = useNavigate();
  function goToAboutUs() {
    navigate("/about");
  }

  return (
    <>
      <div className="details-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="product-icons">
                <div className="icon-det">
                  <CiTwitter />
                  <IoLogoInstagram />
                  <FiFacebook />
                </div>
                <div className="img-details">
                  <img src={data.image_link} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 info-imgDetails ps-5 mt-5">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="price-details">
                  <span>Price: </span>
                  {data.price + "$"}
                </p>
                <div className="">
                  <button
                    className="btn mienus"
                    onClick={handleDecrementQuantity}
                    disabled={isMinQuantity}
                  >
                    -
                  </button>
                  <span className="number">{count}</span>
                  <button
                    className="btn plus"
                    onClick={handleIncrementQuantity}
                    disabled={isMaxQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div></div>
              {addedToCart && <p className="message">Item added to cart</p>}
              <button
                className="btn btn-info btn-addCart"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container my-5">
        <div className="row align-items-center justify-content-center pb-0">
          <div className="col-lg-6 details-info">
            <p>
              Cosmetic lines created for the love of what is natural. Lines
              include cosmetics for face, body and hair care, everything you
              need, regardless of age.
            </p>
            <button onClick={goToAboutUs}>Reed More</button>
          </div>
          <div className="col-lg-6 img-details px-0">
            <img src={imag} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row align-items-center justify-content-center pt-0">
          <div className="col-lg-6 img-details px-0">
            <img src={img} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 details-info ">
            <p>
             
              Cosmetic lines created for the love of what is natural. Lines
              include cosmetics for face, body and hair care, everything you
              need, regardless of age.
            </p>
            <p>
              Cosmetic lines created for the love of what is natural. Lines
              include cosmetics for face, body and hair care, everything you
              need, regardless of age.
            </p>
            <button onClick={goToAboutUs}>Reed More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
