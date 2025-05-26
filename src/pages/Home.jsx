import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <Banner />
      <CardSection />

      <Footer />
    </div>
  );
}

export default Home;
