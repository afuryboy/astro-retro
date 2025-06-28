import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { postFilterWithoutFeatured } from "./postFilter";


const getPostsByTime = (posts: CollectionEntry<"blog">[], limit: number) => {
  
  
   let result = posts
    .filter(postFilterWithoutFeatured)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    ).slice(0, limit)
    return result
}

export default getPostsByTime;
