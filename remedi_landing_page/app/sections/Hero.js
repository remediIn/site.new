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
                onUpdate: () => console.log("working"),
                scrub: 6,

            },
        });
        droneTl.to("#droneBox", {
            keyframes: [
                {
                    y: '50vh',
                    x: '15vw',
                    // ease: 'expo.inOut',
                },
                {
                    y: '90vh',
                    x: '-15vw',
                    // ease: 'expo.inOut',
                },
                {
                    y: '90vh',
                    x: '-15vw',
                    // ease: 'expo.inOut',
                },
                {
                    y: '150vh',
                    x: '15vw',
                    // ease: "slow(0.3,0.4,false)",
                },
                {
                    y: '100vh',
                    ease: "slow(0.3,0.4,false)",
                },
                {
                    y: '100vh',
                    ease: "linear",
                },
                {
                    y: '100vh',
                    ease: "linear",
                },
                {
                    y: '100vh',
                    ease: "slow(0.3,0.4,false)",
                },
                {
                    y: '100vh',
                    ease: "linear",
                },
                {
                    y: '100vh',
                    ease: "linear",
                },
            ],
        })
        droneTl.to("#bag",{
            keyframes:[
                {
                    y: '150vh',
                    x: '15vw',
                }
            ]
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