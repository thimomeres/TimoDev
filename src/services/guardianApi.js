import pressMouSigning from "@/assets/images/pres&media/press-mou-signing.png";
import { formatArticleDate } from "@/utils/formatDate";

const GUARDIAN_API_URL = "https://content.guardianapis.com/search";
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
  const apiKey = import.meta.env.VITE_GUARDIAN_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Kunci API Guardian belum diatur. Tambahkan VITE_GUARDIAN_API_KEY di file .env.",
    );
  }

  const params = new URLSearchParams({
    "api-key": apiKey,
    q: "law OR legal OR court OR justice OR lawyer",
    "page-size": "30",
    "show-fields": "thumbnail,trailText,standfirst,headline",
    "order-by": "newest",
  });

  const response = await fetch(`${GUARDIAN_API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Permintaan API Guardian gagal (${response.status}).`);
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
