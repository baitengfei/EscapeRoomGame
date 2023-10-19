import { _decorator, Component, Node, BASELINE_RATIO, tween, Sprite, color, Color, UIOpacity } from 'cc';
import { EventManager } from '../Manager/EventManager';
import { SceneManager } from '../Manager/SceneManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { GameData } from './GameData';
import { EventEnum } from './GameEnum';
import { SceneBase } from './SceneBase';
const { ccclass, property } = _decorator;

@ccclass('Scene_S4')
export class Scene_S4 extends SceneBase {
    @property({type:Node})
    mMainScene:Node;

    @property({type:Node})
    mScene_Sofa:Node;

    @property({type:Node})
    mItem_Key:Node;

    start() {
        this.mMainScene.active = false;
        this.mScene_Sofa.active = false;
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
        this.mScene_Sofa.active = false;
    }
    ToMainScene() {
        this.hideScene(this.mScene_Sofa);
        this.show();
    }

    goSofaScene() {
        // 隐藏当前的
        this.hide();

        // 展示现在的
        this.showScene(this.mScene_Sofa);
        this.mItem_Key.active = !GameData.ins().mUserData.mbGetItem_Key;

        // 通知场景管理器
        SceneManager.Instance.GoInterScene();
    }

    OnClickLeftTrigger() {
        SceneManager.Instance.GoLeftScene();
    }


    
    OnClick_Item_Key() {
        this.mItem_Key.active = false;
        EventManager.dispatch(EventEnum.UpdateItem);

        UIManager.Instance.ShowTips("找到了一个钥匙");        
        GameData.ins().mUserData.mbGetItem_Key = true;
        GameData.ins().SaveBaseData();
        UIManager.Instance.openUI(UIType.Bag);
    }

    

    onEnable() {
        
    }

    onDisable() {

    }
}

