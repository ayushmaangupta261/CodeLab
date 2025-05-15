// import React, { useEffect } from "react";
// import starBg from "../assets/Home/starBg.png";
// import flyingCat from "../assets/Home/flyingCat.png";
// import globe from "../assets/Home/globe.png";
// import compiler from "../assets/Home/compiler.png";
// import CodeBlocks from "../components/Home/CodeBlocks";
// import HighlightText from "../components/Home/HighlightText";
// import flying_planet from "../assets/Home/flying_planet.png";
// import code from "../assets/Home/code.jpg";
// import { RiLoginCircleLine } from "react-icons/ri";

// import { authStatus } from "../services/operations/authApi";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";

// const Home = () => {
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   console.log("Token -> ", user);

//   useEffect(() => {
//     // authStatus(user?.accessToken);
//   }, []);

//   return (
//     <div
//       className=" w-full h-auto pb-[10rem] bg-center flex flex-col items-center  z-5  text-white"
//       // style={{ backgroundImage: `url(${starBg})` }}
//     >
//       {/* <div className='mt-[2rem] mr-auto'>
//         <button className="text-3xl  font-bold cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text lg:hidden "
//           onClick={() => navigate("/")}>
//           Code Lab
//         </button>
//       </div> */}

//       {/* Hero Section */}
//       <div className="w-11/12 h-auto mt-[2rem] mx-auto md:mt-[5rem] flex flex-col  justify-evenly items-center text-white ">
//         <p className="text-3xl sm:text-5xl lg:text-6xl text-center w-full tracking-wide ">
//           <span className=" text-emerald-500">Accelerate your </span>
//           <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
//             coding skills with CodeLab
//           </span>
//         </p>

//         <div className="mt-[4rem] w-[15rem] mx-auto flex justify-between items-center bg-gray-900  px-2 py-2 rounded-2xl shadow  hover:scale-105 transition-all duration-200 ">
//           <button className="   text-amber-300  mx-auto cursor-pointer">
//             Hey! wanna become a pro
//           </button>
//           <RiLoginCircleLine className="cursor-pointer text-amber-300 mt-1" />
//         </div>

//         <div className="flex flex-col lg:flex-row justify-evenly items-center mt-[4rem] text-white w-full">
//           {/* right */}
//           <div className="text-white w-[90%] lg:w-[30%] z-0 mx-auto lg:mx-0  lg:text-start flex flex-col justify-center  gap-y-5 font-semibold  lg:mr-10">
//             <p className="text-4xl bg-gradient-to-r hidden md:block from-orange-500 to-orange-800 text-transparent bg-clip-text">
//               CodeLab
//             </p>
//             <p className="text-lg font-light  text-justify mx-auto">
//               Welcome to CodeLab, go-to online codee editor! Designed with user
//               friendliness in mind, CodeLab offers an INTUTIVE and SEAMLESS
//               coding experience. Whether you’re a beginner or an experienced
//               developer, our platform provides all the tool you need to
//               write,test and share . Join the CodeLab Community and unlock your
//               coding potencial today!{" "}
//             </p>
//             <button className="bg-blue-500 shadow-2xl shadow-gray-700  text-white w-[8rem] mt-10 mx-auto rounded-md text-center py-2 hover:scale-105 transition-all duration-200 cursor-pointer ">
//               Start Coding
//             </button>
//           </div>

//           {/* Code section 1 */}
//           <div className="hidden lg:flex justify-center ">
//             <CodeBlocks
//               position={" flex-col md:flex-row"}
//               codeblock={`public class Example {
//               public static void main(String[] args) {

//                   int a = 10, b = 20;
//                   int sum = a+b;
//                   System.out.println("Sum: " + sum);

//               }
//           }

//           Output:
//           Sum: 30
//           `}
//               codeColor={" text-cyan-950"}
//             />
//           </div>
//         </div>
//       </div>

