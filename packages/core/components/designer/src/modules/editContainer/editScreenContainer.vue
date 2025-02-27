<template>
  <div class="h-full flex flex-col relative">
    <!-- 工具条 start  -->
    <Toolbar />
    <!-- 工具条 end  -->

    <div ref="editScreenContainerRef" class="flex-1 overflow-auto overflow-y-hidden epic-edit-screen-container"
      :class="{ 'cursor-grab': pressSpace }" :draggable="pressSpace" @wheel="handleZoom"
      @dragstart="handleElementDragStart" @dragend="handleElementDragEnd" @drag="handleElementDrag">
      <div id="canvasContainer" class="flex items-center justify-center" :style="scrollBoxStyle">
        <div ref="draggableElRef" class="transition-all">
          <div :class="{ 'pointer-events-none': pressSpace }" :style="canvasBoxStyle">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <div ref="sizeBoxRef" class="absolute op-0 pointer-events-none" :style="sizeBoxStyle" />
  </div>
</template>
<script lang="ts" setup>
import { watchOnce, useElementSize, useResizeObserver } from '@vueuse/core'
import type { PageSchema } from '../../../../../types/epic-designer'

import { useShareStore, useElementDrag, useElementZoom } from '@epic-designer/utils'
import { ref, nextTick, inject, watch, shallowRef, unref, onMounted, UnwrapRef } from 'vue'
import Toolbar from './toolbar.vue'

const pageSchema = inject('pageSchema') as PageSchema

const editScreenContainerRef = ref<HTMLDivElement | null>(null)
const draggableElRef = ref<HTMLDivElement | null>(null)
const sizeBoxRef = ref<HTMLDivElement | null>(null)

const { pressSpace, disabledZoom } = useShareStore()
const { handleElementDragStart, handleElementDrag, handleElementDragEnd } = useElementDrag(editScreenContainerRef)
const { width, height } = useElementSize(editScreenContainerRef)
const { canvasScale, handleZoom } = useElementZoom(draggableElRef)

let contentRectWidth = 0
let contentRectHeight = 0

const scrollBoxStyle = ref<{
  width?: string,
  height?: string,
  transform?: string
}>({})
const canvasBoxStyle = ref<{
  width?: string,
  height?: string,
  transform?: string
}>({})
const sizeBoxStyle = ref<{
  width?: string,
  height?: string,
}>({})

const getCanvasAttribute = shallowRef<{
  width: number,
  height: number,
}>({ width: 0, height: 0 })
watch(() => ({ width: pageSchema.canvas?.width, height: pageSchema.canvas?.height }), updateSizeBoxStyle)
watch(sizeBoxStyle, () => {
  nextTick(updateCanvasAttribute)
})
onMounted(() => {
  updateSizeBoxStyle({ width: pageSchema.canvas?.width, height: pageSchema.canvas?.height })
})
function updateCanvasAttribute() {
  const sizeBox = unref(sizeBoxRef)
  if (!sizeBox) return
  getCanvasAttribute.value = {
    width: sizeBox.clientWidth,
    height: sizeBox.clientHeight
  }
}
function updateSizeBoxStyle({ width, height }: UnwrapRef<typeof sizeBoxStyle>) {
  sizeBoxStyle.value = {
    width: width ?? '0',
    height: height ?? '0'
  }
}

// 初始化页面样式
watchOnce(width, updateScrollBoxStyle)
// 动态适配设计区域宽度
watch(getCanvasAttribute, updateScrollBoxStyle)

function updateScrollBoxStyle() {
  if (disabledZoom.value) {
    // 禁用画布缩放功能
    canvasBoxStyle.value = { width: contentRectWidth + 'px', height: contentRectHeight + 'px', transform: 'translate(0px, 20px)' }
    return
  }
  let canvasWidth = getCanvasAttribute.value.width || contentRectWidth
  let canvasHeight = getCanvasAttribute.value.height || contentRectHeight
  scrollBoxStyle.value = { width: width.value + canvasWidth + 'px', height: height.value + canvasHeight + 'px' }
  canvasBoxStyle.value = { width: canvasWidth + 'px', height: canvasHeight + 'px' }

  // 调整位置
  setScroll()
}

function setScroll() {
  nextTick(() => {
    let canvasWidth = getCanvasAttribute.value.width || contentRectWidth
    let canvasHeight = getCanvasAttribute.value.height || contentRectHeight

    const scrollTop = canvasHeight / 2
    const scrollLeft = canvasWidth / 2
    editScreenContainerRef.value!.scrollTo(scrollLeft, scrollTop)
  })
}

/**
 * editScreenContainerRef 宽度变化，重置缩放
 */
useResizeObserver(editScreenContainerRef, ([{ contentRect }]) => {
  contentRectWidth = contentRect.width - 60
  contentRectHeight = contentRect.height - 80

  if (!disabledZoom.value) {
    // 启动画布缩放计算
    const scale = (contentRect.width - 20) / getCanvasAttribute.value.width
    // 超过1.2倍不自动缩放
    if (scale < 1.2) {
      canvasScale.value = scale
    }
  }

  updateScrollBoxStyle()
})


</script>
