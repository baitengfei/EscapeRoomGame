System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Tools;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51c677Mk69J+aTSo3/JcTCn", "Tools", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tools", Tools = (_dec = ccclass('Tools'), _dec(_class = class Tools extends Component {
        // 取随机值 min <= value < max
        static Random(min, max) {
          if (min >= max) {
            return min;
          }

          return Math.floor(Math.random() * (max - min)) + min;
        } // 获取时间戳


        static getTimeStamp() {
          let date = new Date();
          return Math.round(date.getTime() / 1000);
        } // 毫秒时间戳


        static getTimeStampLong() {
          let date = new Date();
          return date.getTime();
        } // 检测是否跨天


        static IsNewDay(lastTime) {
          let date = new Date();
          let lastDate = new Date();
          lastDate.setTime(lastTime * 1000); //console.log("当前：", date.getDate());
          //console.log("过去：", lastDate.getDate());

          if (date.getDate() != lastDate.getDate()) {
            return true;
          }

          return false;
        } // 转换为分钟格式


        static getTimeFormat(time) {
          let minite = Math.floor(time / 60);
          let second = time % 60;
          return (minite < 10 ? "0" : "") + minite + ":" + (second < 10 ? "0" : "") + second;
        } // 转换为小时分钟格式


        static getTimeFormatLong(time) {
          let hour = Math.floor(time / 3600);
          let lastValue = time % 3600;
          let minite = Math.floor(lastValue / 60);
          let second = lastValue % 60;
          return (hour < 10 ? "0" : "") + hour + ":" + (minite < 10 ? "0" : "") + minite + ":" + (second < 10 ? "0" : "") + second;
        } // 获取白天还是黑夜


        static getInTime(start, end) {
          let date = new Date();
          let hour = date.getHours();
          let minite = date.getMinutes();

          if (hour >= start && hour < end) {
            return 0;
          }

          if (hour < start) {
            return -1;
          }

          if (hour >= end) {
            return 1;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d65995bc41406cba9965234df172c15138282445.js.map