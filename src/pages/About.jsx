import React from "react";
import Navbar from "../components/Navbar";
import aboutBg from "../assets/images/about.jpg";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div
        style={{ backgroundImage: `url(${aboutBg})` }}
        className="
          bg-cover bg-center 
          h-[60vh] md:h-screen 
          flex items-center justify-center 
          px-6 py-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-center text-black drop-shadow-lg">
            About Verily
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6  p-6 mt-10 bg-white shadow-xl rounded-xl mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Who we Are
        </h2>
        <p className="mb-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          suscipit maiores molestias quis minus tempora inventore dolor labore
          iure, voluptatum animi officiis ut ea nesciunt voluptatibus tempore
          dignissimos? Voluptates, dignissimos?
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui
          ad nihil ab tenetur cum omnis error sunt doloremque, consequatur odio
          est nostrum, eos iste, et animi asperiores voluptates corporis.
        </p>
      </motion.div>

      <Footer />
    </>
  );
}

export default About;
