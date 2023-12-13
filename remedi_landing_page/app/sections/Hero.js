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

        droneTl.to("#droneBox", {
            onStart: () => tl.pause(),
            onReverseComplete: () => tl.resume(),
            y: '50vh',
            x: '20vw',
            ease: "slow(0.3,0.4,false)",

            duration: 0.3,
        })
            .to("#droneBox", {
                y: '94vh',
                x: '-20vw',
                onComplete: () => tl.resume(),
                
                ease: "slow(0.3,0.4,false)",
                duration: 0.5,
            })
            .to("#droneBox", {
                y: '94vh',
                x: '-20vw',
                ease: "slow(0.3,0.4,false)",
                duration: 0.1,
            })
            .to("#droneBox", {
                y: '160vh',
                x: '20vw',
                ease: "slow(0.3,0.4,false)"
                // duration: 0.5,
            })
            .to("#bag", {
                y: '66vh',
                x: '40vw',
                ease: "slow(0.3,0.4,false)"
            }, "<")
            .to("#droneBox", {
                y: '160vh',
                ease: "slow(0.3,0.4,false)"
                // x: '-20vw',
                // duration: 0.5,
            })
            .to("#droneBox", {
                y: '94vh',
                x: '-20vw',
                duration: 0.5,
            })
            .to("#droneBox", {
                y: '94vh',
                x: '-20vw',
                duration: 0.5,
            })
            .to("#droneBox", {
                y: '94vh',
                x: '-20vw',
                duration: 1,
            })

    }, [])

    const navigator = (e) => {
        e.preventDefault();
        lenis.scrollTo(`#Seller`, {
            duration: 4,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            offset: -100,
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