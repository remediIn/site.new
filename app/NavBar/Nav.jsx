import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Nav.scss";

export default function Nav() {
  return (
    <div id="Nav">
      <div className="cover outfit-500">
        <div className="l">
          <img src="logo.png" alt="RemediIn" />
        </div>
        <div className="c">
          <div className="links outline-inward">About Us</div>
          <div className="links outline-inward">Why Us</div>
          <div className="links outline-inward">Reviews</div>
          <div className="links outline-inward">Stats</div>
          <div className="links outline-inward">FAQs</div>
        </div>
        <div className="r outfit-700">
          <span>Get App </span>
          <div className="circle">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
