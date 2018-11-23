<template>
  <div class="main">
    <div class="wrap">
    <h1>写博客</h1>
    <input class="title" placeholder="请输入标题" v-model="title"/>
    <textarea class="content" type="text" placeholder="请输入内容" v-model="content"/>
    <button class="btn" @click="submit">添加</button>
  </div>
  </div>

</template>

<script>
import ajax from "../../common/request";

export default {
  name: "add",

  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {},

  created() {},

  methods: {
    submit() {
      if (!this.title || this.title == "") {
        confirm("标题不能为空");
        return;
      }
      if (!this.content || this.content == "") {
        confirm("内容不能为空");
        return;
      }

      let that = this;
      let url = "http://127.0.0.1:8080/api/blog/insert";
      let options = {};
      options.url = url;
      options.data = {
        title: this.title,
        content: this.content
      };
      options.method = "GET";
      options.onSuccess = data => {
        console.log(data);
        that.title = "";
        that.content = "";
        confirm("提交成功");
      };

      ajax(options);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column; */
}

.wrap {
  display: flex;
  flex-direction: column;
}

.title {
  width: 500px;
  height: 38px;
  margin: 0 auto;
  font-size: 18px;
}
.content {
  width: 500px;
  height: 500px;
  text-align: top;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 14px;
  vertical-align: top;
  display: block;
}
.btn {
  width: 300px;
  height: 38px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
