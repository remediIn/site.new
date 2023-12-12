"use client"
import './styles/page.scss'

import PreLoader from "./components/PreLoader";
import Hero from "./sections/Hero";
import Buyer from './sections/Buyer';
import Seller from './sections/Seller';
import Nav from './components/Nav';
import Remedi from './sections/Remedi';


function Page() {
  return (
    <div className="page" >
      <Hero />
      <Seller />
      <Remedi />
      <Buyer />
    </div>
  )
}


export default function Home() {

  return (
    <div className="scroll-container">
      <div className="preLoaderCover">
        <PreLoader />
      </div>
      <div>
        <Nav />
        <Page />
      </div>
    </div>
  )
}
