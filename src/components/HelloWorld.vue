<template>
  <div class="hello">
    <div class="bottomCSS">
      <button class="button" @click="list">进入博客</button>
      <button class="button" @click="add">写博客</button>
    </div>
  </div>
</template>

<script>
import ajax from "../common/request";
export default {
  name: "helloWorld",
  data() {
    return {
      bottomCSS: "bottom"
    };
  },
  computed: {},

  created() {},

  methods: {
    list() {
      this.$router.push({ name: "list" });
    },
    add() {
      this.$router.push({ name: "add" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  color: #333;
  font-size: 28px;
}
.content {
  color: #888;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
}
.button {
  width: 100px;
  height: 35px;
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0rpx;
  display: flex;
  flex-direction: row;
}
.add {
  width: 200px;
  height: 35px;
  margin-top: 20px;
}
</style>
