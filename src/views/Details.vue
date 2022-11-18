<template>
  <div v-if="post === null">
    <Spinner />
  </div>
  <div class="content" v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    <br />
    <button class="delBtn" @click="deletePost(id)">Delete</button>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRouter } from 'vue-router';

export default {
  name: 'Details',
  props: ['id'],
  components: {
    Spinner
  },
  setup(props) {
    const router = useRouter()
    const { post, error, load } = getPost(props.id)
    load()

    const deletePost = async (id) => {
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      })
      const data = res.json()
      router.push({ name: 'home' })
    }

    return { post, error, deletePost }
  },
}
</script>

<style scoped>
.content {
  padding: 5px 30px;
}

h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

h2::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.delBtn {
  background: #ff8800;
  color: white;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
}
</style>