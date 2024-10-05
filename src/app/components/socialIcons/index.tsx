import {Row} from "antd";
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import {IoLogoInstagram, IoLogoYoutube} from "react-icons/io5";
import "../footer/style.css";

export default function SocialIcons() {
  return (
    <Row
      className="socialsIcons"
      style={{width: "35%", justifyContent: "space-between"}}
    >
      <div className="boxsocialsIcons">
        <FaFacebookF size={25} />
        <p style={{margin: "0px"}}>Facebook</p>
      </div>
      <div className="boxsocialsIcons">
        {" "}
        <FaTwitter size={25} />
        <p style={{margin: "0px"}}>Twitter</p>
      </div>
      <div className="boxsocialsIcons">
        {" "}
        <IoLogoInstagram size={25} />
        <p style={{margin: "0px"}}> Instagram</p>
      </div>
      <div className="boxsocialsIcons">
        {" "}
        <IoLogoYoutube size={25} />
        <p style={{margin: "0px"}}>Youtube</p>
      </div>
    </Row>
  );
}
