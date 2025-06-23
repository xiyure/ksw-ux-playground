import { ComponentPublicInstance, VNode, VNodeTypes, Component, Slots } from 'vue';
export declare enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 2,
    STATEFUL_COMPONENT = 4,
    TEXT_CHILDREN = 8,
    ARRAY_CHILDREN = 16,
    SLOTS_CHILDREN = 32,
    TELEPORT = 64,
    SUSPENSE = 128,
    COMPONENT_SHOULD_KEEP_ALIVE = 256,
    COMPONENT_KEPT_ALIVE = 512,
    COMPONENT = 6
}
export declare function getElement<T extends Element>(selector: string, parent?: Element | Document): T | null;
export declare function getElementAll<T extends Element>(selector: string, parent?: Element | Document): T[];
export declare const isComponentInstance: (value: any) => value is ComponentPublicInstance;
export declare const isArrayChildren: (vn: VNode, _children: VNode["children"]) => _children is VNode[];
export declare const isElement: (vn: VNode) => boolean;
export declare const isComponent: (vn: VNode, _type?: VNodeTypes) => _type is Component;
export declare const isSlotsChildren: (vn: VNode, _children: VNode["children"]) => _children is Slots;
export declare const isText: (vn: VNode, _children: VNode["children"]) => _children is string;
export declare const isNamedComponent: (child: VNode, name: string) => boolean;
export declare const isTextChildren: (child: VNode, _children: VNode["children"]) => _children is string;
export declare const getFirstComponent: (children: VNode[] | undefined) => VNode | undefined;
export declare function isElementInContainerView(elRect: DOMRect | undefined, containerRect: DOMRect | undefined, direction?: 'horizontal' | 'vertical'): boolean | undefined;
export declare function isInputElement(el: Element | HTMLElement): el is HTMLInputElement | HTMLTextAreaElement;
export declare function isVueComponent(component: any): boolean;
