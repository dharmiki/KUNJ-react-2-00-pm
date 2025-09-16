import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import Categories from "../Components/Categories";
import Offers from "../Components/Offers";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Product></Product>
      <Categories></Categories>
      <Offers></Offers>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>  
    </div>
  );
};

export default UserDashboard;
