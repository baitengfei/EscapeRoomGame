//加载和获取不同类型的游戏配置数据。
import SingletonClass from '../Base/SingletonClass';

import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CfgUtil')
export class CfgUtil extends SingletonClass {
    mCfgMap:any = null;
    static ins() {
        return super.ins() as CfgUtil;
    }

    mList_UICfgs:any[] = [];

    loadCfgOver(cfgMap) {
        this.mCfgMap = cfgMap;
    }

    getUICfg(id:number) {
        if (!this.mCfgMap) {
            return;
        }
        
        let Cfg:any = {};
        let list = this.mCfgMap['UI'];
        for (let k in list) {
            if (list[k].id == id) {
                Cfg = list[k];
                break;
            }
        }
        
        return Cfg;
    }

    getCfg(id:number, cfgName:string) {
        if (!this.mCfgMap) {
            return;
        }
        
        let Cfg:any = {};
        let list = this.mCfgMap[cfgName];
        for (let k in list) {
            if (list[k].id == id) {
                Cfg = list[k];
                break;
            }
        }
        
        return Cfg;
    }

    getCfgList(cfgName:string) {
        if (!this.mCfgMap) {
            return;
        }
        
        let list = this.mCfgMap[cfgName];
        
        return list;
    }
}

