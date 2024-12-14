import {Row} from "antd";
import {IoLogoInstagram} from "react-icons/io5";
import "../footer/style.css";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <Row
      className="socialsIcons"
      style={{width: "35%", justifyContent: "space-between"}}
    >
      <div className="boxsocialsIcons">
        <Link
          target="_blank"
          href={
            "https://www.instagram.com/hopehouse.sp?igsh=MTV1NDJvN3hybzkwaQ=="
          }
        >
          <IoLogoInstagram size={25} />
        </Link>
        <p style={{margin: "0px"}}> Instagram</p>
      </div>
    </Row>
  );
}
