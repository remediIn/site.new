import "./aboutUs.scss";

export default function AboutUs() {
    return (
        <div id="aboutUs" className="outfit-400">
            <div className="topic">- About Us</div>
            <div className="cover">
                <div className="l">
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                        provident necessitatibus iure esse placeat natus similique qui vel.
                        Repellendus tenetur dolorem aliquam corrupti blanditiis vel laborum.
                    </div>
                    <a href="#Team">Our Team &gt;</a>
                </div>
                <div className="r">
                    <img src="docs.png" alt="aboutUs" />
                </div>
            </div>
        </div>
    );
}
