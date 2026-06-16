import hamburgerMenu from "@/assets/icons/hamburger-menu.svg";
import "./MobileMenuButton.css";

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className={`mobile-menu-btn${isOpen ? " mobile-menu-btn--open" : ""}`}
      aria-label={isOpen ? "Tutup menu" : "Buka menu"}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <img src={hamburgerMenu} alt="" className="mobile-menu-btn__icon" />
    </button>
  );
}

export default MobileMenuButton;
