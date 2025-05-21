'use client'
import Category from "./components/Category/Category";
import Deal from "./components/Deal/Deal";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Partners/>
      <Category/>
      <Products/>
      <Deal/>
      <Footer/>
    </div>
  );
}
