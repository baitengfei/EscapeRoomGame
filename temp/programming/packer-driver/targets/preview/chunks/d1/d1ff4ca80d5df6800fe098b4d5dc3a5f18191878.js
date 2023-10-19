System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, macro, SoundManager, UIManager, UIType, GameData, SceneManager, _dec, _class, _class2, _crd, ccclass, property, GameManager;

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIType(extras) {
    _reporterNs.report("UIType", "./UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Data/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./SceneManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
      UIType = _unresolved_3.UIType;
    }, function (_unresolved_4) {
      GameData = _unresolved_4.GameData;
    }, function (_unresolved_5) {
      SceneManager = _unresolved_5.SceneManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1e78JInOhLs4LdwTKk8Hi/", "GameManager", undefined);

      __checkObsolete__(['Component', '_decorator', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = (_class2 = class GameManager extends Component {
        onLoad() {
          GameManager.Instance = this;
          macro.ENABLE_MULTI_TOUCH = false;
          console.log("多点触控：", macro.ENABLE_MULTI_TOUCH);
        }

        start() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlayBGM("bgm2");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Main);
          console.log("开始进入游戏了");
        }

        StartGame() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Main);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Dialogue);
          console.log("开始游戏了");
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.isFirstLoign = false;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveBaseData();
        }

        ContinueGame() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Main);
          this.ShowScene();
        }

        RestartGame() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().InitData();
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveBaseData();
          this.StartGame();
        }

        ShowScene() {
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.InitScene();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Game); // 检测背包中是否有东西，如果有就打开背包

          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Phone || (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Key || (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Watch) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType).Bag);
          }
        }

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1ff4ca80d5df6800fe098b4d5dc3a5f18191878.js.map