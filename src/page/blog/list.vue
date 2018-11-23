<template>
  <div class="hello">
    <h3 class="title">{{ title }}</h3>
    <content class="content">{{ content }} </content>
    <div class="bottomCSS">
      <button class="button" @click="last">上一篇</button>
      <button class="button" @click="next">下一篇</button>
    </div>
  </div>
</template>

<script>
import ajax from "../../common/request";

export default {
  name: "helloWorld",
  data() {
    return {
      msg: "hello vue.js",
      title: "标题",
      content: "内容",
      current: 1,
      bottomCSS: "bottom"
    };
  },
  computed: {},

  created() {
    this.requestBlog(this.current);
  },

  methods: {
    last() {
      if (this.current <= 1) {
        confirm("已经是第一篇");
        return;
      }

      this.current -= 1;
      this.requestBlog(this.current);
    },
    next() {
      this.current += 1;
      this.requestBlog(this.current);
    },

    add() {
      this.$router.push({ name: "add" });
    },

    requestBlog(current) {
      let time = 15 * 1000;
      let url = "http://127.0.0.1:8080/api/blog/article";
      let options = {};
      options.url = url;
      options.data = {
        id: current
      };
      options.method = "GET";
      options.onSuccess = data => {
        let obj = JSON.parse(data);
        this.title = obj.data.title;
        this.content = obj.data.content;
      };

      ajax(options);
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
