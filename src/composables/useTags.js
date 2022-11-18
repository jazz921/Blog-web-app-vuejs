// take the array of posts
// create a new tag set (no duplicates)
// add each tags in the new tag set
// return a single array containning the tags

import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
