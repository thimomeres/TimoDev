import backgroundHome from "../../../assets/images/hero/background-home.png";
import redShape from "../../../assets/icons/red-shape.svg";
import ladyJusticeStatue from "../../../assets/images/hero/lady-justice-statue.png";
import hamburgerMenu from "../../../assets/icons/hamburger-menu.svg";
import rippedPaperMaskUpper from "../../../assets/images/hero/ripped-paper-mask-upper.png";
import rippedPaperMaskBottom from "../../../assets/images/hero/ripped-paper-mask-bottom.png";
import "./HeroSection.css";

function HeroSection({ children, isMenuOpen, onOpenMenu, onCloseMenu }) {
  const toggleMenu = () => {
    if (isMenuOpen) {
      onCloseMenu();
    } else {
      onOpenMenu();
    }
  };

  return (
    <section className="hero">
      <div className="hero__bg-layer" aria-hidden="true">
        <img src={backgroundHome} alt="" className="hero__background" />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
        <div className="hero__gradient-bottom" />
      </div>

      <img
        src={redShape}
        alt=""
        aria-hidden="true"
        className="hero__red-shape"
      />

      <img
        src={ladyJusticeStatue}
        alt="Statue of Lady Justice"
        className="hero__statue"
      />

      <div className="hero__canvas">
        <div className="hero__content">{children}</div>
      </div>

      <aside className="hero__sidebar">
        <button
          type="button"
          className="hero__menu-btn"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <img src={hamburgerMenu} alt="" className="hero__hamburger" />
        </button>

        <div className="hero__scroll-down">
          <p className="hero__scroll-text">
            <span>SCROLL</span>
            <span>DOWN</span>
          </p>
          <div className="hero__scroll-icon" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.15)" />
              <path d="M10 13L6.5 9.5H13.5L10 13Z" fill="white" />
            </svg>
          </div>
        </div>
      </aside>

      <div className="hero__ripped-paper" aria-hidden="true">
        <img
          src={rippedPaperMaskUpper}
          alt=""
          className="hero__ripped-paper-layer hero__ripped-paper-layer--upper"
        />
        <img
          src={rippedPaperMaskBottom}
          alt=""
          className="hero__ripped-paper-layer hero__ripped-paper-layer--lower"
        />
      </div>
    </section>
  );
}

export default HeroSection;
