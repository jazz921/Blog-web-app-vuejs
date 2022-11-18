<template>
  <div>
    <h1>List of Post</h1>
    <div v-for="post in posts" key="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost.vue'

export default {
  name: 'PostList',
  props: ['posts'],
  components: {
    SinglePost
  },
  setup() {
    return {  }
  }
}
</script>
