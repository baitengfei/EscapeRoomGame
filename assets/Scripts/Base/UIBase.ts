
//UI 组件基类，其中包含了一些用于获取节点和组件如Sprite/Label等的方法，以及刷新 UI 内容的基本结构。其他具体的 UI 组件可以继承自这个基类，并在其基础上实现特定的 UI 行为和功能。

import { UIType, UIManager } from "../Manager/UIManager";

import { _decorator, Component, Label, Node, Toggle, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIBase')
export class UIBase extends Component {
    //用于传递给 UI 组件的参数
    args: any;
    addListener: any;

    bDestroyMode:boolean = false;
    type:UIType = 0;

    _init() {
        
    }

    //实例化调用一次
    onStart() {

    }

    //刷新 UI 内容
    refreshBase(args:any=null) {
        this.args = args;
        //log(" refresh base ",args);
        if (typeof (this.refresh) == "function") {
            this.refresh();
        }
        if (typeof (this.addListener) == "function") {
            this.addListener();
        }
    }
    refresh() { }

    close() {
        UIManager.Instance.closeUI(this.type);
    }

    getNode(name:string, node:Node = null!) {
        if (node == null) {
            node = this.node;
        }

        let returnNode:Node = null!;
        let childNode = node.getChildByPath(name);
        if (childNode != null) {
            returnNode = childNode;
        }
        
        return returnNode;
    }
    
    getLabel(name:string, node:Node = null!) {
        if (node == null) {
            node = this.node;
        }
        let label:Label =  null!;
        let childNode = node.getChildByPath(name);
        if (childNode != null) {
            let temp = childNode.getComponent(Label);
            if (temp != null) {
                label = temp;
            }
        }
        
        return label;
    }

    getToggle(name:string) {
        let tog:Toggle =  null!;
        let childNode = this.node.getChildByPath(name);
        if (childNode != null) {
            let temp = childNode.getComponent(Toggle);
            if (temp != null) {
                tog = temp;
            }
        }
        
        return tog;
    }

    getSprite(name:string, node:Node = null!) {
        if (node == null) {
            node = this.node;
        }
        let sprite:Sprite =  null!;
        let childNode = node.getChildByPath(name);
        if (childNode != null) {
            let temp = childNode.getComponent(Sprite);
            if (temp != null) {
                sprite = temp;
            }
        }
        
        return sprite;
    }
}
