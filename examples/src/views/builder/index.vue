<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema" @ready="handleReady">
    </EBuilder>
    <div @click="handleGetData">
      获取数据
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { EBuilder, PageManager, PageSchema } from '@epic-designer/core'


const kfb = ref<any>(null)
async function handleGetData() {
  const values = await kfb.value?.getData()
  console.log(values)
}
const pageSchema = ref<PageSchema>({
  "schemas": [
    {
      "type": "page",
      "id": "root",
      "label": "页面",
      "children": [
        {
          "label": "表单",
          "type": "form",
          "icon": "epic-icon-daibanshixiang",
          "name": "default",
          "componentProps": {
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "labelPosition": "right",
            "size": "default",
            "requireAsteriskPosition": "left"
          },
          "children": [
            {
              "label": "上传文件",
              "type": "upload-file",
              "icon": "epic-icon-upload",
              "field": "upload",
              "input": true,
              "componentProps": {
                "action": "https://mock.presstime.cn/mock/6562298755736ae9dfa4646a/epic/upload",
                "name": "file",
                "showFileList": true
              },
              "id": "upload-file_by35flst"
            }
          ],
          "id": "form_uknia964"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
})

function handleReady(pageManager: PageManager) {
  console.log(pageManager)
}
// 表单赋值
onMounted(async () => {
  kfb.value?.setData({
    'upload': [{
      name: 'xxx',
      uid: 'xxx',
      status:
        "success",
      url: 'http://cdn.kcz66.com/%E5%A4%B4%E5%83%8F.jpg'
    }]
  })

  // const data = await kfb.value?.getData()
  const data = await kfb.value?.validate()
  console.log(data)
})


</script>
