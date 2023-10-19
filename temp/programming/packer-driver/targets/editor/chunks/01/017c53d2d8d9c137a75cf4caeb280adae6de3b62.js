System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SingletonClass, SoundManager, WXAPI, _decorator, sys, CBaseData, Tools, _dec, _class, _crd, ccclass, property, GameData;

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "../Base/SingletonClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXAPI(extras) {
    _reporterNs.report("WXAPI", "../SDK/WXAPI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBaseData(extras) {
    _reporterNs.report("CBaseData", "./GameEnum", _context.meta, extras);
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
      sys = _cc.sys;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      WXAPI = _unresolved_4.WXAPI;
    }, function (_unresolved_5) {
      CBaseData = _unresolved_5.CBaseData;
    }, function (_unresolved_6) {
      Tools = _unresolved_6.Tools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "766da3kKshC+bSSr6cmDAu5", "GameData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameData", GameData = (_dec = ccclass('GameData'), _dec(_class = class GameData extends (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass) {
        constructor(...args) {
          super(...args);
          // 是否能够调用广告
          this.mbCanUseAd = false;
          // 基础数据
          this.mUserData = new (_crd && CBaseData === void 0 ? (_reportPossibleCrUseOfCBaseData({
            error: Error()
          }), CBaseData) : CBaseData)();
          //#region  设置数据
          this.BGM_Mute = false;
          this.Sound_Mute = false;
          this.Shake_Mute = false;
          this.Guide_Close = false;
        }

        static ins() {
          return super.ins();
        }

        LoadSetData() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            this.BGM_Mute = (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).getStorageSync("BGM") == "1";
            this.Sound_Mute = (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).getStorageSync("Sound") == "1";
            this.Shake_Mute = (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).getStorageSync("Shake") == "1";
            this.Guide_Close = (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).getStorageSync("Guide") == "1";
          } else {
            this.BGM_Mute = localStorage.getItem("BGM") == "1";
            this.Sound_Mute = localStorage.getItem("Sound") == "1";
            this.Shake_Mute = localStorage.getItem("Shake") == "1";
            this.Guide_Close = localStorage.getItem("Guide") == "1";
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.InitData();
        }

        SaveData_BGM() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).setStorageSync("BGM", this.BGM_Mute ? "1" : "0");
          } else {
            localStorage.setItem("BGM", this.BGM_Mute ? "1" : "0");
          }
        }

        SaveData_Sound() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).setStorageSync("Sound", this.Sound_Mute ? "1" : "0");
          } else {
            localStorage.setItem("Sound", this.Sound_Mute ? "1" : "0");
          }
        }

        SaveData_Shake() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).setStorageSync("Shake", this.Shake_Mute ? "1" : "0");
          } else {
            localStorage.setItem("Shake", this.Shake_Mute ? "1" : "0");
          }
        }

        SaveData_Guide() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).setStorageSync("Guide", this.Guide_Close ? "1" : "0");
          } else {
            localStorage.setItem("Guide", this.Guide_Close ? "1" : "0");
          }
        } //#endregion
        //设置单人信息(好友排行)


        setFriend_BestInfo(data) {
          if (sys.platform !== sys.Platform.WECHAT_GAME) {
            return;
          }

          (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
            error: Error()
          }), WXAPI) : WXAPI).openDataSet('level', "" + data.level);
          (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
            error: Error()
          }), WXAPI) : WXAPI).openDataSet('specLevel', "" + data.specLevel);
        } //#region 本地信息存储


        setStorageValue(name, value) {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).setStorageSync(name, value);
          } else {
            localStorage.setItem(name, value);
          }
        }

        getStorageValue(name, defaultValue) {
          let returnValue;

          if (sys.platform === sys.Platform.WECHAT_GAME) {
            returnValue = (_crd && WXAPI === void 0 ? (_reportPossibleCrUseOfWXAPI({
              error: Error()
            }), WXAPI) : WXAPI).getStorageSync(name);
          } else {
            returnValue = localStorage.getItem(name);
          }

          if (returnValue == "" || returnValue == null) {
            returnValue = defaultValue;
          }

          return returnValue;
        } //#endregion


        LoadData() {
          let userData = this.getStorageValue("BaseData", "");

          if (userData != "") {
            this.mUserData = JSON.parse(userData);
          } else {
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
          GameData.ins().mUserData.mLastSaveTimeStamp = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).getTimeStamp();
          this.setStorageValue("BaseData", JSON.stringify(this.mUserData));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=017c53d2d8d9c137a75cf4caeb280adae6de3b62.js.map