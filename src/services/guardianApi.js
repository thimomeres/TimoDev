import pressMouSigning from "@/assets/images/pres&media/press-mou-signing.png";
import { formatArticleDate } from "@/utils/formatDate";

const GUARDIAN_API_PROXY_URL = "/api/guardian-news";
const MIN_ARTICLES = 6;
const PLACEHOLDER_IMAGE = pressMouSigning;
const FALLBACK_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";

function getArticleDescription(article) {
  const excerpt = article.fields?.trailText || article.fields?.standfirst || "";

  if (excerpt.trim().length >= 40) {
    return excerpt.trim();
  }

  return FALLBACK_DESCRIPTION;
}

function isValidArticle(article) {
  if (article.type === "liveblog") {
    return false;
  }

  const excerpt = article.fields?.trailText || article.fields?.standfirst || "";

  return excerpt.trim().length >= 40;
}

function mapGuardianArticle(article) {
  return {
    id: article.id,
    image: article.fields?.thumbnail || PLACEHOLDER_IMAGE,
    placeholderImage: PLACEHOLDER_IMAGE,
    title: article.webTitle,
    category: article.sectionName || "Media",
    date: formatArticleDate(article.webPublicationDate),
    description: getArticleDescription(article),
    href: article.webUrl,
  };
}

export async function fetchGuardianArticles() {
  let response;
  try {
    response = await fetch(GUARDIAN_API_PROXY_URL);
  } catch {
    throw new Error(
      "Gagal terhubung ke layanan berita. Cek koneksi internet lalu coba lagi.",
    );
  }

  if (!response.ok) {
    throw new Error(`Permintaan berita gagal (${response.status}).`);
  }

  const data = await response.json();
  const results = data?.response?.results ?? [];
  const articles = results.filter(isValidArticle).map(mapGuardianArticle);

  if (articles.length < MIN_ARTICLES) {
    throw new Error("Artikel dari API Guardian tidak cukup (minimal 6).");
  }

  return articles.slice(0, 12);
}

export { PLACEHOLDER_IMAGE };
