System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIBase, GameData, GameManager, SoundManager, _dec, _class, _crd, ccclass, property, UI_Main;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Manager/GameManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "431bb53h1JDT67GYZ/fb+zG", "UI_Main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Main", UI_Main = (_dec = ccclass('UIMain'), _dec(_class = class UI_Main extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);
          this.Btn_Start = void 0;
          this.Btn_Continue = void 0;
          this.Btn_Restart = void 0;
        }

        onStart() {
          this.Btn_Start = this.getNode("Btn_Start");
          this.Btn_Start.on("click", this.OnClickStartGame, this);
          this.Btn_Continue = this.getNode("Btn_Continue");
          this.Btn_Continue.on("click", this.OnClickContinueGame, this);
          this.Btn_Restart = this.getNode("Btn_Restart");
          this.Btn_Restart.on("click", this.OnClickRestartGame, this);
        }

        refresh() {
          this.Btn_Start.active = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.isFirstLoign;
          this.Btn_Continue.active = !(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.isFirstLoign;
          this.Btn_Restart.active = !(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.isFirstLoign;
        }

        OnClickStartGame() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("start", 1);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance.StartGame();
        }

        OnClickContinueGame() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("start", 1);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance.ContinueGame();
        }

        OnClickRestartGame() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("start", 1);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance.RestartGame();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22e72988c0dc40b73ce82bf69c44d5d56a71104f.js.map