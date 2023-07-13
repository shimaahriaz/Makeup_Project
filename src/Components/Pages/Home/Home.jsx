import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaShoppingBasket } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {BsChatHeart} from 'react-icons/bs';
import {CiBadgeDollar} from 'react-icons/ci';
import imag2 from "../../../images/elegant-skin-care.jpg";
import img3 from "./img2.jpg";
import imag3 from "../../../images/natural-handmade-soap.jpg";
import imag from "../../../images/beautiful-still-life-with-herbal-medicine.jpg";
import img4 from "../../../images/arrangement-skin.jpg";
import img1 from "../../../images/eucalyptus-background.jpg";
import img5 from "../../../images/top-view-argan-oil-arrangement_23-2148955845.jpg";
import img6 from "../../../images/img6.jpg";
import img7 from "../../../images/flat-lay-arrangement-argan-oil-care-product.jpg";
import img13 from "../../../images/img13.jpg";
import img14 from "../../../images/img14.jpg";
import img15 from "../../../images/img15.jpg";
import img16 from "../../../images/img16.jpg";
import img17 from "../../../images/img17.jpg";
import img18 from "../../../images/img22.jpg";
import img19 from "../../../images/img19.jpg";
import img20 from "../../../images/img20.jpg";
import "./Home.css";


const Home = (props) => {
  const [products, setProducts] = useState([]);
  const productList = products.slice(90, 98);
  const navigate = useNavigate();
  const [arrayItems, setArrayItaems] = useState([
    {
      image: img3,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
    {
      image: imag2,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
    {
      image: img6,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
  ]);

  const [makeup, setMakuep]= useState([
    {img: img13},
    {img: img14},
    {img: img15},
    {img: img16},
    {img: img17},
    {img: img18},
    {img: img19},
    {img: img20},
  ])

  async function showData() {
    try {
      let result = await axios.get("newProducts.json");
      setProducts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    showData();
  }, []);


  function goToShop() {
    navigate("/shop");
  }

  function goToBlog() {
    navigate("/blog");
  }

  function goToDetails(id){
    navigate(`/details?id=${id}`)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  return (
    <>
      <Carousel>
        {arrayItems.map((item, index) => (
          <Carousel.Item key={index} className="">
            <div
              className="cover"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="container items-items d-flex align-items-center h-100">
                <div className="w-50 text-home">
                  <h1>{item.h1}</h1>
                  <p className="text-black-50">{item.p}</p>
                  <div className="fw-bold mt-4">
                    <button onClick={goToShop} className="btn btnHome">
                      {item.a}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container">
        <div className="textHome d-flex justify-content-between align-items-center">
          <h2 className="beautyHome">Clean Beauty</h2>
          <button onClick={goToShop} className="btn btnHome">
            See More
          </button>
        </div>
      </div>
      <section className="sectionHome">
        <div className="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {productList.map((item, index) => (
              <div className="col-md-3">
                <div className="card cardHome h-100">
                  <div className="box-home-img">
                    <span className="heart_home" onClick={()=> goToDetails(item.id)}>
                      <AiTwotoneHeart className=" fs-4" />
                    </span>
                    <img onClick={()=> goToDetails(item.id)}
                      src={item.image_link}
                      key={item.id}
                      className="card-img-top img-blog img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="brandImgHome">
                      {item.category ? item.category : "Shawdo"}
                    </h6>

                    <p className="descImg-Home">
                      {item.description
                        ? item.description
                        : "Different because of its smooth, comfortable feel."}
                    </p>
                    <div className=" d-flex justify-content-between align-items-center">
                      <div className="priceShop">
                        <h4 className="priceHome">
                          {item.price + item.price_sign? item.price + item.price_sign : "10$"}
                        </h4>
                        <p className="circlePrice"></p>
                      </div>
                      <span className="icon-shopHome" onClick={()=> goToDetails(item.id)}>
                        <FaShoppingBasket className=" fs-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title_home">
                <h2>Retail Products</h2>
                <p>
                  Cosmetic lines created for the love of what is natural. Lines
                  include cosmetics for face, body and hair care, everything you
                  need, regardless of age.
                </p>
                <p onClick={goToShop} className="arrowRight_home">
                  Find More
                  <span>
                    <AiOutlineArrowRight className="fs-4 ms-1" />
                  </span>
                </p>
                <p className="line-home"></p>
              </div>
            </div>
            <div class="col-lg-6">
              <div className="img_home">
                <img src={img7} class="img-fluid rounded-start" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="naturel-section">
        <div className="container">
          <div className=" col-lg-6 text_meakup">
            <h2 className="">Natural makeup products, step by step</h2>
            <p>
              Made from natural ingredients: Natural makeup products are made
              from natural ingredients like plant extracts, minerals, and oils.
              These ingredients are generally considered to be safe and gentle
              on the skin.
            </p>
          </div>
          <div className="row g-3 align-items-center mt-4">
            <div className="col-lg-4">
              <div className="img-natural">
                <img src={img5} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-natural">
                <p>
                  Free from harsh chemicals: Natural makeup products are free
                  from harsh chemicals like parabens, sulfates, and synthetic
                  fragrances. These chemicals can irritate the skin and cause
                  allergic reactions.
                </p>
                <p onClick={goToBlog} className="read_more">
                  Read More
                  <span>
                    <AiOutlineArrowRight className="fs-4 ms-1" />
                  </span>
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="img-natural">
                <img src={imag3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="img-natural">
                <img src={imag} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="img-natural">
                <img src={img4} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="img-natural">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 d-flex mb-5">
              
                <div className="circleIcon_home">
                  <p>
                    <HiOutlineShoppingCart className="icone_shopingcart" />
                  </p>
                </div>
                <div className="adventages_us">
                  <h4>Delivery</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, dignissimos!
                  </p>
                </div>
              </div>
          
			<div className="col-lg-4 d-flex mb-5">
             
                <div className="circleIcon_home">
                  <p>
                    <BsChatHeart className="icone_shopingcart" />
                  </p>
                </div>
                <div className="adventages_us">
                  <h4>Products</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, dignissimos!
                  </p>
                </div>
              </div>
            
			<div className="col-lg-4 d-flex mb-5">
              
                <div className="circleIcon_home">
                  <p>
                    <CiBadgeDollar className="icone_shopingcart" />
                  </p>
                </div>
                <div className="adventages_us">
                  <h4>Payments</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, dignissimos!
                  </p>
                </div>
             
            </div>
          </div>
        </div>
      </section>
      <section className="titlemakeup-home">
          <div className="title-home">
          <h2>"Celebrate Your Natural Beauty with Natural Makeup"</h2>
        </div>
    

        <div className= 'row align-items-center'>
          {makeup.map((img,index)=>
          <div className= 'col-lg-3 px-0 img-footer' key= {index}>
            <img src={img.img} className="img-fluid" alt= ""/>
          </div>
          )}
        </div>
        <div className="title-home">
          <h2>"Thanks For Watching"</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
