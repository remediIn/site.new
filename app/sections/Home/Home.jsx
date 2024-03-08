import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import gsap from "gsap";
import "./home.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const randomX = random(1, 10);
  const randomY = random(1, 10);
  const randomDelay = random(0, 1);
  const randomTime = random(1, 3);
  const randomTime2 = random(3, 6);
  const randomAngle = random(-10, 10);
  useEffect(() => {
    const meds = document.getElementById("med");
    gsap.set(meds, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    });

    moveX(meds, 1);
    moveY(meds, -1);
    rotate(meds, 1);
  }, []);

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: "Sine.easeInOut",
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: "Sine.easeInOut",
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: "Sine.easeInOut",
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }

  return (
    <div id="home" className="outfit-400">
      <div className="info">Launching soon in Lucknow!</div>
      <div className="middle">
        <div className="head outfit-900">REMEDI</div>
        <div className="med" id="med">
          <img src="meds.png" alt="" />
        </div>
        <div className="subHead">
          <div className="left">
            <img src="download01.png" alt="" />
          </div>
          <div className="right">
            A platform for Reselling and Buying medicines at much lower price
          </div>
        </div>
        <div className="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iusto maiores laborum! Debitis hic ipsa molestiae. Tempore delectus rem aspernatur?
        </div>
      </div>
      <div className="sub">
        <span>Subscribe to Newsletter </span>
        <div >
          <ArrowForwardIcon />
        </div>
      </div>
      <div className="quote">- Maximize Health Minimise Waste</div>
    </div>
  );
}
