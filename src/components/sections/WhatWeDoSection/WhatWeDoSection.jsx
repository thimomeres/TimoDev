import ServiceCard from "@/components/molecules/ServiceCard/ServiceCard";
import cardFirmClosureDates from "@/assets/images/cards/card-firm-closure-dates.png";
import cardProBonoServices from "@/assets/images/cards/card-pro-bono-services.jpg";
import cardMembersLibrary from "@/assets/images/cards/card-members-library.png";
import cardSpecialistsDirectory from "@/assets/images/cards/card-specialists-directory.png";
import "./WhatWeDoSection.css";

const SERVICE_CARDS = [
  {
    number: "01",
    title: "Firm Closure Dates",
    image: cardFirmClosureDates,
  },
  {
    number: "02",
    title: "Pro Bono Services",
    image: cardProBonoServices,
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
  },
  {
    number: "03",
    title: "Members' Library",
    image: cardMembersLibrary,
  },
  {
    number: "04",
    title: "Specialists Directory",
    image: cardSpecialistsDirectory,
  },
];

function WhatWeDoSection() {
  return (
    <section className="what-we-do">
      <div className="what-we-do__inner">
        <div className="what-we-do__content">
          <span className="what-we-do__quote" aria-hidden="true">
            &ldquo;
          </span>

          <div className="what-we-do__text">
            <p className="what-we-do__label">WHAT WE DO</p>

            <h2 className="what-we-do__heading">
              WE CARRY OUT VARIOUS STATUTORY FUNCTIONS
            </h2>

            <p className="what-we-do__mission">
              The mission of the Law Society is to serve its members and the
              public by sustaining an independent bar which upholds the rule of
              law and ensures access to justice. As part of its mission in
              ensuring access to justice for the needy, the Law Society has
              established Pro Bono SG...{" "}
              <a href="#" className="what-we-do__read-more">
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="what-we-do__cards">
        <div className="what-we-do__cards-divider" aria-hidden="true" />

        <div className="what-we-do__cards-grid">
          {SERVICE_CARDS.map((card) => (
            <ServiceCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
