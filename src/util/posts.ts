import { getCollection } from "astro:content";

export const ROOT_SLUG = "index";

export async function getPosts({
  onlyFeatured = false,
  includeDrafts = false,
  includeRoot = false,
  unsorted = false,
} = {}) {
  const posts = await getCollection(
    "posts",
    ({ slug, data: { draft = true, featured = false } }) => {
      if (!includeRoot && slug === ROOT_SLUG) return false;
      if (!includeDrafts && draft) return false;
      if (onlyFeatured && !featured) return false;
      return true;
    }
  );

  return unsorted
    ? posts
    : posts.sort((a, b) => {
        const aFeatured = Number(a.data.featured);
        const bFeatured = Number(b.data.featured);

        return aFeatured !== bFeatured
          ? aFeatured - bFeatured
          : b.data.pubDate.getTime() - a.data.pubDate.getTime();
      });
}
