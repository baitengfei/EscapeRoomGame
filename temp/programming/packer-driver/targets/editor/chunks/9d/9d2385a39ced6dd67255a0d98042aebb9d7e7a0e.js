System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SingletonClass, _decorator, Tools, _dec, _class, _class2, _crd, ccclass, property, WXAPI;

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "../Base/SingletonClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "../Tool/Tools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.default;
    }, function (_unresolved_3) {
      Tools = _unresolved_3.Tools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0f0fTT1ilO/Y5yImVb3kAw", "WXAPI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WXAPI", WXAPI = (_dec = ccclass('WXAPI'), _dec(_class = (_class2 = class WXAPI extends (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass) {
        constructor(...args) {
          super(...args);
          this.launchOption = void 0;
          this.mListAds = [];
        }

        static ins() {
          return super.ins();
        } //微信登录


        static wxLogin(func) {
          wx.login({
            success(res) {
              if (res.code && func) {
                func(res);
              } else {
                console.log('登录失败！' + res.errMsg);
              }
            }

          });
        } //同步获取缓存数据


        static getStorageSync(key) {
          var value = null;

          try {
            value = wx.getStorageSync(key);
          } catch (e) {
            console.log("get storage ", key, ":", e);
          }

          return value;
        } //同步设置缓存数据


        static setStorageSync(key, value) {
          try {
            wx.setStorageSync(key, value);
          } catch (e) {
            console.log("set storage ", key, ":", e);
          }
        } //清除缓存数据


        static removeStorageSync(key) {
          try {
            wx.removeStorageSync(key);
          } catch (e) {
            console.log("remove storage ", key, ":", e);
          }
        }

        static share() {
          var t = "成功通关，智能版密室逃脱"; // image

          var images = [{
            url: "https://mmocgame.qpic.cn/wechatgame/kwPxRMtzghTg3YW1outInnP998BV9so9rkxUIZE3gKWffVAEjz4DnulRkJ9d29q2/0",
            id: "w4LQEtAhT4aaMyb0e1A7rA==",
            desc: "成功通关，智能版密室逃脱"
          }];
          let randomImageIndex = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).Random(0, images.length);
          var iUrl = images[randomImageIndex].url;
          var id = images[randomImageIndex].id;
          var query = "userId=1";
          wx.shareAppMessage({
            title: t,
            imageUrl: iUrl,
            query: query,
            imageUrlId: id
          });
        }
        /**
        * 此方法每次点击分享就执行一次
        * @param _callback处理分享的回调
        */


        static onShowGame(_callback) {
          console.log("---游戏回到前台---------------"); // 记录点击分享的时间（秒级）

          this.shareStartTimeSecond = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).getTimeStamp();

          let func = _res => {
            let isShareSuccess = false;

            if (this.shareStartTimeSecond <= 0) {// 不处理
            } else {
              // 判断转发成功与否，按时间处理
              let interval = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).getTimeStamp() - this.shareStartTimeSecond;
              this.shareStartTimeSecond = -1; // 我这里间隔设置为2.5s

              if (interval >= 2.5) {
                isShareSuccess = true;
              }
            }

            _callback(isShareSuccess); // 取消监听小游戏回到前台的事件


            window['wx'].offShow(func);
          }; // 监听小游戏回到前台的事件


          window['wx'].onShow(func);
        }

        static onShow(callBack) {
          if (typeof callBack == "function") {
            wx.onShow(callBack);
          }
        }

        static onHide(callBack) {
          if (typeof callBack == "function") {
            wx.onHide(callBack);
          }
        }

        CheckAccelerometer(callBack) {
          wx.onAccelerometerChange(function (res) {
            if (res.x > 0.8 || res.y > 0.8) {
              // wx.showToast({
              //     title:"摇晃",
              //     duration: 2000
              // })
              callBack();
            }
          });
        }

        CreateAd(adUnitId, callBack) {
          let rewardAd = null;

          for (let index = 0; index < WXAPI.ins().mListAds.length; index++) {
            let item = WXAPI.ins().mListAds[index];

            if (item.adUnitId == adUnitId) {
              rewardAd = item.rewardAd;
              break;
            }
          }

          if (rewardAd != null) {
            rewardAd.offError();
            rewardAd.offClose();
            rewardAd.onError(err => {
              console.log("创建广告错误：", err);
            });
            rewardAd.onClose(res => {
              // 用户点击了【关闭广告】按钮
              // 小于 2.1.0 的基础库版本，res 是一个 undefined
              if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                callBack(true);
              } else {
                // 播放中途退出，不下发游戏奖励
                callBack(false);
              }
            });
            return;
          } // 创建激励视频广告实例，提前初始化


          rewardAd = wx.createRewardedVideoAd({
            adUnitId: adUnitId,
            multiton: true
          });
          WXAPI.ins().mListAds.push({
            adUnitId: adUnitId,
            rewardAd: rewardAd
          });
          rewardAd.onError(err => {
            console.log("创建广告错误：", err);
          });
          rewardAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              callBack(true);
            } else {
              // 播放中途退出，不下发游戏奖励
              callBack(false);
            }
          });
        }

        ShowAd(adUnitId) {
          let rewardAd = null;

          for (let index = 0; index < WXAPI.ins().mListAds.length; index++) {
            let item = WXAPI.ins().mListAds[index];

            if (item.adUnitId == adUnitId) {
              rewardAd = item.rewardAd;
              break;
            }
          }

          if (rewardAd == null) {
            return;
          } // 用户触发广告后，显示激励视频广告


          rewardAd.show().then(() => {}).catch(() => {
            // 失败重试
            rewardAd.load().then(() => {
              rewardAd.show();
            }).catch(err => {
              console.log('激励视频 广告显示失败');
            });
          });
        }

      }, _class2.shareStartTimeSecond = 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d2385a39ced6dd67255a0d98042aebb9d7e7a0e.js.map