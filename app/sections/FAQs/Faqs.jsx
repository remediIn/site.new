import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from 'react';
import './faqs.scss';
import { buyerFaqs, sellerFaqs } from '@/data';
import Faq from '@/app/components/Faq/Faq';

export default function Faqs() {
    const [isBuyer, setIsBuyer] = useState(true);
    const clickHnadler = (toggle)=>{
        setIsBuyer(toggle);
    }
    return (
        <div id="faqs" className="outfit-400">
            <div className="topic">- FAQs</div>
            <div className="text">Answer to the most frequently asked questions.</div>
            <div className="buttons">
                    <div className={isBuyer && "btn solid" || "btn hollow"} onClick={() => clickHnadler(true)}>
                        <span>Buyer </span>
                        <div >
                            <ArrowForwardIcon />
                        </div>
                    </div>
                    <div className={!isBuyer && "btn solid" || "btn hollow"} onClick={() => clickHnadler(false)}>
                        <span>Seller </span>
                        <div >
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
            <div className="outer">
                {isBuyer &&
                    buyerFaqs.map((faq, i) => <Faq data = {faq} key={i}/>) ||
                    sellerFaqs.map((faq, i) => <Faq data = {faq} key={i}/>)}
            </div>
        </div>
    );
}