<template>
  <div class="post">
    <router-link :to="{
      name: 'details',
      params: {
        id: post.id
      }
    }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span class="tag" v-for="tag in post.tags" :key="tag">
        #{{ tag }} 
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 150) + '...'
    })

    return { snippet }
  },
}
</script>

<style scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h2::before {
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

.tag a {
  text-decoration: none;
  color: #2c3e50;
}

.post .tag {
  cursor: pointer;
  transition: .3s ease;
  margin: 0px 5px;
  padding: 5px;
  border-radius: 3px;
}
.tag:hover {
  background: rgb(227, 227, 227);
}

</style>