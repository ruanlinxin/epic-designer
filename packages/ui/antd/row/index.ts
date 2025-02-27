import { type ComponentConfigModel } from "@epic-designer/utils";
export default {
  component: () => import("./row"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "epic-icon-zhage",
    childImmovable: true,
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12,
        },
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12,
        },
      },
    ],
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "垂直对齐方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "top",
              value: "top",
            },
            {
              label: "middle",
              value: "middle",
            },
            {
              label: "bottom",
              value: "bottom",
            },
          ],
          placeholder: "请选择",
        },
        field: "componentProps.align",
      },
      {
        label: "水平排列方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "start",
              value: "start",
            },
            {
              label: "end",
              value: "end",
            },
            {
              label: "center",
              value: "center",
            },
            {
              label: "space-around",
              value: "space-around",
            },
            {
              label: "space-around",
              value: "space-around",
            },
          ],
          placeholder: "请选择",
        },
        field: "componentProps.justify",
      },
      {
        label: "栅格间距",
        type: "input",
        field: "componentProps.gutter",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "列编辑",
        type: "EColEditor",
        field: "children",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
    ],
  },
} as ComponentConfigModel;
