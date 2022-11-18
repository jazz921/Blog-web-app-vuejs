<template>
  <div>
    <h1 style="text-align: center;" >Create a new Vlog</h1>
    <form @submit.prevent="submitForm">
      <label>Title:</label>
      <input type="text" v-model="title" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag):</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handeInputTag">
      <div class="pill" v-for="tag in tags" :key="tag" @click="deleteTag(tag)">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'Create',
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    // insert each tag in the tags array
    const handeInputTag = () => {
      // check if the current tag is already inside the tags array
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/) // remove the spaces in tag 
        tags.value = [...tags.value, tag.value] // input tag in the last index of tags array
      }
      tag.value = '' // clear the tag value after inserting
    }

    // delete the selected tag
    const deleteTag = (tag) => {
      tags.value = tags.value.filter(item => item !== tag)
    }

    // At form submit
    const submitForm = async () => {
      const toSubmitData = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      const res = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(toSubmitData)
      })
      const data = await res.json()
      router.push({ name: 'home' })
    }

    return { title, body, tag, tags, handeInputTag, deleteTag, submitForm }
  }
}
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee
}

textarea {
  height: 130px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  top: -2px;
  padding: 3px;
  padding-right: 40px;
  left: -20px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  color: white;
  cursor: pointer;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0px;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>