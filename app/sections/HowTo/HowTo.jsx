import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './howTo.scss';
import { useState } from "react";
import gsap from "gsap";

export default function HowTo() {
    const [isBuyer, setIsBuyer] = useState(true);
    const clickHnadler = (toggle) => {
        setIsBuyer(toggle);
        if (!toggle) {
            gsap.to("#bsCover", {
                duration: 0.3,
                ease: "Power1.easeInOut",
                x: '-36.8%',
            });
            gsap.to("#stepCover", {
                duration: 0.3,
                ease: "Power1.easeInOut",
                x: '-50%',
            });
        } else {
            gsap.to("#bsCover", {
                duration: 0.3,
                ease: "Power1.easeInOut",
                x: '-44.4%',
            });
            gsap.to("#stepCover", {
                duration: 0.3,
                ease: "Power1.easeInOut",
                x: '0%',
            });
        }
    }
    return (
        <div id="howTo" className='outfit-400'>
            <div className="topic">- How to Buy or Sell </div>
            <div className="container">
                <div className="buttons">
                    <div className={isBuyer && "circle solid" || "circle hollow"} onClick={() => clickHnadler(true)}>
                        <span>Buyer </span>
                        <div >
                            <ArrowForwardIcon />
                        </div>
                    </div>
                    <div className={!isBuyer && "circle solid" || "circle hollow"} onClick={() => clickHnadler(false)}>
                        <span>Seller </span>
                        <div >
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
                <div className="outer">
                    <div className="up">
                        <div className="cover" id="bsCover">
                            <div className="back"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                    <div className="down">
                        <div className="cover" id="stepCover">
                            <div className="box seller">
                                <div className="dash"></div>
                                <div className="step">
                                    <div className="image"><img src="step1buyer.png" alt="" /></div>
                                    <div className="num">1</div>
                                    <div className="head">Search your medicine</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step2buyer.png" alt="" /></div>
                                    <div className="num">2</div>
                                    <div className="head">Add medicine to cart</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step3buyer.png" alt="" /></div>
                                    <div className="num">3</div>
                                    <div className="head">Fill your details</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step4buyer.png" alt="" /></div>
                                    <div className="num">4</div>
                                    <div className="head">Get your medicines</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div></div>
                            <div className="box buyer">
                                <div className="dash"></div>
                                <div className="step">
                                    <div className="image"><img src="step1buyer.png" alt="" /></div>
                                    <div className="num">1</div>
                                    <div className="head">Search your medicine</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step2buyer.png" alt="" /></div>
                                    <div className="num">2</div>
                                    <div className="head">Add medicine to cart</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step3buyer.png" alt="" /></div>
                                    <div className="num">3</div>
                                    <div className="head">Fill your details</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <div className="step">
                                    <div className="image"><img src="step4buyer.png" alt="" /></div>
                                    <div className="num">4</div>
                                    <div className="head">Get your medicines</div>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}