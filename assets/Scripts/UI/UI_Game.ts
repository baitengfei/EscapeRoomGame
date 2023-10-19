
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween, game } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import GameAd from '../SDK/GameAd';
import { Tools } from '../Tool/Tools';
const { ccclass, property } = _decorator;

@ccclass('UI_Game')
export class UI_Game extends UIBase {

    Btn_Left:Node;
    Btn_Right:Node;
    Btn_Back:Node;

    TipsNode:Node;
    TipsContent:Node;

    onStart() {
        this.Btn_Left = this.getNode("Btn_Left");
        this.Btn_Left.on("click", this.OnClickLeft, this);

        this.Btn_Right = this.getNode("Btn_Right");
        this.Btn_Right.on("click", this.OnClickRight, this);

        this.Btn_Back = this.getNode("Btn_Back");
        this.Btn_Back.on("click", this.OnClickBack, this);

        this.TipsNode = this.getNode("Tips");
        this.TipsNode.on("click", this.OnClickTips, this);
        this.TipsContent = this.getNode("Tips/Tips_content");
    }

    refresh() {
        this.updateBtns();
    }

    updateBtns() {
        
        this.Btn_Back.active = !SceneManager.Instance.mbBigScene;
        this.Btn_Left.active = false;
        this.Btn_Right.active = SceneManager.Instance.mbBigScene;

        // 根据场景检测隐藏左右箭头
        if (SceneManager.Instance.mCurrentSceneIndex == 0) {
            this.Btn_Right.active = false;
        }
        if (SceneManager.Instance.mbNeedHideBackBtn) {
            this.Btn_Back.active = false;
        }
        //捡到手机后显示 Tips 图标
        this.TipsNode.active = GameData.ins().mUserData.mbGetItem_Phone;
        this.TipsContent.active = this.mbShowTipsContent;
    }

    OnClickLeft() {
        SoundManager.Instance.PlaySound("click", 1);
        SceneManager.Instance.GoLeftScene();
        this.updateBtns();
    }
    OnClickRight() {
        SoundManager.Instance.PlaySound("click", 1);
        SceneManager.Instance.GoRightScene();
        this.updateBtns();
    }
    OnClickBack() {
        SoundManager.Instance.PlaySound("click", 1);
        SceneManager.Instance.BackToMainScene();
        this.updateBtns();
    }

    mbShowTipsContent:boolean = false;
    OnClickTips() {

        this.ProcessTipsContent();
        
    }

    ProcessTipsContent() {
        this.mbShowTipsContent = true;
        this.TipsContent.active = true;
        let tips = "";

        if(!GameData.ins().mUserData.mbLockDrawerTips) {
            tips = "找找抽屉";
        }
        else if(!GameData.ins().mUserData.mbUnlockDrawer) {
            tips = "找找钥匙";
        
        }
        else if(!GameData.ins().mUserData.mbUnlockDoor) {
            tips = "手表可以解锁大门";
        }

        this.TipsContent.getComponentInChildren(Label).string = tips;
    }

    onEnable() {
        EventManager.addListener(EventEnum.ChangeScene, this.updateBtns, this);
    }

    onDisable() {
        EventManager.removeListener(EventEnum.ChangeScene, this.updateBtns);
    }

}

