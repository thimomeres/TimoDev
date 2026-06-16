import { useCallback, useEffect, useState } from "react";
import { fetchGuardianArticles } from "@/services/guardianApi";

export function useNewsArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchGuardianArticles();
      setArticles(data);
    } catch (err) {
      setArticles([]);
      setError(
        err instanceof Error
          ? err.message
          : "Gagal memuat berita. Silakan coba lagi nanti.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return { articles, loading, error, retry: loadArticles };
}
