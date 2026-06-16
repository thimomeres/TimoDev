import careerLeftBackground from "@/assets/images/career-growth/career-left-background.png";
import careerPhoneHand from "@/assets/images/career-growth/career-phone-hand.svg";
import BriefcaseIcon from "@/components/atoms/BriefcaseIcon/BriefcaseIcon";
import CardArrowIcon from "@/components/atoms/CardArrowIcon/CardArrowIcon";
import "./CareerGrowthSection.css";

function CareerGrowthSection() {
  return (
    <section
      id="career-growth"
      className="career-growth"
      aria-label="Career growth support"
    >
      <div className="career-growth__banner">
        <div className="career-growth__left">
          <img
            src={careerLeftBackground}
            alt=""
            className="career-growth__left-bg"
            aria-hidden="true"
          />

          <div className="career-growth__content">
            <div className="career-growth__icon-wrap">
              <BriefcaseIcon className="career-growth__icon" />
            </div>

            <div className="career-growth__text">
              <h2 className="career-growth__heading">
                Support for your career growth
              </h2>
              <p className="career-growth__description">
                A guidance on career and work related issues
              </p>
              <a href="#" className="career-growth__cta">
                FIND CAREER
                <CardArrowIcon className="career-growth__cta-arrow" />
              </a>
            </div>
          </div>
        </div>

        <div className="career-growth__right" aria-hidden="true" />

        <img
          src={careerPhoneHand}
          alt="Hand holding a smartphone showing featured legal jobs"
          className="career-growth__phone"
        />
      </div>
    </section>
  );
}

export default CareerGrowthSection;
