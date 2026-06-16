import CardArrowIcon from "@/components/atoms/CardArrowIcon/CardArrowIcon";
import "./PressCard.css";

function PressCard({
  image,
  placeholderImage,
  title,
  category,
  date,
  description,
  href = "#",
}) {
  return (
    <article className="press-card">
      <img
        src={image}
        alt={title}
        className="press-card__image"
        onError={(event) => {
          if (placeholderImage) {
            event.currentTarget.src = placeholderImage;
          }
        }}
      />

      <div className="press-card__body">
        <h3 className="press-card__title">{title}</h3>

        <p className="press-card__meta">
          {category} | {date}
        </p>

        <p className="press-card__description">{description}</p>

        <a
          href={href}
          className="press-card__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Baca selengkapnya: ${title}`}
        >
          Baca selengkapnya
          <CardArrowIcon className="press-card__arrow" />
        </a>
      </div>
    </article>
  );
}

export function PressCardSkeleton() {
  return (
    <article className="press-card press-card--skeleton" aria-hidden="true">
      <div className="press-card__image press-card__image--skeleton" />
      <div className="press-card__body">
        <div className="press-card__line press-card__line--title" />
        <div className="press-card__line press-card__line--meta" />
        <div className="press-card__line press-card__line--text" />
        <div className="press-card__line press-card__line--text" />
        <div className="press-card__line press-card__line--link" />
      </div>
    </article>
  );
}

export default PressCard;
