import { defineComponent, h, renderSlot, PropType } from 'vue'
import { ElCollapse } from 'element-plus'
import { NodeItem } from '../../../types/kDesigner'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      required: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record?.label ?? ''
      } as any
      const children = record.children
      delete record.children

      return h(ElCollapse, record, {
        default: () => [
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: any) =>
              renderSlot(slots, 'node', { record })
            )
          )
        ]
      })
    }
  }
})
