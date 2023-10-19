System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, _dec, _class, _class2, _crd, ccclass, property, EventManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd5e6UHSupB3Js9ouau0B9K", "EventManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventManager", EventManager = (_dec = ccclass('EventManager'), _dec(_class = (_class2 = class EventManager {
        //存储事件信息
        //初始化事件列表，如果已经存在则不需要执行
        static init() {
          if (this.eventList) {
            return;
          }

          this.eventList = {};
        } //target 如果是非组件类需要加上字段 _id


        static addListener(eventName, callback, target) {
          this.init(); //console.log("add lis ", eventName);//,callback,target);

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
            target: target
          };
        } //移除事件订阅


        static removeListener(eventName, target) {
          this.init(); //console.log("rem lis ", eventName)//,target);

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
          } else {
            delete this.eventList[eventName][targetId]; //if(this.eventList[eventName])
          }
        } //触发事件订阅


        static dispatch(eventName, args) //arguments
        {
          if (args === void 0) {
            args = null;
          }

          this.init(); // console.log("dispatch  ", eventName, "   args :", args);

          if (this.eventList && this.eventList[eventName]) {
            for (var k in this.eventList[eventName]) {
              this.eventList[eventName][k].callback.call(this.eventList[eventName][k].target, args);
            }
          }
        }

      }, _class2.eventList = {}, _class2)) || _class));

      log("EventManager init over");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e85c6c7eca804e41cefc2bdb668a817d015a74b.js.map