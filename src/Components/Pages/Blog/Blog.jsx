import React from 'react';
import axios from 'axios';
import {PiPlayLight} from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import img from '../../../images/beautiful.jpg';
import imagOil from '../../../images/make-up-beauty-products.jpg';
import imgSkin from '../../../images/top-view-tropical.jpg';
import imgSkine from '../../../images/nail-polish.jpg';
import video1 from '../../../images/video1.mp4';
import video2 from '../../../images/video2.mp4';
import video3 from '../../../images/video3.mp4';
import './Blog.css';

const Blog = (props) => {
  console.log(props)
	const navigate= useNavigate();
	const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 8;

  
  function goToShop(){
      navigate("/shop")
	}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);



  async function showData() {
    try {
      let result = await axios.get("newProducts.json"); //?%20limit=20&offset=50
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    showData();
  });

  function goToDetails(id) {
    navigate(`/details?id=${id}`)
  }

  const totalItemsCount = data.length;
  const pageRangeDisplayed = 5;
  const totalPageCount = Math.ceil(totalItemsCount / itemsPerPage);

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  }

  
    return (
      <>
        <div className="bgBlog">
          <div className="container">
            <div className="blog">
              <div className="head-blog">
             
                <h1>WE PROVIDE QUILTY</h1>
                <p className="line-blog"></p>
                <p className="text-center">See Our Project</p>
              </div>
            </div>

            <div className="row row_blog justify-content-center align-items-center">
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video1}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video2}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video3}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="store-blog">
          <div className="container">
            <div className="row row-blog">
              <div className="col-lg-4 m-auto px-0">
                <img
                  src= {img}
                  className="img-fluid"
                  alt="images"
                />
              </div>
            </div>
            <div className="row row-blog">
              <div className="col-lg-4 px-0">
                <img
                  src= {imagOil}
                  className="img-fluid"
                  alt="images"
                />
              </div>
              <div className="col-lg-4 px-0">
                <img
                  src= {imgSkin}
                  className="img-fluid"
                  alt="images"
                />
              </div>
              <div className="col-lg-4 px-0">
                <img
                  src= {imgSkine}
                  className="img-fluid"
                  alt="images"
                />
              </div>
             
            </div>
          </div>
        </div>

        <div className="container">
          <div className="textBlog-container">
            <h2 className="be-unique">Be Unique With Wavey</h2>
            <p className="textp-blog">
              If you are looking for makeup that combines beauty and health,
              then the natural makeup product is the ideal choice for you. This
              type of makeup is characterized by the use of natural and healthy
              materials for the skin, and it is specially made to improve the
              appearance of the skin and nourish it naturally.Natural makeup
              products contain ingredients such as vegetable oils, vitamins,
              minerals and amino acids that nourish the skin and help it
              maintain its natural moisture. It also contains natural colors
              that suit the skin tone and enhance its natural appearance.
              Natural makeup products are available at reasonable prices and
              variety, and can be found in beauty stores and specialty markets.
              In addition to their beauty and health, these products are easy to
              use and give you a great look in just a few minutes. If you want
              to experiment with natural makeup, you can search for products
              that suit your skin and your own taste, and go try them on. And do
              not forget to follow the correct instructions for applying makeup
              and go for great results and healthy and radiant skin
            </p>
          </div>
        </div>
        <div className="bgBlogText">
          <div className="container">
            <div className="col">
              <div className="text-blog">
                <h2 className="be-uniqueh2">Be Unique With Wavey</h2>
                <button onClick={goToShop} className="btn btn-explore">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bgBlogImg">
          <div className="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
              {currentItems.map((item, index) => (
                <div className="col-md-3" key={item.id}>
                <div className="card  card-blog h-100">
                <div className="box-blog-img">
                  <img onClick={()=>goToDetails(item.id)} src={item.image_link} key={item.id} class="card-img-top img-blog img-fluid" alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="brandImg-blog ">{item.name}</h5>
                    
                    <p className="descImg-blog">
                        {item.description
                          ? item.description
                          : "Different because of its smooth, comfortable feel. Moderate coverage in a remarkable range of shades, from cream to pearl. Every one packed with rich emollients."}
                      </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <Pagination
              activePage={activePage}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={pageRangeDisplayed}
              totalPageCount={totalPageCount}
              onChange={handlePageChange}
            />
          </div>
        </div>
        
          
        
        
      </>
    );
}



export default Blog;