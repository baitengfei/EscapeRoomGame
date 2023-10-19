import { Component, _decorator, macro } from 'cc';
import { SoundManager } from './SoundManager';
import { UIManager, UIType } from './UIManager';
import { GameData } from '../Data/GameData';
import { SceneManager } from './SceneManager'; 

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    public static Instance:GameManager = null!;

    onLoad() {
        GameManager.Instance = this;
        macro.ENABLE_MULTI_TOUCH = false;
        console.log("多点触控：", macro.ENABLE_MULTI_TOUCH);
    
    }

    start() {
        SoundManager.Instance.PlayBGM("bgm2");
        UIManager.Instance.openUI(UIType.Main);

        console.log("开始进入游戏了");
    
    }

    StartGame() {
        UIManager.Instance.closeUI(UIType.Main);
        UIManager.Instance.openUI(UIType.Dialogue);

        console.log("开始游戏了");
    
        GameData.ins().mUserData.isFirstLoign = false;
        GameData.ins().SaveBaseData();
    }

    ContinueGame() {
        UIManager.Instance.closeUI(UIType.Main);
        this.ShowScene();
    
    }

    RestartGame() {
        GameData.ins().InitData();
        GameData.ins().SaveBaseData();
        this.StartGame();
    
    }

    ShowScene() {
        SceneManager.Instance.InitScene();
        UIManager.Instance.openUI(UIType.Game);
        // 检测背包中是否有东西，如果有就打开背包
        if (GameData.ins().mUserData.mbGetItem_Phone 
        || GameData.ins().mUserData.mbGetItem_Key
        || GameData.ins().mUserData.mbGetItem_Watch) {
            UIManager.Instance.openUI(UIType.Bag);
        }
    }
}