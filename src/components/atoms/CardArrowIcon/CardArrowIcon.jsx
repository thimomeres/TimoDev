function CardArrowIcon({ className }) {
  return (
    <svg
      className={className}
      width="32"
      height="8"
      viewBox="0 0 32 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="2" cy="4" r="1.5" fill="currentColor" />
      <circle cx="8" cy="4" r="1.5" fill="currentColor" />
      <circle cx="14" cy="4" r="1.5" fill="currentColor" />
      <path
        d="M20 4H30M30 4L26 1M30 4L26 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CardArrowIcon;
