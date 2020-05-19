import { renderItemType, renderFormItemType } from '../../utils/index'

export default {
  name: 'dynamic-multi-item',
  inject: ['fatherForm'],
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  render: function (h) {
    let self = this
    return h(
      'el-col',
      {
        props: {
          span: self.options.span || 24
        },
        class: self.options.class || self.options.colClass
      },
      self.options.children.map(child => {
        return child.prop ? renderFormItemType(h, child, self) : renderItemType(h, child, self)
      })
    )
  }
}
