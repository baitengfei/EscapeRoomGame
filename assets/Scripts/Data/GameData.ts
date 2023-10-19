//done
// 游戏数据
import SingletonClass from '../Base/SingletonClass';
import { SoundManager } from '../Manager/SoundManager';
import { WXAPI } from '../SDK/WXAPI';

import { _decorator, Component, sys } from 'cc';
import { CBaseData, EventEnum } from './GameEnum';
import { Tools } from '../Tool/Tools';
import { CfgUtil } from '../Config/CfgUtil';
import { EventManager } from '../Manager/EventManager';
import { UIManager, UIType } from '../Manager/UIManager';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData extends SingletonClass {

    static ins() {
        return super.ins() as GameData;
    }

    // 是否能够调用广告
    mbCanUseAd:boolean = false;

    // 基础数据
    mUserData:CBaseData = new CBaseData();


    //#region  设置数据
    BGM_Mute: boolean = false;
    Sound_Mute: boolean = false;
    Shake_Mute: boolean = false;
    Guide_Close:boolean = false;

    LoadSetData() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            this.BGM_Mute = WXAPI.getStorageSync("BGM") == "1";
            this.Sound_Mute = WXAPI.getStorageSync("Sound") == "1";
            this.Shake_Mute = WXAPI.getStorageSync("Shake") == "1";
            this.Guide_Close = WXAPI.getStorageSync("Guide") == "1";
        }
        else {
            this.BGM_Mute = localStorage.getItem("BGM") == "1";
            this.Sound_Mute = localStorage.getItem("Sound") == "1";
            this.Shake_Mute = localStorage.getItem("Shake") == "1";
            this.Guide_Close = localStorage.getItem("Guide") == "1";
        }

        SoundManager.Instance.InitData();
    }

    SaveData_BGM() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            WXAPI.setStorageSync("BGM", this.BGM_Mute ? "1" : "0");
        }
        else {
            localStorage.setItem("BGM", this.BGM_Mute ? "1" : "0");
        }
    }

    SaveData_Sound() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            WXAPI.setStorageSync("Sound", this.Sound_Mute ? "1" : "0");
        }
        else {
            localStorage.setItem("Sound", this.Sound_Mute ? "1" : "0");
        }
    }

    SaveData_Shake() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            WXAPI.setStorageSync("Shake", this.Shake_Mute ? "1" : "0");
        }
        else {
            localStorage.setItem("Shake", this.Shake_Mute ? "1" : "0");
        }
    }

    SaveData_Guide() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            WXAPI.setStorageSync("Guide", this.Guide_Close ? "1" : "0");
        }
        else {
            localStorage.setItem("Guide", this.Guide_Close ? "1" : "0");
        }
    }

    //#endregion

    //设置单人信息(好友排行)
    setFriend_BestInfo(data) {
        if (sys.platform !== sys.Platform.WECHAT_GAME) {
            return;
        }

        WXAPI.openDataSet('level', "" + data.level);
        WXAPI.openDataSet('specLevel', "" + data.specLevel);
    }

    //#region 本地信息存储
    setStorageValue(name:string, value:string) {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            WXAPI.setStorageSync(name, value);
        }
        else {
            localStorage.setItem(name, value);
        }
    }

    getStorageValue(name:string, defaultValue:any){
        let returnValue;
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            returnValue = WXAPI.getStorageSync(name)
        }
        else {
            returnValue = localStorage.getItem(name)
        }

        if (returnValue == "" || returnValue == null) {
            returnValue = defaultValue;
        }
        return returnValue;
    }

    //#endregion

    LoadData() {
        let userData = this.getStorageValue("BaseData", "");
        if (userData != "") {
            this.mUserData = JSON.parse(userData);
        }
        else {
            this.InitData();
        }
    }

    InitData() {
        this.mUserData.isFirstLoign = true;
        this.mUserData.mbGetItem_Phone = false;
        this.mUserData.mbOpenDrawer = false;
        this.mUserData.mbGetItem_Watch = false;
        this.mUserData.mbUnlockDoor = false;
        this.mUserData.mbLockDoorTips = false;
    }

    SaveBaseData() {
        GameData.ins().mUserData.mLastSaveTimeStamp = Tools.getTimeStamp();
        this.setStorageValue("BaseData", JSON.stringify(this.mUserData));
    }

}
