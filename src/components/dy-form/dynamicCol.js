import { renderItemType, renderFormItemType } from '../../utils/index'

export default {
  name: 'dynamic-col',
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
        }
      },
      [
        self.options.prop ? renderFormItemType(h, self.options, self) : renderItemType(h, self.options, self)
      ]
    )
  }
}
