System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, Color, Button, UIBase, GameData, EventEnum, EventManager, SceneManager, SoundManager, UIManager, UIType, _dec, _class, _crd, ccclass, property, UI_Bag;

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

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIType(extras) {
    _reporterNs.report("UIType", "../Manager/UIManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      Button = _cc.Button;
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
    }, function (_unresolved_7) {
      SoundManager = _unresolved_7.SoundManager;
    }, function (_unresolved_8) {
      UIManager = _unresolved_8.UIManager;
      UIType = _unresolved_8.UIType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e523Yg3jRPLaNkVzQqodle", "UI_Bag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween', 'UIMeshRenderer', 'Sprite', 'Color', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Bag", UI_Bag = (_dec = ccclass('UI_Bag'), _dec(_class = class UI_Bag extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);
          this.Item_Phone = void 0;
          this.Item_Watch = void 0;
          this.Item_Key = void 0;
        }

        onStart() {
          this.Item_Phone = this.getNode("bg/Layout/Item_Phone");
          this.Item_Phone.on("click", this.OnClickPhone, this);
          this.Item_Watch = this.getNode("bg/Layout/Item_Watch");
          this.Item_Watch.on("click", this.OnClickWatch, this);
          this.Item_Key = this.getNode("bg/Layout/Item_Key");
          this.Item_Key.on("click", this.OnClickKey, this);
        }

        refresh() {
          this.UpdateItems();
        }

        UpdateItems() {
          this.Item_Phone.active = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Phone;
          this.Item_Watch.active = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Watch;
          this.Item_Key.active = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Key;

          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbUnlockDrawer) {
            this.Item_Key.getComponent(Sprite).color = Color.GRAY;
            this.Item_Key.getComponent(Button).interactable = false;
          }
        }

        OnClickPhone() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Item_Phone);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("item");
        }

        OnClickWatch() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Item_Watch);
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("item");
        }

        OnClickKey() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("item");

          if ((_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mCurrentSceneIndex == 1) {
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).ins().mUserData.mbUnlockDrawer = true;
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).ins().SaveBaseData;
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.ShowTips("抽屉打开了");
            this.UpdateItems();
          } else {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.ShowTips("一把钥匙");
          }
        }

        onEnable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).addListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).UpdateItem, this.UpdateItems, this);
        }

        onDisable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).removeListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).UpdateItem, this.UpdateItems);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24d260bb0aa64c34329378557064a5cfe0e54bcf.js.map