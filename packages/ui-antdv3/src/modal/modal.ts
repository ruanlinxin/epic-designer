import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
import Modal from "ant-design-vue/lib/modal";
import Button from "ant-design-vue/lib/button";
import Space from "ant-design-vue/lib/space";
const dialogStyle = {
  position: "absolute",
  right: "150px",
  left: "150px",
  minWidth: "700px",
  width: "auto",
  top: "56px",
  bottom: "30px",
  minHeight: "500px",
};

const bodyStyle = {
  height: "calc(100vh - 108px)",
  padding: 0,
};

export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      default: () => ({}),
    },
  },
  emits: ["ok", "close", "update:modelValue"],

  setup(props, { attrs, slots, emit }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        ...attrs,
        title: props.componentSchema?.label ?? "",
        wrapClassName: "epic-modal-ant",
        visible: attrs.modelValue,
        "onUpdate:visible": handleClose,
        style: "top:20px",
        bodyStyle,
        dialogStyle,
        footer: null,
      } as Record<string, any>;
      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      let vNodeClildren: any = null;
      if (children.length) {
        vNodeClildren = () =>
          children.map((node: ComponentSchema) =>
            renderSlot(slots, "node", { componentSchema: node })
          );
      } else {
        vNodeClildren = () => [renderSlot(slots, "default")];
      }

      function handleOk() {
        emit("ok");
      }

      function handleClose() {
        emit("update:modelValue", false);
        emit("close");
      }

      return h(Modal, componentSchema, {
        default: () => [
          h(
            "div",
            { class: "epic-modal-main" },
            renderSlot(slots, "edit-node", {}, vNodeClildren)
          ),
          h(
            "div",
            { class: "epic-modal-footer" },
            h(
              Space,
              { align: "end" },
              {
                default: () => [
                  h(
                    Button,
                    { onClick: handleClose },
                    {
                      default: () => "关闭",
                    }
                  ),
                  h(
                    Button,
                    { type: "primary", onClick: handleOk },
                    {
                      default: () => componentSchema.okText ?? "确定",
                    }
                  ),
                ],
              }
            )
          ),
        ],
      });
    };
  },
});
