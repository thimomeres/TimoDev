import { useEffect, useRef, useState } from "react";
import PressCard, { PressCardSkeleton } from "@/components/molecules/PressCard/PressCard";
import "./NewsCarousel.css";

const GAP = 30;

function getSlidesPerView(width) {
  if (width >= 1280) {
    return 3;
  }

  if (width >= 768) {
    return 2;
  }

  return 1;
}

function NewsCarousel({ articles, loading, error, onRetry }) {
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(() =>
    getSlidesPerView(window.innerWidth),
  );
  const [offset, setOffset] = useState(0);

  const maxIndex = Math.max(0, articles.length - slidesPerView);

  useEffect(() => {
    const handleResize = () => {
      const nextSlidesPerView = getSlidesPerView(window.innerWidth);
      setSlidesPerView(nextSlidesPerView);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, articles.length - nextSlidesPerView)),
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [articles.length]);

  useEffect(() => {
    const updateOffset = () => {
      const firstSlide = trackRef.current?.children[0];

      if (!firstSlide) {
        setOffset(0);
        return;
      }

      setOffset(currentIndex * (firstSlide.offsetWidth + GAP));
    };

    updateOffset();
    requestAnimationFrame(updateOffset);
  }, [currentIndex, slidesPerView, articles.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  useEffect(() => {
    if (loading || error || articles.length <= slidesPerView) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [loading, error, articles.length, slidesPerView, maxIndex]);

  const pauseAutoPlay = () => {
    isPausedRef.current = true;
  };

  const resumeAutoPlay = () => {
    isPausedRef.current = false;
  };

  if (loading) {
    return (
      <div className="news-carousel" aria-busy="true">
        <button
          type="button"
          className="news-carousel__arrow news-carousel__arrow--prev"
          disabled
          aria-hidden="true"
        >
          ←
        </button>

        <div className="news-carousel__viewport">
          <div className="news-carousel__track news-carousel__track--static">
            {Array.from({ length: slidesPerView }).map((_, index) => (
              <div key={index} className="news-carousel__slide">
                <PressCardSkeleton />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="news-carousel__arrow news-carousel__arrow--next"
          disabled
          aria-hidden="true"
        >
          →
        </button>

        <p className="news-carousel__loading-text" role="status" aria-live="polite">
          Memuat artikel...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-carousel__status news-carousel__status--error" role="alert">
        <p>{error}</p>
        <button type="button" className="news-carousel__retry" onClick={onRetry}>
          Coba lagi
        </button>
      </div>
    );
  }

  return (
    <div
      className="news-carousel"
      aria-roledescription="carousel"
      aria-label="Berita terbaru"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={resumeAutoPlay}
    >
      <button
        type="button"
        className="news-carousel__arrow news-carousel__arrow--prev"
        onClick={goPrev}
        disabled={currentIndex === 0}
        aria-label="Artikel sebelumnya"
      >
        ←
      </button>

      <div className="news-carousel__viewport">
        <div
          ref={trackRef}
          className="news-carousel__track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {articles.map((article) => (
            <div key={article.id} className="news-carousel__slide">
              <PressCard {...article} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="news-carousel__arrow news-carousel__arrow--next"
        onClick={goNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Artikel berikutnya"
      >
        →
      </button>
    </div>
  );
}

export default NewsCarousel;
