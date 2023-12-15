import '../styles/Hero.scss'
import gsap from 'gsap';
import { useEffect } from 'react';
import lenis from '../lenis';


import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
    useEffect(() => {

        let tl = gsap.timeline({ repeat: -1 });
        tl.to(".drone", {
            y: -40,
            duration: 1,
            ease: "slow(0.3,0.4,false)"
        })
            .to(".drone", {
                y: 0,
                duration: 1,
                ease: "slow(0.3,0.4,false)"
            });

        let droneTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#Seller",
                start: "-=100% bottom",
                endTrigger: "#Buyer",
                end: "bottom 100%-=100px",
                scrub: 4,
            },
        });
        ScrollTrigger.create({
            trigger: "#Buyer",
            start: "-=135% bottom",
            end: "-=125% bottom",
            onEnter:()=>{
                gsap.to("#bag", {opacity:0})
                gsap.to("#remediBag",{opacity:1, delay:0.4})
            },
            onEnterBack:()=>{
                gsap.to("#remediBag", {opacity:0})
                gsap.to("#bag",{opacity:1, delay:0.4})
            }
          });

          
        droneTl.to("#droneBox", {
            y: '50vh',
            x: '20vw',
            ease: "slow(0.3,0.4,false)",
            duration: 0.3,
        })
            .to("#droneBox", {
                y: '94vh',
                x: '-21vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.5,
            })
            .to("#droneBox", {
                y: '94vh',
                x: '-21vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.1,
            })
            .to("#droneBox", {
                y: '140vh',
                x: '-25vw',
                ease: "slow(0.3,0.4,false)"
            })
            .to("#bag", {
                y: '46vh',
                x: '-5vw',
                ease: "slow(0.3,0.4,false)"
            }, "<")
            .to("#droneBox", {
                y: '216vh',
                x: '25vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.4,
            })
            .to("#bag", {
                y: '122vh',
                x: '45vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.4,
            }, "<")
            .to("#droneBox", {
                y: '200vh',
                duration:0.1,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#droneBox", {
                y: '218vh',
                duration: 0.1,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#droneBox", {
                y: '280vh',
                x: '-26vw',
                duration: 0.4,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#remediBag", {
                y: '66vh',
                x: '-55vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.4,
            }, "<")
            .to("#droneBox", {
                y: '328vh',
                x: '-25.5vw',
                duration: 0.6,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#remediBag", {
                y: '114vh',
                x: '-54.5vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.6,
            }, "<")
            .to("#droneBox", {
                y: '250vh',
                x: '-70vw',
                duration: 0.3,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#buyed1, #buyed2",{
                filter: "brightness(100%)",
                opacity:1,
                duration:0.1,
                ease:"slow(0.3,0.4,false)"
            },"<")
            .to("#buyed1",{
                x:'-50vh',
                duration:0.1,
                ease: "slow(0.3,0.4,false)"
            },"<+=50%")
            .to("#buyed2",{
                // transform: 'translateY(-4vh)',
                x:'-4vw',
                scale: 1.2,
                duration:0.1,
                ease: "slow(0.3,0.4,false)"
            },"<")
            .to("#droneBox", {
                y: '250vh',
                x: '-70vw',
                duration: 0.5,
                ease: "slow(0.3,0.4,false)"
            })
            .to("#droneBox", {
                y: '250vh',
                x: '-70vw',
                duration: 0.6,
                ease: "slow(0.3,0.4,false)"
            })
    }, [])

    const navigator = (e) => {
        e.preventDefault();
        lenis.scrollTo(`#Seller`, {
            duration: 4,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            offset: -110,
        });
    }

    return (
        <div className='hero section' id='Home'>
            <div className='main'>
                <div className='heading'>
                    <span>REMEDI</span>
                    <p>A platform for Reselling medicines and Buying them at much lower price</p>
                    <p>Maximize Health, MinimizeWaste!</p>
                </div>

                <div className='droneBox' id='droneBox'>
                    <img src='/drone.png' className='drone' />
                </div>
                <div className='que'>
                    <div>Want to save some lives ?</div>
                    <div>
                        <a onClick={navigator}>ofcourse</a>
                        <a onClick={navigator}>Let's go</a>
                    </div>
                </div>
            </div>
        </div>
    );
}