
import { useContext } from "react";
import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import Loader from "../../components/loader/Loader";


const HomePage = () => {
 
    return (
        <Layout>
          <HeroSection />
          <Category />
          <HomePageProductCard />
          <Track />
          <Testimonial />
         <Loader />
        </Layout>
    );
}

export default HomePage;