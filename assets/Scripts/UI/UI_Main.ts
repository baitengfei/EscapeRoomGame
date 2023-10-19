
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { Tools } from '../Tool/Tools';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UI_Main extends UIBase {

    Btn_Start:Node;
    Btn_Continue:Node;
    Btn_Restart:Node;
    onStart() {
        this.Btn_Start = this.getNode("Btn_Start");
        this.Btn_Start.on("click", this.OnClickStartGame, this);

        this.Btn_Continue = this.getNode("Btn_Continue");
        this.Btn_Continue.on("click", this.OnClickContinueGame, this);

        this.Btn_Restart = this.getNode("Btn_Restart");
        this.Btn_Restart.on("click", this.OnClickRestartGame, this);
    }

    refresh() {
        this.Btn_Start.active = GameData.ins().mUserData.isFirstLoign;
        this.Btn_Continue.active = !GameData.ins().mUserData.isFirstLoign;
        this.Btn_Restart.active = !GameData.ins().mUserData.isFirstLoign;
    }

    OnClickStartGame() {
        SoundManager.Instance.PlaySound("start", 1);
        GameManager.Instance.StartGame();
    }
    OnClickContinueGame() {
        SoundManager.Instance.PlaySound("start", 1);
        GameManager.Instance.ContinueGame();
    }
    OnClickRestartGame() {
        SoundManager.Instance.PlaySound("start", 1);
        GameManager.Instance.RestartGame();
    }
}

