import logo from "@/assets/images/brand/logo.png";
import "./FooterLogo.css";

function FooterLogo() {
  return (
    <img
      src={logo}
      alt="The Law Society of Singapore"
      className="footer-logo"
    />
  );
}

export default FooterLogo;
