System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, UIBase, GameData, EventEnum, EventManager, SceneManager, SoundManager, _dec, _class, _crd, ccclass, property, UI_Game;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35d19EmRItPX5am8vuOgLTB", "UI_Game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Game", UI_Game = (_dec = ccclass('UI_Game'), _dec(_class = class UI_Game extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);
          this.Btn_Left = void 0;
          this.Btn_Right = void 0;
          this.Btn_Back = void 0;
          this.TipsNode = void 0;
          this.TipsContent = void 0;
          this.mbShowTipsContent = false;
        }

        onStart() {
          this.Btn_Left = this.getNode("Btn_Left");
          this.Btn_Left.on("click", this.OnClickLeft, this);
          this.Btn_Right = this.getNode("Btn_Right");
          this.Btn_Right.on("click", this.OnClickRight, this);
          this.Btn_Back = this.getNode("Btn_Back");
          this.Btn_Back.on("click", this.OnClickBack, this);
          this.TipsNode = this.getNode("Tips");
          this.TipsNode.on("click", this.OnClickTips, this);
          this.TipsContent = this.getNode("Tips/Tips_content");
        }

        refresh() {
          this.updateBtns();
        }

        updateBtns() {
          this.Btn_Back.active = !(_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mbBigScene;
          this.Btn_Left.active = false;
          this.Btn_Right.active = (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mbBigScene; // 根据场景检测隐藏左右箭头

          if ((_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mCurrentSceneIndex == 0) {
            this.Btn_Right.active = false;
          }

          if ((_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.mbNeedHideBackBtn) {
            this.Btn_Back.active = false;
          } //捡到手机后显示 Tips 图标


          this.TipsNode.active = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Phone;
          this.TipsContent.active = this.mbShowTipsContent;
        }

        OnClickLeft() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("click", 1);
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.GoLeftScene();
          this.updateBtns();
        }

        OnClickRight() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("click", 1);
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.GoRightScene();
          this.updateBtns();
        }

        OnClickBack() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("click", 1);
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.BackToMainScene();
          this.updateBtns();
        }

        OnClickTips() {
          this.ProcessTipsContent();
        }

        ProcessTipsContent() {
          this.mbShowTipsContent = true;
          this.TipsContent.active = true;
          let tips = "";

          if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbLockDrawerTips) {
            tips = "找找抽屉";
          } else if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbUnlockDrawer) {
            tips = "找找钥匙";
          } else if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbUnlockDoor) {
            tips = "手表可以解锁大门";
          }

          this.TipsContent.getComponentInChildren(Label).string = tips;
        }

        onEnable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).addListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene, this.updateBtns, this);
        }

        onDisable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).removeListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene, this.updateBtns);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=00aa4e5e25528c68aa742d4be3c37b84f41674e9.js.map