System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, _decorator, UIManager, WXAPI, _class, _class2, _crd, ccclass, property, GameAd;

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXAPI(extras) {
    _reporterNs.report("WXAPI", "./WXAPI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }, function (_unresolved_3) {
      WXAPI = _unresolved_3.WXAPI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64e21LQiC1LsJRH/NalfKc7", "GameAd", undefined);

      __checkObsolete__(['sys', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GameAd = ccclass(_class = (_class2 = class GameAd {
        constructor() {
          this.mAdCallBack = void 0;
          this.mFailCallBack = void 0;
        }

        static getInstance() {
          if (this._instance == null) this._instance = new GameAd();
          return this._instance;
        }

        SendAdReward() {
          console.log("发放广告奖励");

          if (this.mAdCallBack != null) {
            this.mAdCallBack();
          }
        }

        ShowAd(_callBack, _failBack) {
          if (_failBack === void 0) {
            _failBack = null;
          }

          this.mAdCallBack = _callBack;
          this.mFailCallBack = _failBack;

          if (sys.platform === sys.Platform.WECHAT_GAME) {
            var self = this;
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).ins().CreateAd("adunit-7ed55f4bda385fee", bLookOver => {
              if (bLookOver) {
                self.mAdCallBack();
              } else {
                if (self.mFailCallBack != null) {
                  self.mFailCallBack();
                }

                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instance.ShowTips("广告观看时间不足，无法领取奖励");
              }
            });
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).ins().ShowAd("adunit-7ed55f4bda385fee");
          } else {
            _callBack();
          }
        }

      }, _class2._instance = null, _class2)) || _class);

      window["GameAd"] = GameAd.getInstance();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=233bca933b01c05d7adc07e11bbbcd74ac6bc36f.js.map