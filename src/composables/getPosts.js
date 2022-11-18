import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts`)
      posts.value = await res.json()
    } catch (err) {
      error.value = err.message;
      console.log(err.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
