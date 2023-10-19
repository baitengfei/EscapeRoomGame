import { _decorator, Component, Node, tween, Sprite, color, Color, UIOpacity, UIMeshRenderer, Animation } from 'cc';
import { EventManager } from '../Manager/EventManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { GameData } from './GameData';
import { EventEnum } from './GameEnum';
import { SceneBase } from './SceneBase';
const { ccclass, property } = _decorator;

@ccclass('Scene_S2')
export class Scene_S2 extends SceneBase {
    @property({type:Node})
    mMainScene:Node;


    @property({type:Node})
    mTrigger_Drawer:Node;

    @property({type:Node})
    mNode_OpenDrawer:Node;

    @property({type:Node})
    mNode_OpenedDrawer:Node;

    @property({type:Node})
    mTrigger_Watch:Node;


    start() {
        this.mMainScene.active = false;
      
      
        this.mTrigger_Drawer.active = false;
        this.mNode_OpenedDrawer.active = false;
       
    }

    update(deltaTime: number) {
        
    }

    show() {
        
        this.showScene(this.mMainScene);   
        this.mTrigger_Drawer.active = !GameData.ins().mUserData.mbOpenDrawer;
        this.mNode_OpenDrawer.active = false;
        this.mNode_OpenedDrawer.active = GameData.ins().mUserData.mbOpenDrawer;

        this.mTrigger_Watch.active = GameData.ins().mUserData.mbOpenDrawer && !GameData.ins().mUserData.mbGetItem_Watch;

       
        
    }
    hide() {
        this.hideScene(this.mMainScene);
    }
    hideAll() {
        this.mMainScene.active = false;
  
    }
    ToMainScene() {
  
        this.show();
    }

    OnClickLeftTrigger() {
        SceneManager.Instance.GoLeftScene();
    }
    
    
    ClickDrawer() {
        if(GameData.ins().mUserData.mbUnlockDrawer) {
            GameData.ins().mUserData.mbOpenDrawer = true;
            GameData.ins().SaveBaseData();

            this.mTrigger_Drawer.active = false;
            this.mNode_OpenDrawer.active = true;
            this.mNode_OpenDrawer.getComponent(Animation).play();
            this.mTrigger_Watch.active = true;

            UIManager.Instance.ShowTips("打开了抽屉");
            SoundManager.Instance.PlaySound("drawer", 1);


        }
        else {
            UIManager.Instance.ShowTips("抽屉是锁的");
            GameData.ins().mUserData.mbLockDrawerTips = true;
        
        }
       
        
           
    }

    ClickWatch() {
        GameData.ins().mUserData.mbGetItem_Watch = true;
        GameData.ins().SaveBaseData();
        
        this.mTrigger_Watch.active = false;
        EventManager.dispatch(EventEnum.UpdateItem);

        UIManager.Instance.ShowTips("一个智能手表");
        UIManager.Instance.openUI(UIType.Bag);
    }

   

    onEnable() {
    }

    onDisable() {
    }



    

}

