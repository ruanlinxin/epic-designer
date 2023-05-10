import { ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => await import('../src/KCard'),
  defaultSchema: {
    label: '卡片布局',
    type: 'card',
    icon: 'icon-xiala',
    children: []
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'label'
      }
    ]
  }
} as ComponentConfigModel
