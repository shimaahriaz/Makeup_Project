import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { RxTwitterLogo } from 'react-icons/rx';
import { FaInstagram } from 'react-icons/fa';
import  './Footer.css'; 





const Footer = () => {
    return (
       <section className='section_footer'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-2 col-md-3 wavey_footer'>
                    <h1>Wavey</h1>
                    <p>BEAUTY</p>
                </div>
                <div className='col-lg-2 col-md-3 text_footer'>
                    <h6>About</h6>
                    <p>About Wavey</p>
                    <p>Careary</p>
                    <p>Stands social imact</p>
                    <p>Supplay chain </p>
                    <p>About Wavey</p>
                    <p>Sitemap</p>
                    <p>Globelsite</p>
                </div>
                <div className='col-lg-2 col-md-3 text_footer'>
                    <h6>About</h6>
                    <p>About Wavey</p>
                    <p>Careary</p>
                    <p>Stands social imact</p>
                    <p>Supplay chain</p>
                    <p>About Wavey</p>
                    <p>Sitemap</p>
                    <p>Globelsite</p>
                </div>
                <div className='col-lg-2 col-md-3 text_footer'>
                    <h6>Skincare</h6>
                    <p>makeup</p>
                    <p>skincare</p>
                    <h6 className='pt-4'>Stands social imact</h6>
                    <p>Supplay chain</p>
                    <p>About Wavey</p>
                    <p>Sitemap</p>
                    <p>Globelsite</p>
                </div>
                <div className='col-lg-2 col-md-3 text_footer'>
                    <h6>Contact</h6>
                    <p>ui.shimaaaaaa</p>
                    <p>Careary</p>
                    <h6 className='pt-4'>Stands social imact</h6>
                    <p>Supplay chain</p>
                    <p>About Wavey</p>
                    <p>Sitemap</p>
                    <p>Globelsite</p>
                </div>
                <div className='col-lg-2 col-md-3 icon_footer'>
                    <FiFacebook className= "" />
                    <RxTwitterLogo className= "mx-4" />
                    <FaInstagram className= "" />
                </div>
            </div>
            <div className='text_footer mt-5 text-center'>
                <p>CoptRight@2023 Wavey egypt|Privecy Police</p>
            </div>
        </div>
       </section>

    )
}


export default Footer;