const t = {
  component: () => import("./index-eba8405e.mjs").then((e) => e.i),
  defaultSchema: {
    label: "输入框",
    type: "input",
    field: "input",
    icon: "epic-icon-write",
    input: !0,
    componentProps: {
      bordered: !0,
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "输入类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "number",
              value: "number"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, p = {
  component: async () => (await import("./index-eba8405e.mjs").then((e) => e.i)).Textarea,
  defaultSchema: {
    label: "文本域",
    type: "textarea",
    field: "textarea",
    icon: "epic-icon-edit",
    input: !0,
    componentProps: {
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "textarea",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "最小行数",
        type: "number",
        field: "componentProps.autoSize.minRows",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最大行数",
        type: "number",
        field: "componentProps.autoSize.maxRows",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "可清除",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, a = {
  component: () => import("./index-0924bbe9.mjs").then((e) => e.i),
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "epic-icon-number",
    field: "number",
    input: !0,
    componentProps: {
      style: { width: "100%" },
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入",
          size: "middle"
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "键盘快捷行为",
        type: "switch",
        field: "componentProps.keyboard"
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "精度",
        type: "number",
        field: "componentProps.precision",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "字符模式",
        type: "switch",
        field: "componentProps.stringMode"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, n = {
  component: async () => (await import("./index-eba8405e.mjs").then((e) => e.i)).InputPassword,
  defaultSchema: {
    label: "密码输入框",
    type: "password",
    icon: "epic-icon-mima",
    field: "password",
    input: !0,
    componentProps: {
      placeholder: "请输入",
      bordered: !0
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, i = {
  component: () => import("./Group-be1781e1.mjs").then((e) => e.G),
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "epic-icon-danxuan-cuxiantiao",
    field: "radio",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      optionType: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "option类型",
        type: "select",
        componentProps: {
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "button",
              value: "button"
            }
          ]
        },
        field: "componentProps.optionType"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, c = {
  component: () => import("./Group-bd36e0ca.mjs").then((e) => e.G),
  defaultSchema: {
    label: "多选框",
    type: "checkbox",
    icon: "epic-icon-duoxuan1",
    field: "checkbox",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ]
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "checkbox",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, r = {
  component: () => import("./index-31ed19d0.mjs").then((e) => e.i),
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "epic-icon-xiala",
    field: "select",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      listHeight: 256,
      placeholder: "请选择",
      placement: "bottomLeft"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "默认值",
        type: "select",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "label包装到value中",
        type: "switch",
        field: "componentProps.labelInValue"
      },
      {
        label: "设置弹窗高度",
        type: "number",
        field: "componentProps.listHeight"
      },
      {
        label: "模式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "multiple",
              value: "multiple"
            },
            {
              label: "tags",
              value: "tags"
            }
          ],
          placeholder: "请选择",
          allowClear: !0
        },
        field: "componentProps.mode"
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.showSearch"
      },
      {
        label: "选中选项后清空搜索框",
        type: "switch",
        field: "componentProps.autoClearSearchValue",
        show: ({ values: e }) => e.componentProps.mode && e.componentProps.showSearch
      },
      {
        label: "最大tag文本长度",
        type: "number",
        field: "componentProps.maxTagTextLength",
        show: ({ values: e }) => e.componentProps.mode
      },
      {
        label: "最大tag显示数",
        type: "number",
        field: "componentProps.maxTagCount",
        show: ({ values: e }) => e.componentProps.mode
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, d = {
  component: () => import("./index-00b2587b.mjs").then((e) => e.i),
  defaultSchema: {
    label: "滑块",
    type: "slider",
    icon: "epic-icon-menu",
    field: "slider",
    input: !0
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "slider",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      // {
      //   label: "键盘可控",
      //   type: "switch",
      //   field: "componentProps.keyboard",
      // },
      // {
      //   label: "范围选择",
      //   type: "switch",
      //   field: "componentProps.range",
      //   changeSync: true,
      //   onChange: ({ value, values }) => {
      //     if (value) {
      //       values.componentProps.defaultValue = [0, 100];
      //     } else {
      //       values.componentProps.defaultValue = 0;
      //     }
      //   },
      // },
      {
        label: "倒转轨道",
        type: "switch",
        field: "componentProps.reverse"
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "垂直模式",
        type: "switch",
        field: "componentProps.vertical"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "afterChange",
        describe: "与mouseup触发时机一致"
      },
      {
        type: "change",
        describe: "拖拽结束改变值时"
      }
    ]
  },
  bindModel: "value"
}, s = {
  component: () => import("./index-afefcf4b.mjs").then((e) => e.i),
  defaultSchema: {
    label: "时间选择器",
    type: "time",
    icon: "epic-icon-time",
    field: "time",
    input: !0,
    componentProps: {
      valueFormat: "HH:mm:ss",
      size: "middle",
      placement: "bottomLeft",
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "time",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
        onChange: (e) => {
          e.values.componentProps.format = e.value;
        }
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "小时选项间隔",
        type: "number",
        field: "componentProps.hourStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "分钟选项间隔",
        type: "number",
        field: "componentProps.minuteStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "秒选项间隔",
        type: "number",
        field: "componentProps.secondStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, b = {
  component: () => import("./datePicker-aa3ecd21.mjs"),
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "epic-icon-calendar",
    field: "date",
    input: !0,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      type: "date",
      placeholder: "请选择"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.placement"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: e }) => e.componentProps.type !== "daterange"
      },
      {
        label: "开始占位符",
        type: "input",
        field: "componentProps.placeholder.0",
        show: ({ values: e }) => e.componentProps.type === "daterange"
      },
      {
        label: "结束占位符",
        type: "input",
        field: "componentProps.placeholder.1",
        show: ({ values: e }) => e.componentProps.type === "daterange"
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
        onChange: (e) => {
          e.values.componentProps.format = e.value;
        }
      },
      {
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "日期",
              value: "date"
            },
            {
              label: "月份",
              value: "month"
            },
            {
              label: "日期范围",
              value: "daterange"
            }
          ],
          placeholder: "请选择"
        },
        onChange: ({ value: e, values: l }) => {
          e === "daterange" ? l.componentProps.placeholder = ["开始日期", "结束日期"] : l.componentProps.placeholder = "请输入";
        }
      },
      {
        label: "边框",
        type: "radio",
        componentProps: {
          options: [
            {
              label: "有",
              value: void 0
            },
            {
              label: "无",
              value: !1
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.bordered"
      },
      {
        label: "增加时间选择",
        type: "switch",
        field: "componentProps.showTime"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, m = {
  component: () => import("./index-89122dbc.mjs").then((e) => e.i),
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    field: "cascader",
    icon: "epic-icon-guanlian",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      placement: "bottomLeft"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.showSearch"
      },
      {
        label: "最大tag文本长度",
        type: "number",
        field: "componentProps.maxTagTextLength",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "最大tag显示数",
        type: "number",
        field: "componentProps.maxTagCount",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: !0
        }
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, u = {
  component: () => import("./index-58590ed5.mjs").then((e) => e.i),
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "epic-icon-kaiguan3",
    field: "switch",
    input: !0,
    componentProps: {}
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue"
      },
      {
        label: "选中时内容",
        type: "input",
        field: "componentProps.checkedChildren",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "非选中时内容",
        type: "input",
        field: "componentProps.unCheckedChildren",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "checked"
}, f = {
  component: () => import("./uploadImage-013816b6.mjs"),
  defaultSchema: {
    label: "上传图片",
    type: "upload-image",
    icon: "epic-icon-image",
    field: "uploadImage",
    input: !0,
    componentProps: {
      action: "https://mock.presstime.cn/mock/6562298755736ae9dfa4646a/epic/upload"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.maxCount",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, y = {
  component: () => import("./uploadFile-2852f123.mjs"),
  defaultSchema: {
    label: "上传文件",
    type: "upload-file",
    icon: "epic-icon-upload",
    field: "uploadFile",
    input: !0,
    componentProps: {
      action: "https://mock.presstime.cn/mock/6562298755736ae9dfa4646a/epic/upload"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.maxCount",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, h = {
  component: () => import("./card-1a63128d.mjs"),
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    icon: "epic-icon-qiapian",
    children: []
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, P = {
  component: () => import("./row-5b51da99.mjs"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "epic-icon-zhage",
    childImmovable: !0,
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      }
    ]
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
              value: "top"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "bottom",
              value: "bottom"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.align"
      },
      {
        label: "水平排列方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "start",
              value: "start"
            },
            {
              label: "end",
              value: "end"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "space-around",
              value: "space-around"
            },
            {
              label: "space-around",
              value: "space-around"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.justify"
      },
      {
        label: "栅格间距",
        type: "input",
        field: "componentProps.gutter",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "列编辑",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, v = {
  component: () => import("./col-6daae41d.mjs"),
  defaultSchema: {
    label: "栅格布局-列",
    type: "col",
    icon: "epic-icon-xiala",
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: "占位格数",
        type: "number",
        field: "componentProps.span"
      }
    ]
  }
}, g = {
  component: () => import("./form-0ddb68c3.mjs"),
  defaultSchema: {
    label: "表单",
    type: "form",
    icon: "epic-icon-daibanshixiang",
    componentProps: {
      layout: "horizontal",
      name: "default",
      labelWidth: 100,
      labelLayout: "fixed",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: !1,
      colon: !0,
      labelAlign: "right",
      size: "middle"
    },
    children: []
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "标签布局",
        type: "radio",
        field: "componentProps.labelLayout",
        componentProps: {
          options: [
            {
              label: "固定宽度",
              value: "fixed"
            },
            {
              label: "自适应宽度",
              value: "flex"
            }
          ]
        }
      },
      {
        label: "labelWidth",
        type: "input",
        field: "componentProps.labelWidth",
        show: ({ values: e }) => {
          var l;
          return ((l = e.componentProps) == null ? void 0 : l.labelLayout) === "fixed";
        }
      },
      {
        label: "labelCol",
        type: "input",
        field: "componentProps.labelCol.span",
        show: ({ values: e }) => {
          var l;
          return ((l = e.componentProps) == null ? void 0 : l.labelLayout) === "flex";
        }
      },
      {
        label: "wrapperCol",
        type: "input",
        field: "componentProps.wrapperCol.span",
        show: ({ values: e }) => {
          var l;
          return ((l = e.componentProps) == null ? void 0 : l.labelLayout) === "flex";
        }
      },
      {
        label: "显示冒号",
        type: "switch",
        field: "componentProps.colon"
      },
      {
        label: "对齐方式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        },
        field: "componentProps.labelAlign"
      },
      {
        label: "标签文本换行",
        type: "switch",
        field: "componentProps.labelWrap"
      },
      {
        label: "表单布局",
        type: "select",
        componentProps: {
          options: [
            {
              label: "horizontal",
              value: "horizontal"
            },
            {
              label: "vertical",
              value: "vertical"
            },
            {
              label: "inline",
              value: "inline"
            }
          ]
        },
        field: "componentProps.layout"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      // {
      //   label: "禁用",
      //   type: "switch",
      //   field: "componentProps.disabled",
      // },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    action: [
      {
        type: "getData",
        describe: "获取表单数据"
      },
      {
        type: "setData",
        describe: "设置表单数据"
      },
      {
        type: "validate",
        describe: "校验表单"
      }
    ]
  }
}, w = {
  component: () => import("./formItem-36e845df.mjs"),
  defaultSchema: {
    label: "表单项",
    type: "form-item",
    icon: "epic-icon-qiapian"
  },
  config: {}
}, C = {
  component: () => import("./button-2bd09193.mjs"),
  defaultSchema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "epic-icon-button-remove",
    input: !1,
    componentProps: {}
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "primary",
              value: "primary"
            },
            {
              label: "ghost",
              value: "ghost"
            },
            {
              label: "dashed",
              value: "dashed"
            },
            {
              label: "link",
              value: "link"
            },
            {
              label: "text",
              value: "text"
            },
            {
              label: "default",
              value: "default"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "链接",
        type: "input",
        field: "componentProps.href",
        componentProps: {
          allowClear: !0,
          placeholder: "请输入"
        }
      },
      {
        label: "链接打开方式",
        type: "select",
        field: "componentProps.target",
        show: ({ values: e }) => e.componentProps.href,
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "blank",
              value: "_blank"
            },
            {
              label: "parent",
              value: "_parent"
            },
            {
              label: "self",
              value: "_self"
            },
            {
              label: "top",
              value: "_top"
            }
          ]
        }
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "形状",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "circle",
              value: "circle"
            },
            {
              label: "round",
              value: "round"
            }
          ]
        },
        field: "componentProps.shape"
      },
      {
        label: "危险按钮",
        type: "switch",
        field: "componentProps.danger"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    event: [
      {
        type: "click",
        describe: "点击按钮时"
      },
      {
        type: "dblclick",
        describe: "双击按钮时"
      }
    ]
  }
}, E = {
  component: () => import("./modal-9f03209f.mjs"),
  defaultSchema: {
    label: "模态框",
    type: "modal",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "title"
      }
    ]
  }
}, x = {
  component: () => import("./index-eba8405e.mjs").then((e) => e.i),
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
    icon: "epic-icon-yanse",
    input: !0,
    componentProps: {
      type: "color",
      style: {
        width: "80px"
      }
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ],
    action: []
  },
  bindModel: "value"
};
function R(e) {
  e.component(
    "Collapse",
    async () => await import("./index-c836206b.mjs").then((o) => o.i)
  ), e.component(
    "CollapseItem",
    async () => await import("./CollapsePanel-c6fe6e2b.mjs").then((o) => o.C)
  ), e.component(
    "Tabs",
    async () => await import("./index-e18cb4bd.mjs").then((o) => o.i)
  ), e.component(
    "TabPane",
    async () => (await import("./index-e18cb4bd.mjs").then((o) => o.i)).TabPane
  ), [
    g,
    w,
    t,
    p,
    a,
    n,
    i,
    c,
    r,
    d,
    s,
    b,
    m,
    u,
    f,
    y,
    x,
    C,
    h,
    P,
    v,
    E
  ].forEach((o) => {
    e.registerComponent(o);
  });
}
export {
  R as setupAntdV3
};
