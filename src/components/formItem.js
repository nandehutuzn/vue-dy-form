export default [
  [
    {
      type: 'el-input',
      label: '姓名',
      prop: 'name',
      props: {
        placeholder: '请输入姓名',
        clearable: true
      },
      rules: [
        {message: '请输入姓名', trigger: 'blur', required: true}]
    }
  ],
  [
    {
      type: 'el-radio-group',
      label: '性别',
      prop: 'sex',
      children: [
        {
          type: 'el-radio',
          props: {
            label: '1'
          },
          children: '男'
        },
        {
          type: 'el-radio',
          props: {
            label: '2'
          },
          children: '女'
        }
      ],
      rules: [{message: '请选择性别', trigger: 'blur', required: true}]
    }
  ],
  [
    {
      type: 'el-input',
      label: '手机',
      prop: 'mobile',
      span: 12,
      props: {
        placeholder: '带prepend-slot的input 表单',
        clearable: true
      },
      children: [
        {
          type: 'span',
          children: '+86',
          slot: 'prepend'
        }
      ]
    },
    {
      type: 'el-input',
      label: '手机',
      prop: 'mobile',
      span: 12,
      props: {
        placeholder: '带append-slot的input 表单',
        clearable: true
      },
      children: [
        {
          type: 'i',
          class: 'el-icon-search',
          slot: 'append'
        }
      ]
    }
  ],
  [
    {
      type: 'el-input',
      label: '籍贯',
      prop: 'address',
      props: {
        placeholder: '配合select的input 表单',
        clearable: true
      },
      children: [
        {
          type: 'el-select',
          prop: 'sheng',
          props: {
            placeholder: '请选择所在省'
          },
          slot: 'prepend',
          style: 'width: 150px;',
          children: [
            {
              type: 'el-option',
              props: {
                label: '江西省',
                value: 'JX'
              }
            },
            {
              type: 'el-option',
              props: {
                label: '广东省',
                value: 'GD'
              }
            },
            {
              type: 'el-option',
              props: {
                label: '陕西省',
                value: 'SX'
              }
            }
          ]
        }
      ],
      rules: [
        {
          validator: (rule, value, cb) => {
            cb()
          }
        }
      ]
    }
  ]
]
