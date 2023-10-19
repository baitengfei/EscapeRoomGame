System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIBase, GameData, EventEnum, EventManager, SceneManager, _dec, _class, _crd, ccclass, property, UI_Item_Watch;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventEnum(extras) {
    _reporterNs.report("EventEnum", "../Data/GameEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "../Manager/SceneManager", _context.meta, extras);
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
      UIBase = _unresolved_2.UIBase;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }, function (_unresolved_4) {
      EventEnum = _unresolved_4.EventEnum;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      SceneManager = _unresolved_6.SceneManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd779rDe1BKr65SSi6utSIg", "UI_Item_Watch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Item_Watch", UI_Item_Watch = (_dec = ccclass('UI_Item_Watch'), _dec(_class = class UI_Item_Watch extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.mLabel_Info = void 0;
        }

        onStart() {
          this.mLabel_Info = this.getLabel("Info/Info");
          var Btn_Close = this.getNode("Btn_Close");
          Btn_Close.on("click", this.OnClickClose, this);
        }

        refresh() {
          this.mLabel_Info.string = "一个智能手表，身份ID？";

          if ((_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mCurrentSceneIndex == 2) {
            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).ins().mUserData.mbGetItem_Watch) {
              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).ins().mUserData.mbUnlockDoor = true;
              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).ins().SaveBaseData();
              this.ToOpenDoor();
            }
          }
        }

        ToOpenDoor() {
          if ((_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mCurrentSceneIndex == 2) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
              error: Error()
            }), EventEnum) : EventEnum).OpenDoor);
          }
        }

        onEnable() {}

        onDisable() {}

        OnClickClose() {
          this.close();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=438b0a0f2e1446ba767941289242bdd8a3cb7bfa.js.map