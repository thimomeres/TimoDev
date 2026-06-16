import { useState } from "react";
import HeroSection from "../../components/sections/HeroSection/HeroSection.jsx";
import NavOverlay from "../../components/organisms/NavOverlay/NavOverlay.jsx";
import WhatWeDoSection from "../../components/sections/WhatWeDoSection/WhatWeDoSection.jsx";
import AnniversarySection from "../../components/sections/AnniversarySection/AnniversarySection.jsx";
import MediaPressSection from "../../components/sections/MediaPressSection/MediaPressSection.jsx";
import CareerGrowthSection from "../../components/sections/CareerGrowthSection/CareerGrowthSection.jsx";
import ScrollReveal from "../../components/atoms/ScrollReveal/ScrollReveal.jsx";
import MobileMenuButton from "../../components/atoms/MobileMenuButton/MobileMenuButton.jsx";
import FooterSection from "../../components/sections/FooterSection/FooterSection.jsx";
import logo from "../../assets/images/brand/logo.png";
import facebookIcon from "../../assets/icons/social/ri_facebook-fill.svg";
import instagramIcon from "../../assets/icons/social/Group.svg";
import linkedinIcon from "../../assets/icons/social/Vector (1).svg";
import "./HomePage.css";

function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);
  const openNav = () => setIsNavOpen(true);

  return (
    <>
      <NavOverlay isOpen={isNavOpen} onClose={closeNav} />

      <MobileMenuButton isOpen={isNavOpen} onClick={toggleNav} />

      <HeroSection
        isMenuOpen={isNavOpen}
        onOpenMenu={openNav}
        onCloseMenu={closeNav}
      >
        <div className="home-page">
          <header className="home-page__header">
            <img
              src={logo}
              alt="The Law Society of Singapore"
              className="home-page__logo"
            />

            <div className="home-page__top-nav">
                <div className="home-page__social">
                  <a
                    href="#"
                    className="home-page__social-link"
                    aria-label="Facebook"
                  >
                    <img
                      src={facebookIcon}
                      alt=""
                      className="home-page__social-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="home-page__social-link"
                    aria-label="Instagram"
                  >
                    <img
                      src={instagramIcon}
                      alt=""
                      className="home-page__social-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="home-page__social-link"
                    aria-label="LinkedIn"
                  >
                    <img
                      src={linkedinIcon}
                      alt=""
                      className="home-page__social-icon"
                    />
                  </a>
                </div>

                <span className="home-page__divider" aria-hidden="true" />

              <a href="#" className="home-page__contact">
                Contact us
              </a>
            </div>
          </header>

          <div className="home-page__hero-body">
            <h1 className="home-page__hero-title">
              <span className="home-page__hero-title-line home-page__hero-title-line--1">
                BECOME AN
              </span>
              <span className="home-page__hero-title-line home-page__hero-title-line--2">
                <span className="home-page__hero-title-accent">AFFILIATE</span>{" "}
                OF THE
              </span>
              <span className="home-page__hero-title-line home-page__hero-title-line--3">
                LAW SOCIETY
              </span>
            </h1>
            <p className="home-page__hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="home-page__hero-cta">
              FIND LAWYER
              <span className="home-page__hero-cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </HeroSection>

      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <AnniversarySection />
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <MediaPressSection />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <CareerGrowthSection />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <FooterSection />
      </ScrollReveal>
    </>
  );
}

export default HomePage;
