export const getLastPageFromLinks = (links) => {
  if (!links || typeof links !== "string") {
    return 1;
  }

  try {
    const parts = links.split(",").map((p) => p.trim());
    const lastPart = parts.find((p) => /rel="last"/.test(p));
    if (!lastPart) {
      return 1;
    }

    const urlMatch = lastPart.match(/<([^>]+)>/);
    if (!urlMatch) {
      return 1;
    }

    const url = new URL(urlMatch[1]);
    const page = url.searchParams.get("_page");
    return page ? Number(page) : 1;
  } catch (e) {
    return 1;
  }
};
