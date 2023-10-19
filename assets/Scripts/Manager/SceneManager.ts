import { Component, _decorator, Node, Prefab, instantiate } from "cc";
import { EventEnum } from "../Data/GameEnum";
import { EventManager } from "./EventManager";
import  ResManager  from "./ResManager";
import { SceneBase } from "../Data/SceneBase";
import { GameData } from "../Data/GameData";


const { ccclass, property } = _decorator;

@ccclass('SceneManager')
export class SceneManager extends Component {
    public static Instance:SceneManager = null!;

    onLoad() {
        SceneManager.Instance = this;
    }
    
    @property({type:Node})
    mSceneParentNode:Node;

    mSceneList:SceneBase[] = [];
    mSceneLoadCount = 0;
    start() {
        this.mSceneLoadCount = 0;
        // 加载场景分包资源
        let that = this;
        for (let i = 0; i < 4; i++) {
            let name = "S" + (i + 1);
            ResManager.Instance.LoadPrefab(name, name, (prefab:Prefab)=>{
                var sceneNode:Node = instantiate(prefab);
                sceneNode.active = true;
                sceneNode.parent = this.mSceneParentNode;
                sceneNode.name = name;

                that.mSceneLoadCount += 1;
                if (that.mSceneLoadCount == 4) {
                    that.LoadSceneFinish();
                }
            });
        }
    }

    LoadSceneFinish() {
        for (let i = 0; i < 4; i++) {
            let name = "S" + (i + 1);
            let sceneNode:Node = this.mSceneParentNode.getChildByName(name);
            let sceneBase:SceneBase = sceneNode.getComponent(SceneBase);

            this.mSceneList.push(sceneBase);
            sceneBase.hide();
        } 
    }

    InitScene() {
        this.mbBigScene = true;
        this.mCurrentSceneIndex = 0;
        this.mSceneList[this.mCurrentSceneIndex].show();
    }

    CloseAllScene() {
        for (let i = 0; i < this.mSceneList.length; i++) {
            const element = this.mSceneList[i];
            element.hideAll();
        }
    }

    // 大场景的索引
    mCurrentSceneIndex = 0;
    mbBigScene:boolean = false;
    mbNeedHideBackBtn:boolean = false;

    GoLeftScene() {

        
        if (this.mCurrentSceneIndex >= this.mSceneList.length - 1) {
            return;
        }
        

        let oldIndex = this.mCurrentSceneIndex;
        this.mCurrentSceneIndex += 1;

        this.mSceneList[oldIndex].hide();

        this.scheduleOnce(()=>{
            this.mSceneList[this.mCurrentSceneIndex].show();
        }, 0.5);

        EventManager.dispatch(EventEnum.ChangeScene);
    }

    GoRightScene() {
        if (this.mCurrentSceneIndex <= 0) {
            return;
        }
        let oldIndex = this.mCurrentSceneIndex;
        this.mCurrentSceneIndex -= 1;

        this.mSceneList[oldIndex].hide();
        this.scheduleOnce(()=>{
            this.mSceneList[this.mCurrentSceneIndex].show();
        }, 0.5);

        EventManager.dispatch(EventEnum.ChangeScene);
    }
    BackToMainScene() {
        this.mbBigScene = true;
        this.mSceneList[this.mCurrentSceneIndex].ToMainScene();
        EventManager.dispatch(EventEnum.ChangeScene);
    }
    GoInterScene() {
        this.mbBigScene = false;
        EventManager.dispatch(EventEnum.ChangeScene);
    }
}