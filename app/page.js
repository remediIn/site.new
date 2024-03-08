'use client';
import Home from "./sections/Home/Home";
import AboutUs from "./sections/AboutUs/AboutUs";
import WhyUs from "./sections/WhyUs/WhyUs";
import HowTo from "./sections/HowTo/HowTo";
import Stats from "./sections/Stats/Stats";
import Reviews from "./sections/Reviews/Reviews";
import Faqs from "./sections/FAQs/Faqs";
import NewsLetter from "./sections/NewsLetter/NewsLetter";

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
      <NewsLetter/>
    </main>
  );
}
