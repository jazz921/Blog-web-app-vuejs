<template>
  <div class="tag">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tags" />
      <TagCloud :posts="tags" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>

</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '@/components/TagCloud.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'


export default {
  name: 'Tag',
  components: {
    Spinner, PostList, TagCloud
  },
  setup() {
    const route = useRoute()
    
    const { posts, error, load } = getPosts()
    load()

    const { tag } = route.params 
    const tags = computed(() => {
      return posts.value.filter((p) => p.tags.includes(tag))
    })

    return { posts, error, load, tags, tag }
  }

}
</script>

<style scoped>
.tag {
  margin: 0 40px 30px;
  padding-bottom: 30px;
}

</style>