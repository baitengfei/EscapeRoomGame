
// 加载游戏资源，显示进度条。加载完成后进入场景main

import { _decorator, assetManager, director, Sprite, Component } from "cc";
import { GameData } from "../Data/GameData";

const { ccclass, property } = _decorator;

@ccclass("LoadingManager")
export class LoadingManager extends Component {
    //载入子包（文件位置: Res/SubPackages/..）
    //需要动态加载的资源都应该放在该子包文件夹下
    readyLoadSubPackage:string[] =  ["Config", "UI", "Sound", "S1", "S2", "S3", "S4"];
    currentPackageIndex:number = 0;

    @property({type:Sprite})
    mProgress:Sprite;

    onLoad() {

    }

    start() {
        director.preloadScene("Main", ()=>{
            console.log("预加载主场景");
        });

        // 载入数据
        GameData.ins().LoadData();

        this.mProgress.fillRange = 0;
        this.LoadSubPackages();
    
    }

    LoadSubPackages() {
        let self = this;
        self.currentPackageIndex = 0;
        let subPackageName = self.readyLoadSubPackage[self.currentPackageIndex];
        self.LoadSubPackage(subPackageName);
    
    }

    LoadSubPackage(resName: string) {
        assetManager.loadBundle(resName, (err: any) => {
            if (err) {
                // 载入失败，暂时不用管，网页没有此方法会载入失败
                console.log("加载子包失败：" + resName);
            }
            else{
                // 载入成功
                console.log("加载子包成功：" + resName);
            }

            this.currentPackageIndex += 1;

            this.mProgress.fillRange = this.currentPackageIndex/this.readyLoadSubPackage.length;

            if (this.currentPackageIndex < this.readyLoadSubPackage.length)
            {
                let subPackageName = this.readyLoadSubPackage[this.currentPackageIndex];
                this.LoadSubPackage(subPackageName);
            }
            else {
                // 子包全部载入完毕
                this.LoadFinish();
            }
        });       
    
    }

    bLoadFinish:boolean = false;
    LoadFinish() {
        this.mProgress.fillRange = 1;
        this.bLoadFinish = true;
        director.loadScene("Main");
        
    }

}
