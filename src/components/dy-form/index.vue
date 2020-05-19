<template>
  <div class="dy-form-panel">
    <el-form ref="elForm" :model="formModel"  v-bind="$attrs" v-on="$listeners" class="dy-form">
      <el-row v-for="(row, index) in formItems" :key="index">
        <div v-for="(formItem, idx) in row" :key="idx">
          <dynamic-multi-items v-if="formItem.type === 'el-col' && formItem.children && formItem.children.length > 0" :options="formItem"></dynamic-multi-items>
          <dynamic-col v-else :options="formItem"></dynamic-col>
        </div>
      </el-row>
    </el-form>
    <dy-button ref="dyBtn" :model="formModel" type="primary" :apis="apis" v-if="showSubmitButton" class="submit-button" @click="submitHandle">{{submitButtonContent}}</dy-button>
  </div>
</template>
<script>
import dynamicCol from './dynamicCol'
import dynamicMultiItems from './dynamicMultiItems'
import dyButton from "./DynamicButton.vue"
import {createFormModelByFormItems} from "../../utils/index.js"

export default {
  name: 'dy-form',
  components: {
    dynamicCol,
    dynamicMultiItems,
    dyButton
  },
  data () {
    return {
      formModel: this.model || {}
    }
  },
  provide () {
    return {
      fatherForm: this
    }
  },
  created(){
    let ml = {};
    createFormModelByFormItems(this.formItems, ml)
    if(Object.keys(this.formModel).length === 0) {
      this.formModel = ml
    } else {
      Object.keys(ml).forEach(key => {
        if(!(key in this.formModel)) {
          this.$set(this.formModel, key, "")
        }
      })
    }
  },
  props: {
    model: Object,
    formItems: {
      type: Array,
      required: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    submitFunction: Function,
    submitButtonContent: {
      type: String,
      default: "确认"
    },
    apis: [Object, Array]
  },
  methods: {
    resetFields () {
      this.$refs.elForm.resetFields()
    },
    validate (callback) {
      this.$refs.elForm.validate(result => {
        callback(result)
      })
    },
    validateField (prop, callback) {
      this.$refs.elForm.validateField(prop, callback)
    },
    clearValidate () {
      this.$refs.elForm.clearValidate()
    },
    submitHandle(){
      this.$refs.elForm.validate(async result => {
        if(result) {
          try {
            let res = await this.$refs.dyBtn.submit();
            this.$emit("submit-success", res);
          } catch(err) {
            console.log(err)
            this.$emit("submit-failed", err);
          }     
        }
      })
    }
  }
}
</script>
<style scoped>
.dy-form-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dy-form {
  width: 100%;
}
.submit-button {
  width: 150px;
  margin-top: 50px;
}
</style>
