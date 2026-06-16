import { useEffect, useState } from "react";
import logo from "@/assets/images/brand/logo.png";
import facebookIcon from "@/assets/icons/social/ri_facebook-fill.svg";
import instagramIcon from "@/assets/icons/social/Group.svg";
import linkedinIcon from "@/assets/icons/social/Vector (1).svg";
import redShape from "@/assets/icons/red-shape.svg";
import ladyJusticeStatue from "@/assets/images/hero/lady-justice-statue.png";
import "./NavOverlay.css";

const PRIMARY_LINKS = [
  {
    id: "about",
    label: "ABOUT US",
    subLinks: [
      "What We Do",
      "Council 2025",
      "Executive Committee 2025",
      "Presidents & Honorary Members",
      "Award Recipients",
      "Secretariat 2025",
      "Standing Committees 2025",
      "Practice Areas",
      "Support Schemes",
      "Membership Privileges",
    ],
  },
  { id: "lawyers", label: "LAWYERS", subLinks: ["Find a Lawyer", "Practice Directions", "Ethics"] },
  { id: "public", label: "PUBLIC", subLinks: ["Legal Aid", "Complaints", "Resources"] },
  { id: "admissions", label: "ADMISSIONS", subLinks: ["Admission Requirements", "Bar Exam", "Foreign Lawyers"] },
  { id: "media", label: "MEDIA", subLinks: ["Press Releases", "Events", "Publications"] },
  { id: "cpd", label: "CPD", subLinks: ["CPD Requirements", "Courses", "Accreditation"] },
  { id: "member-login", label: "MEMBER LOGIN", subLinks: ["Member Portal", "Reset Password"] },
  { id: "membership", label: "MEMBERSHIP", subLinks: ["Join", "Benefits", "Fees"] },
  { id: "careers", label: "CAREERS", subLinks: ["Job Listings", "Internships"] },
  { id: "advertise", label: "ADVERTISE", subLinks: ["Advertising Rates", "Media Kit"] },
];

function NavOverlay({ isOpen, onClose }) {
  const [activeId, setActiveId] = useState("about");

  const activeLink =
    PRIMARY_LINKS.find((link) => link.id === activeId) ?? PRIMARY_LINKS[0];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="nav-overlay__layout">
        <aside className="nav-overlay__aside" aria-hidden="true">
          <img src={logo} alt="" className="nav-overlay__aside-logo" />
          <div className="nav-overlay__aside-visual">
            <img src={redShape} alt="" className="nav-overlay__aside-shape" />
            <img
              src={ladyJusticeStatue}
              alt=""
              className="nav-overlay__aside-statue"
            />
          </div>
        </aside>

        <div className="nav-overlay__main">
          <div className="nav-overlay__watermark" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 8L68 36H92L72 52L80 80L60 64L40 80L48 52L28 36H52L60 8Z"
                fill="white"
                fillOpacity="0.06"
              />
              <rect x="20" y="88" width="80" height="6" rx="2" fill="white" fillOpacity="0.06" />
              <path d="M30 94V108M60 94V108M90 94V108" stroke="white" strokeOpacity="0.06" strokeWidth="4" />
            </svg>
          </div>

          <div className="nav-overlay__topbar">
            <div className="nav-overlay__utilities">
              <div className="nav-overlay__social">
                <a href="#" className="nav-overlay__social-link" aria-label="Facebook">
                  <img src={facebookIcon} alt="" className="nav-overlay__social-icon" />
                </a>
                <a href="#" className="nav-overlay__social-link" aria-label="Instagram">
                  <img src={instagramIcon} alt="" className="nav-overlay__social-icon" />
                </a>
                <a href="#" className="nav-overlay__social-link" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt="" className="nav-overlay__social-icon" />
                </a>
              </div>
              <span className="nav-overlay__divider" aria-hidden="true" />
              <a href="#" className="nav-overlay__contact">
                Contact us
              </a>
            </div>
            <button
              type="button"
              className="nav-overlay__close"
              onClick={onClose}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <form className="nav-overlay__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <svg
              className="nav-overlay__search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              className="nav-overlay__search-input"
              placeholder="Search here"
              aria-label="Search"
            />
          </form>

          <div className="nav-overlay__columns">
            <nav className="nav-overlay__primary" aria-label="Primary navigation">
              {PRIMARY_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className={`nav-overlay__primary-link${
                    activeId === link.id ? " nav-overlay__primary-link--active" : ""
                  }`}
                  onClick={() => setActiveId(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <nav className="nav-overlay__sub" aria-label="Sub navigation">
              {activeLink.subLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="nav-overlay__sub-link"
                  onClick={onClose}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavOverlay;