//       {/*  code editor */}
//       <div className=" w-[90%] lg:w-[80%] flex flex-col lg:flex-row mt-[5rem] justify-between mx-auto items-start gap-x-10">
//         {/* left */}
//         <div className="flex flex-col lg:flex-row lg:w-[50%] justify-center items-center lg:justify-start z-0">
//           <p className="text-3xl tracking-wider font-semibold lg:hidden mb-7">
//             <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//               Online Co
//             </span>
//             <span className="text-emerald-500">de Editor</span>
//           </p>

//           <img src={code} alt="" className="w-[100%] lg:mt-[2rem]" />
//         </div>

//         {/* right */}
//         <div className="w-[90%] -[50%] mt-[2rem] lg:mt-[5rem] flex flex-col mx-auto lg:items-start">
//           <p className="text-4xl font-semibold hidden lg:block">
//             <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//               Online Co
//             </span>
//             <span className="text-emerald-500">de Editor</span>
//           </p>
//           <p className="text-justify text-lg font-thin mt-5 text-orange-400">
//             Experience the simplecity and power of coding with our intuitive
//             code editor. Designed for developers of all leaves, Our editor
//             provides the tools and features you need to bring your ideas to
//             life. <br />
//           </p>
//           <p className="text-justify text-lg font-thin mt-5 text-gray-300 ">
//             Get started today and unlock your potential, one line code at a
//             time. With our coding courses, you can learn at own pace from
//             anywhere in the world and get access to a wealth of resouces,
//             including hands-on projects, quizzes and personalized feedback from
//             instructor{" "}
//           </p>
//           <p className="text-justify text-lg font-thin mt-5 text-emerald-500">
//             Go ahead, give it a try. Our hands-on learning environment means
//             you'll be writing real code from your very first lessons.
//           </p>

//           <div className="mx-auto  flex justify-center ">
//             <button
//               className="bg-blue-500 shadow-2xl shadow-gray-700  text-white w-[8rem] mt-10 mx-auto rounded-md text-center py-2 hover:scale-105 transition-all duration-200 cursor-pointer"
//               onClick={() => navigate("/create-and-join")}
//             >
//               Start Coding
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* image */}
//       {/* <div className='w-full mt-10 '>
//         <img src={globe} alt="" className='w-full' />
//       </div> */}

