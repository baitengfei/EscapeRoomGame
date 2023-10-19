
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween, sys } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { WXAPI } from '../SDK/WXAPI';
import { Tools } from '../Tool/Tools';
const { ccclass, property } = _decorator;

@ccclass('UI_Win')
export class UI_Win extends UIBase {

    onStart() {

        let Btn_Back = this.getNode("logo");
        Btn_Back.on("click", this.OnClickBack, this);
    }

    refresh() {
        SoundManager.Instance.PlaySound("success", 1);
    }



    OnClickBack() {
        this.close();
        UIManager.Instance.openUI(UIType.Main);
        SceneManager.Instance.CloseAllScene();
    }


}

