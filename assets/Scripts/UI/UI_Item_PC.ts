
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween, TiledUserNodeData } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { Tools } from '../Tool/Tools';
import { SoundManager } from '../Manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('UI_Item_PC')
export class UI_Item_PC extends UIBase {

    mLabel_Info:Label;

    onStart() {
        this.mLabel_Info = this.getLabel("Info/Info");
        let Btn_Close = this.getNode("Btn_Close");
        Btn_Close.on("click", this.OnClickClose, this);
    }

    refresh() {
        SoundManager.Instance.PlaySound("item");
        this.mLabel_Info.string = "一台笔记本";      

    }

    onEnable() {

    }

    onDisable() {

    }
    

    OnClickClose() {
        this.close();
    }
   
}

