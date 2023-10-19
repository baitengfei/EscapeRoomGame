import { sys, _decorator } from "cc";
import { GameData } from "../Data/GameData";
import { EventEnum } from "../Data/GameEnum";
import { EventManager } from "../Manager/EventManager";
import { UIManager } from "../Manager/UIManager";
import { WXAPI } from "./WXAPI";

const { ccclass, property } = _decorator;

@ccclass
export default class GameAd {
    private static _instance: GameAd = null;
    public static getInstance() {
        if (this._instance == null)
            this._instance = new GameAd();

        return this._instance;
    }

    public SendAdReward() {
        console.log("发放广告奖励");
        if (this.mAdCallBack != null) {
            this.mAdCallBack();
        }
    }

    mAdCallBack:any;
    mFailCallBack:any;
    public ShowAd(_callBack: any, _failBack: any = null) {
        this.mAdCallBack = _callBack;
        this.mFailCallBack = _failBack;
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            let self = this;
            WXAPI.ins().CreateAd("adunit-7ed55f4bda385fee", (bLookOver)=>{
                if (bLookOver) {
                    self.mAdCallBack();
                }
                else {
                    if (self.mFailCallBack != null) {
                        self.mFailCallBack();
                    }
                    UIManager.Instance.ShowTips("广告观看时间不足，无法领取奖励");
                }
            });
            WXAPI.ins().ShowAd("adunit-7ed55f4bda385fee");
        }
        else {
            _callBack();
        }
    }
}
window["GameAd"] = GameAd.getInstance();