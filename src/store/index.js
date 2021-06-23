import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// dSV_LkG0DCu8nF2cp2O-ldD-_wfxdQ
export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {},
  actions: {
    async getPosts(context) {
      const url = `https://www.reddit.com/r/memes/top.json`;
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        context.state.posts = data.data.children;
        console.log(data.data.children);
        return;
      }
      const error = new Error(data.message || "Failed to load posts");
      error.response = data;
      throw error;
    },
  },
  modules: {},
});
