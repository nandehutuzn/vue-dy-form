<template>
  <el-button v-bind="$attrs" v-on="$listeners" :loading="loading"><slot/></el-button>
</template>
<script>
import {mergeRequest} from "../../utils/index.js"

export default {
  data() {
    return {
      loading: false
    }
  },
  created(){
    if(Array.isArray(this.apis)) {
      this.apis.forEach(item => {
        this.$set(item, "cancel", item["cancel"])
      })
    }
  },
  props: {
    /*
      apis 可以为一个对象，也可以为多个对象组成的数组，如果要访问data中的属性，建议将apis绑定对象放在computed中
      apis 对象说明: {
        url: api地址
        method: GET,POST,PUT,
        param: 提交的参数对象，或者 返回一个对象的函数，函数有一个入参（上一个接口的返回值）,
        cancel：是否需要调该接口，默认false
      }
    */
    apis: [Object, Array],
    model: Object
  },
  methods: {
    submit(){
      return mergeRequest(this.apis, this, "loading");
    }
  }
}
</script>
