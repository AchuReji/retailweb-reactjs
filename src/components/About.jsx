import React from "react";
import aboutImg from "../assets/about.png";
import { MdPerson,MdTipsAndUpdates } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { BsBank } from "react-icons/bs";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              ABOUT US
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We, JAGATHTRADERS, situated at Kowdiar, Thiruvananthapuram,
              Kerala provide all types of integrated and branded computers on
              hire. Computers on rent help minimise your maintenance costs and
              headaches associated with it. Along with renting out the systems
              and associated products, we take pride in providing quality
              services and value-added solutions to all our clients. We believe
              that the growth of a customer will lead to our growth & work on
              the philosophy of ‘growing to serve & serving to grow’.
            </p>
            <button className="btn-primary">Learn More about us</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-brandPrimary font-semibold mb-2 md:w-2/3">
              Why You Choose Our <br />{" "}
              <span className="text-neutralDGrey">
                IT Rental Services
              </span>
              <br />
           
            </h2>
            <p>“ Premium Rental Provider of Desktop, Laptop, MacBook, iMac and other on IT Equipment on Rent ”</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 '">
             
              <MdPerson className="fa-2xl "/>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1554 Clinets
                  </h4>
                  <p></p>
                </div>
              </div>
              <div className="flex items-center gap-4">
              <MdTipsAndUpdates className="fa-2xl "/>

                <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                New Up to date technology
                  </h4>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
              <IoIosTime className="fa-2xl " />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                  Accurate & timely solutions.
                  </h4>
                 
                </div>
              </div>
              <div className="flex items-center gap-4">
              <BsBank  className="fa-2xl"/>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                  Secured Payments
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
