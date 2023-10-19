
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { Tools } from '../Tool/Tools';
const { ccclass, property } = _decorator;

@ccclass('UI_Dialogue')
export class UI_Dialogue extends UIBase {

    mLabel_Info:Label;

    mInfoDatas = [
        "我这是在哪",
        "对了，在小扎的民宿里",
        "他说安装了一些智能设备，还说要教我怎么用",
        "切，这还用教，看不起谁呢",
        "不过，怎么开灯?"
    ];

    onStart() {
        this.mLabel_Info = this.getLabel("bg/Info");

        let Btn_Next = this.getNode("Btn_Next");
        Btn_Next.on("click", this.OnClickNextDialogue, this);
    }

    mDialogueIndex = 0;
    refresh() {
        this.mDialogueIndex = 0;
        this.mLabel_Info.string = this.mInfoDatas[this.mDialogueIndex];
    }

    onEnable() {

    }

    onDisable() {

    }

    OnClickNextDialogue() {
        this.mDialogueIndex += 1;
        if (this.mDialogueIndex < this.mInfoDatas.length) {
            this.mLabel_Info.string = this.mInfoDatas[this.mDialogueIndex];
        }
        else {
            this.close();
            GameManager.Instance.ShowScene();
        }
    }
}

