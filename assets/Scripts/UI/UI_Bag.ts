
import { _decorator, Component, Node, Label, instantiate, Vec3, Tween, tween, UIMeshRenderer, Sprite, Color, Button } from 'cc';
import { UIBase } from '../Base/UIBase';
import { CfgUtil } from '../Config/CfgUtil';
import { GameData } from '../Data/GameData';
import { EventEnum } from '../Data/GameEnum';
import { EventManager } from '../Manager/EventManager';
import { GameManager } from '../Manager/GameManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { Tools } from '../Tool/Tools';
import { UI_Item_Phone } from './UI_Item_Phone';
import { UI_Item_Watch } from './UI_Item_Watch';
const { ccclass, property } = _decorator;

@ccclass('UI_Bag')
export class UI_Bag extends UIBase {

    Item_Phone:Node;
    Item_Watch:Node;
    Item_Key:Node;

    onStart() {
        this.Item_Phone = this.getNode("bg/Layout/Item_Phone");
        this.Item_Phone.on("click", this.OnClickPhone, this);


        this.Item_Watch = this.getNode("bg/Layout/Item_Watch");
        this.Item_Watch.on("click", this.OnClickWatch, this);


        this.Item_Key = this.getNode("bg/Layout/Item_Key");
        this.Item_Key.on("click", this.OnClickKey, this);

    }

    refresh() {
        this.UpdateItems();
    }
    UpdateItems() {
        this.Item_Phone.active = GameData.ins().mUserData.mbGetItem_Phone;
        this.Item_Watch.active = GameData.ins().mUserData.mbGetItem_Watch;

        this.Item_Key.active = GameData.ins().mUserData.mbGetItem_Key;
        if(GameData.ins().mUserData.mbUnlockDrawer) {
            this.Item_Key.getComponent(Sprite).color = Color.GRAY;
            this.Item_Key.getComponent(Button).interactable = false;

        }
    }

    OnClickPhone() {
        UIManager.Instance.openUI(UIType.Item_Phone);
        SoundManager.Instance.PlaySound("item");
    }
    
    OnClickWatch() {
        UIManager.Instance.openUI(UIType.Item_Watch);
        SoundManager.Instance.PlaySound("item");
    }
    
    OnClickKey() {
        SoundManager.Instance.PlaySound("item");
    
        if (SceneManager.Instance.mCurrentSceneIndex == 1) {
            GameData.ins().mUserData.mbUnlockDrawer = true;
            GameData.ins().SaveBaseData;

            UIManager.Instance.ShowTips("抽屉打开了");
            this.UpdateItems();

        }
        else {
            UIManager.Instance.ShowTips("一把钥匙");
        }
    }

    onEnable() {
        EventManager.addListener(EventEnum.UpdateItem, this.UpdateItems, this);
    }

    onDisable() {
        EventManager.removeListener(EventEnum.UpdateItem, this.UpdateItems);
    }

}

