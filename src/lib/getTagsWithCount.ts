import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

const getTagsWithCount = (posts: CollectionEntry<"blog">[]) => {
  const result = Object.entries(
    posts
      .filter(postFilter)
      .flatMap((post) => post.data.tags)
      .map((tag) => ({ tag: slugifyStr(tag), tagName: tag }))
      .reduce((acc, { tag }) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {})
  ).map(([tag, count]) => ({ tag, count }));
  return result;
};
 
export default getTagsWithCount;
