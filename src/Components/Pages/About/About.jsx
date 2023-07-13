/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './natural-selfcare-products-mockup_23-2149156147.jpg';
import './About.css';


const About = () => {
  
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  return (
    <>
    
      <div className='bgColor'>
       <div className='about'>
      
        <h1>About Us</h1>
       </div>
        <section className='section_about'>
          <div className='container'>
            <div className='row row-about justify-content-center align-items-center'>
              <div className='about_us col-lg-6'>
                <p className=' mb-4'>Natural make-up provides a beautiful and healthy
                  look to the skin, and helps nourish and moisturize the skin naturally.
                  The natural ingredients on which natural makeup depends
                  include many natural elements such as vegetable oils, waxes, herbs, vitamins, minerals, flowers, fruits, and vegetables.
                  .</p>
                <p className=' '>These ingredients are used to make mascara, lipstick, foundation, eye shadow, and other cosmetic products.
                  Natural makeup does not cause any damage to the skin, and it can be used on a daily basis without worrying about skin irritation or allergy. It is important to note that natural makeup does not necessarily mean that it does not contain any chemicals, as some natural chemicals may be used in the manufacture of this type of makeup</p>
             </div>
              <div className='col-lg-6 image'>
                <img src={img} className='img-fluid rounded-8' alt='image' />
              </div>
            </div>
          </div>
        </section>

        <div className='circle_offer'>
              <h2 className= ''><span className='circle-textOffer'></span><span className='circle-textOffer'></span>What We Offer<span className='circle-textOffer'></span><span className='circle-textOffer'></span></h2>
            </div>
        <section className='section-offer'>
          <div className='container'>
            <div className='row offer justify-content-center align-items-center'>
              <div className='col-lg-6 px-0'>
                <div className='image-offer'>
                  <img src= "https://www.thestatesman.com/wp-content/uploads/2022/02/essential-oil-as-perfume-istock-1-768x512.jpg" className='img-fluid' alt='images' />
                </div>
              </div>
              <div className='col-lg-6 text-offer'>
                <h6 className='number-about'>1</h6>
                <h5 className='title-about'>DESIGNED FOR DETAIL</h5>
                <p className='desc-about'>These ingredients are used to make mascara, lipstick, foundation, eye shadow, and other cosmetic products.
                  Natural makeup does not cause any damage to the skin</p>
              </div>
               <div className='col-lg-6 text-offer'>
                <h6 className='number-about'>2</h6>
                <h5 className='title-about'>DESIGNED FOR DETAIL</h5>
                <p className='desc-about'>These ingredients are used to make mascara, lipstick, foundation, eye shadow, and other cosmetic products.
                  Natural makeup does not cause any damage to the skin</p>
              </div>
              <div className='col-lg-6 px-0'>
                <div className='image-offer'>
                  <img src= "https://img.freepik.com/free-photo/high-angle-phytotherapy-products-assortment_23-2149339769.jpg?size=626&ext=jpg&uid=R82057442&ga=GA1.2.412059507.1683788126&semt=ais" className='img-fluid' alt='images' />
                </div>
              </div>
            <div className='col-lg-6 px-0'>
                <div className='image-offer'>
                  <img src= "https://img.freepik.com/free-photo/front-view-healthy-argan-oil-arrangement_23-2148989091.jpg?size=626&ext=jpg&uid=R82057442&ga=GA1.2.412059507.1683788126&semt=ais" className='img-fluid' alt='images' />
                </div>
              </div>
              <div className='col-lg-6 text-offer'>
                <h6 className='number-about'>3</h6>
                <h5 className='title-about'>DESIGNED FOR DETAIL</h5>
                <p className='desc-about'>These ingredients are used to make mascara, lipstick, foundation, eye shadow, and other cosmetic products.
                  Natural makeup does not cause any damage to the skin</p>
              </div>
             </div>
           </div> 
        </section>
      </div>
    </>
  )

}


export default About;