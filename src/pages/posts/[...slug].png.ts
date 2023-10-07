import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOg } from "util/generate-og";
import { ROOT_SLUG } from "util/posts";

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.map((post) => ({
    params: { slug: post.slug === ROOT_SLUG ? undefined : post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOg(props as CollectionEntry<"posts">), {
    headers: { "Content-Type": "image/png" },
  });
