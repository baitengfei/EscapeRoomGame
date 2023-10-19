import { _decorator, Component, Node, BASELINE_RATIO, tween, Sprite, color, Color, UIOpacity } from 'cc';
import { EventManager } from '../Manager/EventManager';
import { SceneManager } from '../Manager/SceneManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { GameData } from './GameData';
import { EventEnum } from './GameEnum';
import { SceneBase } from './SceneBase';
const { ccclass, property } = _decorator;

@ccclass('Scene_S1')
export class Scene_S1 extends SceneBase {
    @property({type:Node})
    mMainScene:Node;

    @property({type:Node})
    mScene_Desktop:Node;

    @property({type:Node})
    mItem_Phone:Node;

    start() {
        this.mMainScene.active = false;
        this.mScene_Desktop.active = false;
    }

    update(deltaTime: number) {
        
    }

    show() {  
    
        this.showScene(this.mMainScene);

    }
    hide() {
       
        this.hideScene(this.mMainScene);
        
        
    }
    hideAll() {
        this.mMainScene.active = false;
        this.mScene_Desktop.active = false;
    }
    ToMainScene() {
        this.hideScene(this.mScene_Desktop);
        this.show();
    }

    goDeskTopScene() {
        // 隐藏当前的
        this.hide();

        // 展示现在的
        this.showScene(this.mScene_Desktop);
        this.mItem_Phone.active = !GameData.ins().mUserData.mbGetItem_Phone;

        // 通知场景管理器
        SceneManager.Instance.GoInterScene();
    }

    OnClickLeftTrigger() {
        SceneManager.Instance.GoLeftScene();
    }

    

    OnClick_Item_PC() {
        UIManager.Instance.openUI(UIType.Item_PC);
    }
    
    OnClick_Item_Phone() {
        this.mItem_Phone.active = false;
        EventManager.dispatch(EventEnum.UpdateItem);

        UIManager.Instance.ShowTips("找到了一个手机");        
        GameData.ins().mUserData.mbGetItem_Phone = true;
        GameData.ins().SaveBaseData();
        UIManager.Instance.openUI(UIType.Bag);
    }

    

    onEnable() {
        
    }

    onDisable() {

    }
}

