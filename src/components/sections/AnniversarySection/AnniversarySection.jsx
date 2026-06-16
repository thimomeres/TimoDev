import anniversarySectionBackground from "@/assets/images/anniversary/anniversary-section-background.png";
import anniversaryCelebrationBanner from "@/assets/images/anniversary/anniversary-celebration-banner.png";
import roadTo2025Handshake from "@/assets/images/road-to-2027/road-to-2025-handshake.png";
import supportSmudgeTexture from "@/assets/images/anniversary/support-smudge-texture.png";
import CardArrowIcon from "@/components/atoms/CardArrowIcon/CardArrowIcon";
import "./AnniversarySection.css";

const TIMELINE_YEARS = ["2025", "2026", "2027"];

const LEGAL_SUPPORT_ITEMS = [
  {
    audience: "Lawyer",
    title: "Feedback on Law Reforms",
  },
  {
    audience: "Public",
    title: "Alternative Dispute Resolution Schemes",
  },
  {
    audience: "Lawyer",
    title: "Members' Support Schemes",
  },
  {
    audience: "Lawyer",
    title: "Future Lawyering Research Portal",
  },
];

function AnniversarySection() {
  return (
    <section className="anniversary">
      <div className="anniversary__banner">
        <img
          src={anniversarySectionBackground}
          alt=""
          className="anniversary__background"
          aria-hidden="true"
        />

        <img
          src={anniversaryCelebrationBanner}
          alt="Celebrating 60th Anniversary"
          className="anniversary__celebration"
        />
      </div>

      <div className="anniversary__body">
        <div className="anniversary__body-inner">
          <div className="anniversary__intro">
            <p className="anniversary__label">ROAD TO 2027</p>

            <h2 className="anniversary__heading">
              CELEBRATING A LEGACY,
              <br />
              JOURNEYING TO THE FUTURE
            </h2>
          </div>

          <div className="anniversary__divider" aria-hidden="true" />

          <div className="anniversary__timeline-grid">
            <div className="anniversary__media">
              <img
                src={roadTo2025Handshake}
                alt="Handshake in a legal office with scales of justice and gavel"
                className="anniversary__media-image"
              />
            </div>

            <div className="anniversary__years" aria-label="Timeline years">
              {TIMELINE_YEARS.map((year, index) => (
                <span key={year} className="anniversary__years-item">
                  {index > 0 && (
                    <span className="anniversary__years-sep" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span
                    className={
                      index === 0
                        ? "anniversary__year anniversary__year--active"
                        : "anniversary__year"
                    }
                  >
                    {year}
                  </span>
                </span>
              ))}
            </div>

            <div className="anniversary__detail">
              <div className="anniversary__detail-copy">
                <h3 className="anniversary__detail-title">
                  A new beginning - Laying the groundwork for our future
                </h3>

                <p className="anniversary__detail-text">
                  As we embark on our journey towards LawSoc&apos;s 60th
                  anniversary, 2025 marks the beginning of our refreshed digital
                  presence. This year, we&apos;re reimagining how we connect with
                  members — through new digital tools, enhanced services, and
                  stories from the legal community.
                </p>
              </div>
            </div>
          </div>

          <div className="anniversary__legal-zone">
            <div className="anniversary__support-smudge-wrap" aria-hidden="true">
              <img
                src={supportSmudgeTexture}
                alt=""
                className="anniversary__support-smudge"
              />
            </div>

            <div className="anniversary__support">
              <div className="anniversary__support-content">
                <div className="anniversary__support-header">
                  <p className="anniversary__support-label">LEGAL SUPPORT</p>
                  <h3 className="anniversary__support-heading">
                    GUIDING YOU THROUGH EVERY STEPS
                  </h3>
                </div>

                <ul className="anniversary__support-list">
                  {LEGAL_SUPPORT_ITEMS.map((item) => (
                    <li key={item.title} className="anniversary__support-item">
                      <span className="anniversary__support-audience">
                        {item.audience}
                      </span>
                      <a href="#" className="anniversary__support-link">
                        <span>{item.title}</span>
                        <CardArrowIcon className="anniversary__support-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="anniversary__support-cta-wrap">
                  <a href="#" className="anniversary__support-cta">
                    EXPLORE MORE SUPPORT
                    <CardArrowIcon className="anniversary__support-cta-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnniversarySection;
