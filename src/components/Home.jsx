import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png"
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner5 from "../assets/banner5.png"
import banner6 from "../assets/banner6.png"
import banner4 from "../assets/banner4.png"
// className="w-full mx-auto
const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-20 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-8">
          <div className="mb-4 " >
          <img src={banner} alt=""/>
           </div>
           <div>
            <img src={banner1} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
           <h1 className="typing-demo text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">JAGATHTRADERS </h1>
            <h2 className=" text-neutralDGreytext-base mb-8"> IT Equipment on Rent we love helping others succeed at what they love to do  <span  className="text-neutralDGreyleading-snug">  We offer laptop and accessory rentals, along with computer server provision, and provide service for these devices.</span> </h2>
           
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey gap-12"> <a href=" https://wa.me/+918139889615">Book Now</a></button>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey  my-20 md:my-8 ml-5"><a href=" https://wa.me/+918139889615">Contect us</a></button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-15">
          <div>
            <img src={banner2} alt=""/>
           </div>
           <div>
            <img src={banner4} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="typing-demo text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">JAGATHTRADERS </h1>
            <p className=" text-neutralDGrey text-base mb-8">IT rental  & services for any configuration types and brand  <span className="text-neutralDGreyleading-snug">“ Premium services & Rental Provider of Desktop, Laptop, MacBook, iMac and other  ”</span></p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey gap-12"> <a href=" https://wa.me/+918139889615">Book Now</a></button>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey  my-20 md:my-8 ml-5"><a href=" https://wa.me/+918139889615">Contect us</a></button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-15">
          <div>
            <img src={banner5} alt=""/>
           </div>
           <div>
            <img src={banner6} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="typing-demo text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">JAGATHTRADERS </h1>
            <p className=" text-neutralDGrey text-base mb-8">Gaming Accessories types  brand  <span className="text-neutralDGreyleading-snug">Get ready to level up your gaming experience with our wide range of high-quality gaming accessories, including controllers, headsets,and more accessories </span></p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey gap-12"> <a href=" https://wa.me/+918139889615">Book Now</a></button>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey  my-20 md:my-8 ml-5"><a href=" https://wa.me/+918139889615">Contect us</a></button>
           </div>
          </div>
         
         
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
