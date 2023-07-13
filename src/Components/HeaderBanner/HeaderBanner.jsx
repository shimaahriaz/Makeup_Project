import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imag2 from './img.jpg';
import img3 from './img2.jpg';
import img from './img3.jpg';
import style from './HeaderBanner.css';


const HeaderBanner = () => {
	const [arrayItems, setArrayItaems] = useState([
		{
			image: img3 ,
			h1: "The new linehup you well swear by for dullness, drayness and breakouts",
			p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
			a: "See more"
    },
		{
			image: imag2,
			h1: "The new linehup you well swear by for dullness, drayness and breakouts",
			p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
			a: "See more"
    },
		{
			image: "https://img.freepik.com/premium-photo/banner-with-pipettes-smears-drops-various-cosmetic-products-top-view-beige-background-with-copy-space_150893-2980.jpg?size=626&ext=jpg&uid=R82057442&ga=GA1.2.412059507.1683788126&semt=ais",
			h1: "The new linehup you well swear by for dullness, drayness and breakouts",
	    p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
			a: "See more"
    },
	])
	

return (


	<Carousel>
		{arrayItems.map((item, index)=>
			<Carousel.Item  key= {index} className= "">
			<div className=' cover ' style= {{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
				<div className='container items-items d-flex align-items-center h-100'>
				 <div className='w-50'>
				  <h1>{item.h1}</h1>
				  <p className='text-black-50'>{item.p}</p>
				  <div className= " fw-bold mt-4">
				 <a href='#' className=' shop  '>{item.a}</a>
				</div>	
			  </div>
			  
			 </div>
			</div>
			{/* <Carousel.Caption>
				
			</Carousel.Caption> */}
		</Carousel.Item>
		
		)}
		</Carousel>
);
}




export default HeaderBanner;