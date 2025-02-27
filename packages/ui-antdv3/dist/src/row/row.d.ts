import { type PropType } from "vue";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
declare const _default: import("vue").DefineComponent<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        require: boolean;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        require: boolean;
        default: () => {};
    };
}>>, {
    componentSchema: ComponentSchema;
}, {}>;
export default _default;
