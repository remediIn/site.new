import { useEffect } from 'react';
import '../styles/preLoader.scss'
import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

export default function PreLoader() {

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl
      .to(".preLoader", {
        y: '160%',
        duration: 1.2,
        opacity: 1,
        ease: 'bounce.out'
      })
      .to('.remediText', {
        x: '4%',
        duration: 0.8,
      })
      .to('.mediBag', {
        x: '8%',
        width: '130px',
        duration: 0.8,
      }, "<")
      .to('.reselMeds.lower', {
        y: '0',
        duration: 0.8,
      }, "<")
      .to(".preLoader", {
        y: '220%',
        duration: 1,
        delay:0.4,
        opacity: 0,
      })
      .to(".page",{
        y: '-82vh',
        duration: 1,
        onComplete:()=> gsap.to(".bg1",{position:'fixed',y:0,})
      },"<")
      .to(".nav",{
        y: '-120vh',
        opacity:0,
        duration: 1,
      },"<")
      .to(".nav",{
        y: '-2vh',
        opacity:1,
        position:'fixed',
        duration: 1,
      },"<")
      .to(".page",{opacity:1},"<")
      
  }, [])

  return (
    <div className="preLoader">
      <div className="upper">
        <img src="/reMedi.png" className='remediText' />
        <img src="/remediBag.png" className='mediBag' />
      </div>
      <img src="/reselMeds.png" className="lower reselMeds" />
    </div>
  )
}
