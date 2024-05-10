import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Desktops",
      decription:
        "Have you ever wanted to take laptops on rent but did not know which company to choose? ComputeronRent offers a wide range of desktop on rent.",
      image: "/src/assets/icons/desktops.png",
    },
    {
      id: 2,
      title: "Accessories",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/cpu.png",
    },
    {
      id: 3,
      title: "Laptops",
      decription:
        "Have you ever wanted to take laptops on rent but did not know which company to choose? ComputeronRent offers a wide range of laptops on rent.",
      image: "/src/assets/icons/laptop.png",
    },

    {
      id: 4,
      title: "Computer Server",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/server.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Companies to get you the best deal!
        </h2>
        <p className="text-neutralGrey">
          Banner Integrated & Branded Computers & Laptops on Hire
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src="src/assets/icons/company1.png" alt="" />
          <img src="src/assets/icons/company2.png" alt="" />
          <img src="src/assets/icons/company3.png" alt="" />
          <img src="src/assets/icons/company4.png" alt="" />
          <img src="src/assets/icons/company5.png" alt="" />
          <img src="src/assets/icons/company6.png" alt="" />
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Our Services
        </h1>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients. We commit to
          providing best in class service. We ensure all the products are high
          quality, with the latest updates, in wonderful condition and easy to
          use. Computeronrent provide all post rental services as well.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
