System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CBaseData, _crd, EventEnum, ePopType, OpenDataEnum;

  _export("CBaseData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "664425PLrJLHrh0yEaGdsw/", "GameEnum", undefined);

      // 游戏数据定义
      _export("EventEnum", EventEnum = /*#__PURE__*/function (EventEnum) {
        EventEnum[EventEnum["LoginSuccess"] = 0] = "LoginSuccess";
        EventEnum[EventEnum["UpdateItem"] = 1] = "UpdateItem";
        EventEnum[EventEnum["ChangeScene"] = 2] = "ChangeScene";
        EventEnum[EventEnum["UpdateSceneItem"] = 3] = "UpdateSceneItem";
        EventEnum[EventEnum["OpenDoor"] = 4] = "OpenDoor";
        return EventEnum;
      }({}));

      _export("ePopType", ePopType = /*#__PURE__*/function (ePopType) {
        ePopType[ePopType["HttpConnect"] = 0] = "HttpConnect";
        ePopType[ePopType["WechatAuth"] = 1] = "WechatAuth";
        ePopType[ePopType["DeleteFriend"] = 2] = "DeleteFriend";
        return ePopType;
      }({}));

      _export("OpenDataEnum", OpenDataEnum = /*#__PURE__*/function (OpenDataEnum) {
        OpenDataEnum[OpenDataEnum["ShowRank"] = 0] = "ShowRank";
        OpenDataEnum[OpenDataEnum["ShowRank_Endless"] = 1] = "ShowRank_Endless";
        OpenDataEnum[OpenDataEnum["HideRank"] = 2] = "HideRank";
        return OpenDataEnum;
      }({})); // 基本数据信息


      _export("CBaseData", CBaseData = class CBaseData {
        constructor() {
          // 首次登录
          this.isFirstLoign = true;
          // 离线的时间
          this.mOfflineTime = 0;
          // 上次保存信息的时间戳
          this.mLastSaveTimeStamp = 0;
          // 获得手机
          this.mbGetItem_Phone = false;
          // 是否点击过抽屉
          this.mbLockDrawerTips = false;
          // 获得钥匙
          this.mbGetItem_Key = false;
          //解锁抽屉
          this.mbUnlockDrawer = false;
          // 打开抽屉
          this.mbOpenDrawer = false;
          // 获得智能手表
          this.mbGetItem_Watch = false;
          // 大门解锁
          this.mbUnlockDoor = false;
          // 大门解锁前的提示
          this.mbLockDoorTips = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=262db8610e4804991d3f8e75005f902a19dbe4df.js.map