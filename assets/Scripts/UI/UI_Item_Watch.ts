import { _decorator, Component, Node, Label } from 'cc';
import { UIBase } from '../Base/UIBase';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('UI_Item_Watch')
export class UI_Item_Watch extends UIBase {

    mLabel_Info:Label;

    onStart() {
        this.mLabel_Info = this.getLabel("Info/Info");
        let Btn_Close = this.getNode("Btn_Close");
        Btn_Close.on("click", this.OnClickClose, this);
    }

    refresh() {

        this.mLabel_Info.string = "一个智能手表，身份ID？";

        if (SceneManager.Instance.mCurrentSceneIndex == 2 ) {
            if (GameData.ins().mUserData.mbGetItem_Watch) {
                GameData.ins().mUserData.mbUnlockDoor = true;
                GameData.ins().SaveBaseData();

                this.ToOpenDoor();
            }
           
        }
    }

 

    ToOpenDoor() {
        if (SceneManager.Instance.mCurrentSceneIndex == 2) {
            EventManager.dispatch(EventEnum.OpenDoor);
        }
    }



    onEnable() {

    }

    onDisable() {

    }

    OnClickClose() {
        this.close();
    }
}

