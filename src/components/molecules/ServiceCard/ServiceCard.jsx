import CardArrowIcon from "@/components/atoms/CardArrowIcon/CardArrowIcon";
import "./ServiceCard.css";

function ServiceCard({ number, title, image, description, href = "#" }) {
  return (
    <a href={href} className="service-card">
      <div className="service-card__body">
        {image && (
          <img
            src={image}
            alt=""
            className="service-card__image"
            aria-hidden="true"
          />
        )}

        <div className="service-card__overlay" aria-hidden="true" />

        <div className="service-card__content">
          <span className="service-card__number">{number}</span>

          <div className="service-card__text">
            <span className="service-card__title">{title}</span>
            {description && (
              <p className="service-card__description">{description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="service-card__footer">
        <span className="service-card__footer-label">MORE DETAIL</span>
        <CardArrowIcon className="service-card__arrow" />
      </div>
    </a>
  );
}

export default ServiceCard;
