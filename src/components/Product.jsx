import { Card } from 'flowbite-react';
import React from 'react';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
    const Product = [
        {id: 1, title: "Lenovo Legion Slim 5 AI Powered AMD Ryzen 7 7840HS 16  Gaming Laptop (16GB/512GB SSD/Win11/Office/NVIDIA RTX 4050 8GB " , image: "/src/assets/product1.jpg"},
        {id: 2, title: "ASUS Rog Strix Geforce RTX 4090 White OC Edition Gaming Graphics Card (Pcie 4.0, 24Gb Gddr6X, HDmi 2.1A, Displayport 1.4A) pci_e_x16", image: "/src/assets/product2.jpg"},
        {id: 3, title: "AMD Ryzen 9 7900X (12 Cores, 24 Threads MSI MEG X670E Tomahawk WiFi 32GB 16GBx2 Gskill FLARE X5 Black 6000 GeForce RTX 4080 Super 16GB GDDR6X 1TB Gen 4 XPG S70 Blade", image: "/src/assets/product5.png"},
        // {id: 4, title: "HP Deskjet 2820 Printer, Copy, Scan, WiFi with self Reset, Bluetooth, USB, Simple Setup Smart App, Ideal for Home.", image: "/src/assets/product4.jpg"},
    ];
  return (
    <div  className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='product'>
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        
        className='text-center md:w-1/2 mx-auto'>
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
         Our Products
        </h2>
        {/* <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lot is more.
        </p> */}
        </motion.div>

        {/* all blogs */}
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        
        className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16'>
            {
                Product.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                   <img src={blog.image} alt="" className='mx-auto hover:scale-95 transition-all duration-300'/>
                   
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                        <div className="flex gap-8 items-center justify-center">
                             <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                 Vie All Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                            </a>
                        </div>
                    </div>
                </div>)
            }
        </motion.div>

    </div>
);
};

export default Product;
