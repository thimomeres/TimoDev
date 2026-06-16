export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Prefer a server-only key name; keep VITE_* as fallback for compatibility.
  const apiKey = process.env.GUARDIAN_API_KEY || process.env.VITE_GUARDIAN_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      message: "Guardian API key belum diatur di server.",
    });
  }

  const params = new URLSearchParams({
    "api-key": apiKey,
    q: "law OR legal OR court OR justice OR lawyer",
    "page-size": "30",
    "show-fields": "thumbnail,trailText,standfirst,headline",
    "order-by": "newest",
  });

  try {
    const response = await fetch(
      `https://content.guardianapis.com/search?${params.toString()}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({
        message: `Permintaan Guardian API gagal (${response.status}).`,
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch {
    return res.status(502).json({
      message: "Gagal menghubungi Guardian API dari server.",
    });
  }
}
