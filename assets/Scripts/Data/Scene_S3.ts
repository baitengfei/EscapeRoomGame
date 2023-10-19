import { _decorator, Component, Node, UIMeshRenderer, Animation } from 'cc';
import { EventManager } from '../Manager/EventManager';
import { SceneManager } from '../Manager/SceneManager';
import { SoundManager } from '../Manager/SoundManager';
import { UIManager, UIType } from '../Manager/UIManager';
import { GameData } from './GameData';
import { EventEnum } from './GameEnum';
import { SceneBase } from './SceneBase';
const { ccclass, property } = _decorator;

@ccclass('Scene_S3')
export class Scene_S3 extends SceneBase {
    @property({type:Node})
    mMainScene:Node;


    @property({type:Node})
    mNode_Door:Node;

    @property({type:Node})
    mNode_DoorAnim:Node;

    start() {
        this.mMainScene.active = false;
        this.mNode_Door.active = true;
        this.mNode_DoorAnim.active = false;
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
 
    }
    ToMainScene() {
    
        this.show();
    }
    

    mClickDoorTimes:number = 0;

    OnClickLeftTrigger() {
        SceneManager.Instance.GoLeftScene();
    }

    ClickBigDoor() {
        if (GameData.ins().mUserData.mbUnlockDoor) {
            this.OpenDoor();
        }
        else {
            SoundManager.Instance.PlaySound("lock");
            if (GameData.ins().mUserData.mbLockDoorTips) {
                UIManager.Instance.ShowTips("这个锁没有钥匙孔，要用特殊工具解开");
            }
            else {
                this.mClickDoorTimes += 1;

                if (this.mClickDoorTimes == 1) {
                    UIManager.Instance.ShowTips("我居然被锁了，恶作剧吗这是");
                }
                if (this.mClickDoorTimes == 2) {
                    UIManager.Instance.ShowTips("这个锁没有钥匙孔，怎么打开");
                }
                GameData.ins().mUserData.mbLockDoorTips = true;
            }
        }
    }

    OpenDoor() {
        UIManager.Instance.closeUI(UIType.Item_Watch);
        UIManager.Instance.closeUI(UIType.Bag);
        UIManager.Instance.closeUI(UIType.Game);

        this.mNode_Door.active = false;
        this.mNode_DoorAnim.active = true;
        this.mNode_DoorAnim.getComponent(Animation).play();

        this.scheduleOnce(()=>{
            UIManager.Instance.openUI(UIType.Win);
        }, 1.0);
    }

    onEnable() {
        EventManager.addListener(EventEnum.OpenDoor, this.OpenDoor, this);
    }

    onDisable() {
        EventManager.removeListener(EventEnum.OpenDoor, this.OpenDoor);
    }

    OnClickLockDoor() {
        UIManager.Instance.ShowTips("门是锁的");
    }
}

