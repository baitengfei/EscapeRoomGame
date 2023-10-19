
import { _decorator, Component, Node, Label, instantiate, Vec3, tween, UIOpacity } from 'cc';
import { UIBase } from '../Base/UIBase';
import { GameData } from '../Data/GameData';
const { ccclass, property } = _decorator;

@ccclass('UI_Tips')
export class UI_Tips extends UIBase {
    label:Label;

    onStart () {
        this.label=this.getLabel('bg/Info');
    }

    refresh() {
        if(!this.args){
            return;
         }
         this.label.string=this.args;

         this.unschedule(this.Hide);
         this.scheduleOnce(this.Hide, 1.2);
    }

    Hide() {
        let uiOpacity = this.getComponentInChildren(UIOpacity);
        uiOpacity.opacity = 255;

        tween(uiOpacity)
        .to(1, {opacity: 0})
        .call(()=>{
            this.node.destroy();
        })
        .start();
    }
}