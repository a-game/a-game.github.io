import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { author } from "site";
import { getPosts } from "util/posts";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  return rss({
    title: `Posts from ${author}`,
    description:
      "Things I've learned and want to remember, or just stuff that I find interesting.",
    site: context.site!,
    items: posts.map(({ slug, data: { title, description, pubDate } }) => ({
      title,
      description,
      pubDate,
      link: !slug ? "/posts" : `/posts/${slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
};
