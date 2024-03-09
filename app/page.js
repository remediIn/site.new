'use client';
import Home from "./sections/Home/Home";
import AboutUs from "./sections/AboutUs/AboutUs";
import WhyUs from "./sections/WhyUs/WhyUs";
import HowTo from "./sections/HowTo/HowTo";
import Stats from "./sections/Stats/Stats";
import Reviews from "./sections/Reviews/Reviews";
import Faqs from "./sections/FAQs/Faqs";
import Team from "./sections/Team/Team";
import NewsLetter from "./sections/NewsLetter/NewsLetter";
import Footer from "./sections/Footer/Footer";

export default function Page() {
  return (
    <main id="page">
      <Home/>
      <AboutUs/>
      <WhyUs/>
      <HowTo/>
      <Stats/>
      <Reviews/>
      <Faqs/>
      <Team/>
      <NewsLetter/>
      <Footer/>
    </main>
  );
}
