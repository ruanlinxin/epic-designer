import { type ComponentConfigModel } from '@epic-designer/utils'
export default {
  component: () => import('ant-design-vue/lib/radio/Group'),
  defaultSchema: {
    label: '单选框',
    type: 'radio',
    icon: 'epic-icon-danxuan-cuxiantiao',
    field: 'radio',
    input: true,
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '选项1'
        },
        {
          label: '选项2',
          value: '选项2'
        }
      ],
      optionType: 'default'
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '默认值',
        type: 'radio',
        field: 'componentProps.defaultValue'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: 'option类型',
        type: 'select',
        componentProps: {
          options: [
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'button',
              value: 'button'
            }
          ]
        },
        field: 'componentProps.optionType'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
