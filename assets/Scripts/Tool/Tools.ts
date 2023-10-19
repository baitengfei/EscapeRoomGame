//done

import { _decorator, Component, Node } from 'cc';
import { CfgUtil } from '../Config/CfgUtil';
const { ccclass, property } = _decorator;

@ccclass('Tools')
export class Tools extends Component {
   // 取随机值 min <= value < max
   static Random(min:number, max:number) {
        if (min >= max)
        {
            return min;
        }
        return Math.floor(Math.random()*(max - min)) + min;
    }

    // 获取时间戳
    static getTimeStamp() {
        let date:Date = new Date();
        return Math.round(date.getTime() / 1000);
    }

    // 毫秒时间戳
    static getTimeStampLong() {
        let date:Date = new Date();
        return date.getTime();
    }

    // 检测是否跨天
    static IsNewDay(lastTime:number) {
        let date:Date = new Date();
        let lastDate:Date = new Date();
        lastDate.setTime(lastTime * 1000);

        //console.log("当前：", date.getDate());
        //console.log("过去：", lastDate.getDate());
        if (date.getDate() != lastDate.getDate()) {
            return true;
        }

        return false;
    }

    // 转换为分钟格式
    static getTimeFormat(time:number) {
        let minite:number = Math.floor(time / 60);
        let second:number = time % 60;
        return (minite < 10 ? "0" : "") + minite + ":" + (second < 10 ? "0" : "") + second;
    }
    // 转换为小时分钟格式
    static getTimeFormatLong(time:number) {
        let hour:number = Math.floor(time / 3600);
        let lastValue = time % 3600;
        let minite:number = Math.floor(lastValue / 60);
        let second:number = lastValue % 60;
        return (hour < 10 ? "0" : "") + hour + ":" + (minite < 10 ? "0" : "") + minite + ":" + (second < 10 ? "0" : "") + second;
    }

    // 获取白天还是黑夜
    static getInTime(start, end) {
        let date:Date = new Date();
        let hour = date.getHours();
        let minite = date.getMinutes();
        if (hour >= start && hour < end)
        {
            return 0;
        }
        if (hour < start) {
            return -1;
        }
        if (hour >= end) {
            return 1;
        }
    }

}

