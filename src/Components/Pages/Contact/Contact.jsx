/* eslint-disable react/jsx-no-undef */
import React from "react";
import { FiUser } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import img from "../../../images/contact us.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 bg-contact-user pe-0">
            <div className=" input-group">
              <span className="input-group-text input_contact">
                <FiUser className="icon-contact" />
              </span>
              <input
                type="text"
                className="form-control form_contact"
                aria-label="Username"
                aria-describedby="basic-addon1"
                placeholder="Full name"
              />
              <p className="line_contact"></p>
            </div>
            <p className="size_contact pb-3"></p>

            <div className=" input-group">
              <span className="input-group-text input_contact">
                <TfiEmail className="icon-contact fs-5 fw-bold" />
              </span>
              <input
                type="email"
                className="form-control form_contact"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                name="email"
              />
              <p className="line_contact"></p>
            </div>
            <p className="size_contact pb-3"></p>
            <div className=" input-group">
              <input
                type="text"
                className="form-control form_contact"
                aria-label="Username"
                aria-describedby="basic-addon1"
                placeholder="Message"
              />
              <p className="line_contact"></p>
            </div>
            <p className="size_contact pb-3"></p>

            <button className="btn btn_contact" type="submit">
              Contact Us
            </button>

            <FaFacebookF className="float-end fs-4 me-3" />
            <AiOutlineInstagram className="float-end mx-5 fs-4" />
            <BsTwitter className="float-end fs-4" />
          </div>

          <div className="col-lg-6 float-end px-0">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
