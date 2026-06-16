import NewsCarousel from "@/components/organisms/NewsCarousel/NewsCarousel";
import { useNewsArticles } from "@/hooks/useNewsArticles";
import "./MediaPressSection.css";

function MediaPressSection() {
  const { articles, loading, error, retry } = useNewsArticles();

  return (
    <section
      id="media-press"
      className="media-press"
      aria-label="Media and Press"
    >
      <div className="media-press__canvas">
        <div className="media-press__inner">
          <p className="media-press__label">MEDIA &amp; PRESS</p>

          <NewsCarousel
            articles={articles}
            loading={loading}
            error={error}
            onRetry={retry}
          />
        </div>
      </div>
    </section>
  );
}

export default MediaPressSection;
