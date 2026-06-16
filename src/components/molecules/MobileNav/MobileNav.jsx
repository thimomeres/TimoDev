import logo from "@/assets/images/brand/logo.png";
import facebookIcon from "@/assets/icons/social/facebook.svg";
import instagramIcon from "@/assets/icons/social/instagram.svg";
import linkedinIcon from "@/assets/icons/social/linkedin.svg";
import "./MobileNav.css";

const NAV_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Membership", href: "#" },
  { label: "Find a Lawyer", href: "#" },
  { label: "Media & Press", href: "#media-press" },
  { label: "Career Growth", href: "#career-growth" },
  { label: "Contact Us", href: "#" },
];

function MobileNav({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu navigasi">
      <button
        type="button"
        className="mobile-nav__backdrop"
        onClick={onClose}
        aria-label="Tutup menu"
      />

      <div className="mobile-nav__panel">
        <div className="mobile-nav__header">
          <img
            src={logo}
            alt="The Law Society of Singapore"
            className="mobile-nav__logo"
          />
          <button
            type="button"
            className="mobile-nav__close"
            onClick={onClose}
            aria-label="Tutup menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-nav__links" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav__link"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav__footer">
          <div className="mobile-nav__social">
            <a href="#" className="mobile-nav__social-link" aria-label="Facebook">
              <img src={facebookIcon} alt="" className="mobile-nav__social-icon" />
            </a>
            <a href="#" className="mobile-nav__social-link" aria-label="Instagram">
              <img src={instagramIcon} alt="" className="mobile-nav__social-icon" />
            </a>
            <a href="#" className="mobile-nav__social-link" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" className="mobile-nav__social-icon" />
            </a>
          </div>
          <a href="#" className="mobile-nav__contact" onClick={onClose}>
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
