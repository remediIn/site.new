'use client';
import Home from "./sections/Home/Home";
import AboutUs from "./sections/AboutUs/AboutUs";
import WhyUs from "./sections/WhyUs/WhyUs";

export default function Page() {
  return (
    <main id="page">
      <Home/>
      <AboutUs/>
      <WhyUs/>
    </main>
  );
}