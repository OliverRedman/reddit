<template>
  <div class="container">
    <div v-for="post of posts" class="post" :key="post.id">
      {{ post.data.title }} <img :src="post.data.thumbnail" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post img {
  width: 100px;
}
</style>
