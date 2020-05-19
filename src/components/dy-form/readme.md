## 介绍

配置表单dy-form及提交

## 基本使用

formItems 属性涉及到的相关部分属性（其余属性参考Vue渲染函数数据对象）。
| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :------ | :----- |
|type|必填，组件名称|String|—|
|label|可选，表单名称|String|—|
|prop|可选，表单绑定的属性名称|String|—|
|span|可选，行宽权重，总值为24|Number|24|
|rules|可选，校验规则|Array|—|

apis 属性涉及到的相关属性。
| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :------ | :----- |
|url|必填，接口请求地址。|String|—|
|method|必填，提交动作(PUT,POST等)|String|—|
|param|可选，提交的参数对象，或者 返回一个对象的函数，函数有一个入参（上一个接口的返回值），不传时取表单绑定的model对象|Array|—|
|cancel|可选，是否取消该接口调用|Boolean|false|

::: tip
在编写表单类文件的时候，建议把 formItems 单独作为一个文件，便于维护。
如果想自己写提交按钮，则需设置 showSubmitButton属性为false
如果不想自己写提交按钮，但想自己实现提交方法，则需设置submitFunction方法（表单校验通过后会调用此方法）
:::

```vue
<template>
  <dy-form
    ref="dyForm"
    label-position="right"
    :apis="apis"
    :formItems="formItems"
    label-width="130px"
    @submit-success="submitSuccessHandle"
    @submit-failed="submitFailedHandle"
  ></dy-form>
</template>
<script>
import formItems from "./formItems.js";
import PATH from "@/api/path.js";
export default {
  data() {
    return {
      formItems: formItems,
      apis: {
        url: PATH.FINANCE_TRADE_IMPORT,
        method: "POST"
      }
    };
  },
  method: {
    submitSuccessHandle(res){
    },
    submitFailedHandle(err){
    }
  }
};
</script>
```
