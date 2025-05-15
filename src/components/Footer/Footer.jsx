// import React from "react";

// const Footer = () => {
//   return (
//     <div className=" ">
//       <p>
//         Made with ❤️ by{" "}
//         <span className="text-green-400 cursor-pointer">Ayushmaan Gupta</span>
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 py-8 my-auto mx-auto flex flex-col gap-y-5  justify-center items-center bg-[#222222] w-full">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {/* first section */}
            <div className="space-y-4 max-w-[300px]">
              <button
                className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"
                onClick={() => navigate("/")}
              >
                Code Lab
              </button>
              <p className="text-dark2 text-justify">
                Welcome to CodeLab, your go-to online code editor! Designed with
                user-friendliness in mind, CodeLab offers an intuitive and
                seamless coding experience.
              </p>
            </div>
            {/* second section */}
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Courses</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Web Development
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Software Development
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Apps Development
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Links</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Home
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Services
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      About
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
            {/* third section */}
            <div className="space-y-4 max-w-[300px]">
              <h1 className="text-2xl font-bold">Get In Touch</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-3 rounded-s-xl bg-white text-black w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
                />
                <button className="bg-amber-400 text-black font-semibold py-4 px-6 rounded-e-xl">
                  Go
                </button>
              </div>
              {/* social icons */}
              <div className="flex space-x-6 py-3">
                <a href="https://chat.whatsapp.com">
                  <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
                {/* <a href="https://thecodingjourney.com/">
                  <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a> */}
                <a href="https://www.youtube.com">
                  <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="">
        <p>Made with by ❤️ Ayushmaan Gupta</p>
      </div>
    </div>
  );
};

export default Footer;
