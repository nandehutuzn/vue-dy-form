<template>
  <div>
    <dy-form label-width="120px" :formItems="formItem" :apis="apis"></dy-form>
  </div>
</template>

<script>
import formItem from './formItem'

export default {
  name: 'HelloWorld',
  data () {
    return {
      formItem: formItem,
      apis: {
        url: "hello-world/zhangn",
        method: "PUT"
      }
    }
  }
}
</script>
<style>
.dy-form{
  width: 800px;
}
</style>
