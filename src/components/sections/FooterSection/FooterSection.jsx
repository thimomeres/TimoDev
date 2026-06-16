import FooterLogo from "@/components/atoms/FooterLogo/FooterLogo";
import "./FooterSection.css";

const FOOTER_LINKS = [
  { label: "FAQS", href: "#" },
  { label: "ADVERTISING RATES", href: "#" },
  { label: "TERMS OF USE", href: "#" },
  { label: "PRIVACY POLICY", href: "#" },
];

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <FooterLogo />

        <nav className="footer__nav" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="footer__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; Copyright 2025 The Law Society of Singapore. All rights
            reserved
          </p>
          <p className="footer__update">Latest update 26 June 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
