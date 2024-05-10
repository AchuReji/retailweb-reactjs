import React from "react";
import { IoIosTime } from "react-icons/io";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="bg-brandPrimary text-white" id="contect">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-2"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>JAGATHTRADERS</span>
             
            </a>

            <div className="my-8 flex items-center gap-4">  
            <IoIosTime className="fa-2xl"/>   
            
                 <p> Mon-Sat:09:00AM-08:00PM / Sun:Closed</p>
                 
               </div>

               <div className="my-8 ">  
            <p className="mb-1">jagathtraders14@gmail.com</p>
            
                 <p> +91 81399889615</p>
                 
               </div>
              

            <div className="my-8">     
                 
              <p className="mb-1"> Copyright © 2024 JAGATHTRADERS.</p>
              <p>All rights reserved</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="https://www.instagram.com/jagathtraders?igsh=MXI5ZGl2bXZibmFreg==" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href=" https://wa.me/+918139889615" icon={BsWhatsapp} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white "  id="about">
                  About us
                </Footer.Link>
                <Footer.Link href="  https://wa.me/+918139889615" className="text-white">
                  Contact us
                </Footer.Link>
                <Footer.Link href="#" className="text-white" id='product'>
                  Products
                </Footer.Link>
                <Footer.Link href="#" className="text-white" id='faq' >
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Help center
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Legal
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title="Stay up to date" className="text-white" />
              <div className="max-w-md text-white">
                <div className="mb-2 block"></div>
                <TextInput
                  id="email4"
                  placeholder="Gmail"
                  required
                  rightIcon={SiMinutemailer}
                  type="email"
                />
                <br />
                <TextInput
                  id="Message"
                  placeholder="Message"
                  required
                  
                  type="Message"
                />
                <br />

                 <button className="btn-primary text-white">
            Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="inline-block ml-2"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                />
              </svg>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
