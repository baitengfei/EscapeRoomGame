//管理事件，订阅、移除和触发

import { _decorator, Component, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventManager')
export class EventManager {

    //存储事件信息
    static eventList = {};

    //初始化事件列表，如果已经存在则不需要执行
    static init() {
        if (this.eventList) {
            return;
        }
        this.eventList = {};
    }

    //target 如果是非组件类需要加上字段 _id
    static addListener(eventName, callback, target) {
        this.init();
        //console.log("add lis ", eventName);//,callback,target);
        if (!this.eventList[eventName]) {
            this.eventList[eventName] = {};
        }
        if (!target) {
            console.error("target miss ", eventName);
            return;
        }
        var targetId = target._id;
        if (!targetId) {
            if (target.enum) {
                target._id = target.enum;
            }
        }
        this.eventList[eventName][targetId] = {
            callback: callback,
            target: target,
        };
    }

    //移除事件订阅
    static removeListener(eventName, target) {
        this.init();
        //console.log("rem lis ", eventName)//,target);
        if (!target) {
            console.error("target miss ", eventName);
            return;
        }
        var targetId = target._id;
        if (!targetId) {
            if (target.enum) {
                target._id = target.enum;
            }
        }
        if (!this.eventList[eventName] || !this.eventList[eventName][targetId]) {
            return;
        }
        else {
            delete this.eventList[eventName][targetId];
            //if(this.eventList[eventName])
        }
    }

    //触发事件订阅
    static dispatch(eventName, args:any=null)//arguments
    {
        this.init();
        // console.log("dispatch  ", eventName, "   args :", args);
        if (this.eventList && this.eventList[eventName]) {
            for (let k in this.eventList[eventName]) {
                this.eventList[eventName][k].callback.call(this.eventList[eventName][k].target, args);
            }
        }
    }
}

log("EventManager init over");

