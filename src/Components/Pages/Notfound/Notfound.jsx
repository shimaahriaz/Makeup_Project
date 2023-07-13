import React from 'react';
import img from '../../../images/404-error.jpg';
import './Notfound.css';

const Notfound = () => {
    return (
      <>
        <div className="notfound">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <h1 className="mb-5">SOrry... This Page Not Found</h1>
              </div>
              <div className="col-lg-6">
                <img
                  src={img}
                  alt=""
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



export default Notfound;