//       {/* image */}
//       {/* <div className='w-full  mt-[15rem] '>
//         <img src={flying_planet} alt="" className='w-full' />
//       </div> */}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import starBg from "../assets/Home/starBg.png";
import code from "../assets/Home/code.jpg";
import CodeBlocks from "../components/Home/CodeBlocks";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import BannerPng from "../assets/Home/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import { authStatus } from "../services/operations/authApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // authStatus(user?.accessToken);
  }, []);

  return (
    <div className="w-full min-h-screen bg-center flex flex-col items-center z-5 text-white">
      {/* Hero Section */}
      <div className="pb-[5rem]">
        <motion.div
          className="w-11/12 mx-auto mt-[2rem] md:mt-[5rem] flex flex-col items-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-emerald-500">Accelerate your </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              coding skills with CodeLab
            </span>
          </motion.p>

          <div className="mt-[4rem] w-[15rem] mx-auto flex justify-between items-center bg-gray-900 px-2 py-2 rounded-2xl shadow hover:scale-105 transition-all duration-200 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
             <div className="flex  gap-x-2 justify-center items-center">
             <button className="text-amber-300 mx-auto cursor-pointer ">
                Hey! Wanna become a pro?
              </button>
              <RiLoginCircleLine className="cursor-pointer text-amber-300 mt-1" />
             </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center mt-[4rem] w-full">
            {/* Left Text Section */}
            <motion.div
              className="w-[90%] lg:w-[30%] z-0 mx-auto lg:mx-0 flex flex-col justify-center gap-y-5 font-semibold lg:mr-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-4xl bg-gradient-to-r hidden md:block from-orange-500 to-orange-800 text-transparent bg-clip-text">
                CodeLab
              </p>
              <p className="text-lg font-light text-justify">
                Welcome to CodeLab, your go-to online code editor! Designed with
                user-friendliness in mind, CodeLab offers an intuitive and
                seamless coding experience.
              </p>
              <motion.button
                className="bg-blue-500 shadow-2xl shadow-gray-700 text-white w-[8rem] mt-10 mx-auto rounded-md text-center py-2 hover:scale-105 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/create-and-join")}
              >
                Start Coding
              </motion.button>
            </motion.div>

            {/* Right CodeBlock Section */}
            <motion.div
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <CodeBlocks
                position={"flex-col md:flex-row"}
                codeblock={`public class Example {
    public static void main(String[] args) {
        int a = 10, b = 20;
        int sum = a + b;
        System.out.println("Sum: " + sum);
    }
}

Output:
Sum: 30
`}
                codeColor={"text-cyan-950"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Code Editor Section */}
      <div className=" bg-[#222222] pb-[3rem]">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row mt-[5rem] justify-between mx-auto items-start gap-x-10">
          {/* Left Image Section */}
          <motion.div
            className="flex flex-col lg:w-[40%] justify-center items-center"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-3xl tracking-wider font-semibold lg:hidden mb-7 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Online Co
              </span>
              <span className="text-emerald-500">de Editor</span>
            </p>
            <img src={code} alt="Code Editor" className="w-full lg:mt-[2rem]" />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="w-[90%] lg:w-[50%] mt-[2rem] lg:mt-[5rem] flex flex-col mx-auto lg:items-start"
            key={user ? "authenticated" : "guest"} // To trigger animation based on changes
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }} // Allowing animation to happen every time component comes in view
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl font-semibold hidden lg:block">
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Online Co
              </span>
              <span className="text-emerald-500">de Editor</span>
            </p>
            <p className="text-justify text-lg font-thin mt-5 text-orange-400">
              Experience the simplicity and power of coding with our intuitive
              code editor.
            </p>
            <p className="text-justify text-lg font-thin mt-5 text-gray-300">
              Get started today and unlock your potential one line of code at a
              time.
            </p>
            <p className="text-justify text-lg font-thin mt-5 text-emerald-500">
              Go ahead, give it a try. Our hands-on learning environment ensures
              you'll be writing real code from your very first lesson.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                className="bg-blue-500 shadow-2xl shadow-gray-700 text-white w-[8rem] mt-10 rounded-md py-2 hover:scale-105 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/create-and-join")}
              >
                Start Coding
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="container bg-[#222831]  py-14 md:py-24 flex justify-center ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 mx-auto  w-[90%]">
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }} // Ensure it triggers every time
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={BannerPng}
              alt="Banner"
              className="w-[350px]"
            />
          </div>
          {/* Banner Text */}
          <div className="flex flex-col justify-center mx-auto ">
            <div className="text-center md:text-left space-y-12">
              <motion.h1
                key="banner-title" // Key ensures re-trigger on component re-mount
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }} // Allow animation every time
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold !leading-snug"
              >
                The World's Leading Online Learning Platform
              </motion.h1>
              <div className="flex flex-col gap-6">
                <motion.div
                  key="courses" // Key ensures re-trigger on component re-mount
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} // Allow animation every time
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 p-6 bg-gray-700 rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl"
                >
                  <FaBookReader className="text-2xl" />
                  <p className="text-lg">10,000+ Courses</p>
                </motion.div>
                <motion.div
                  key="instructors" // Key ensures re-trigger on component re-mount
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} // Allow animation every time
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 p-6 bg-gray-700 rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl"
                >
                  <GrUserExpert className="text-2xl" />
                  <p className="text-lg">Expert Instruction</p>
                </motion.div>
                <motion.div
                  key="lifetime-access" // Key ensures re-trigger on component re-mount
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} // Allow animation every time
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 p-6 bg-gray-700 rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl"
                >
                  <MdOutlineAccessTime className="text-2xl" />
                  <p className="text-lg">Lifetime Access</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-100 flex w-full gap-x-3   h-full ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
