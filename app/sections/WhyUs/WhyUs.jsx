import "./whyUs.scss";
import Card from "@/app/components/Card/Card";
import { experts } from "@/data";

export default function WhyUs() {
    return (
        <div id="whyUs" className="outfit-400">
            <div className="topic">- Why Us ?</div>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio officiis deleniti ea enim labore suscipit magnam quos pariatur eligendi.</div>
            <div className="cards">
                {experts.map((review,i) => {
                    return <Card data={review}key={i} />
                })}
            </div>
        </div>
    );
}
