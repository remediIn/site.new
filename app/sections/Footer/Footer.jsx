import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Link from 'next/link';
import './footer.scss';

export default function Footer(){
    return (
        <div id="footer" className='outfit-400'>
            <div className="up">
                <div className="l">
                    <div className="up">
                        <span>Treatment is easy with</span>
                        <h1>Remedi App</h1>
                    </div>
                    <div className="down">
                        <img src="googlePlay.png" alt="Download from Goole Playstore" />
                        <img src="appleStore.png" alt="Download from Apple Store" />
                    </div>
                </div>
                <div className="r">
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <img src="phoneApp.png" alt="Application Photos" />
                </div>
            </div>
            <div className="down">
                <div className="l">
                    <img src="remediLogo2.png" alt="Remedi" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, assumenda hic quos tempora deserunt temporibus.</p>
                    <div className="links">
                        <div className="l">
                            <Link href="https://twitter.com/"><XIcon className='icon'/></Link>
                            <Link href="https://twitter.com/"><InstagramIcon className='icon'/></Link>
                            <Link href="https://twitter.com/"><FacebookRoundedIcon className='icon'/></Link>
                        </div>
                        <span><CopyrightRoundedIcon className='icon'/>2023</span>
                    </div>
                </div>
                <div className="c">
                    <a href="#home">Home</a><a href="#whyUs">Why Us</a><a href="#aboutUs">About Us</a><a href="#stats">Statistics</a><a href="#reviews">Reviews</a><a href="#">How we work?</a><a href="#faqs">FAQs</a>
                </div>
                <div className="r">
                    <div className="contact">
                        <span>Contact Us</span>
                        <span>Phone Number: +91 9876543210</span>
                        <span>Email: abc@remedi.com</span>
                        <a href="#footer">Subscribe to our Newsletter <ArrowForwardIcon/></a>
                    </div>
                    <div className="download">
                        Download App <span><ArrowForwardIcon className='icon'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}