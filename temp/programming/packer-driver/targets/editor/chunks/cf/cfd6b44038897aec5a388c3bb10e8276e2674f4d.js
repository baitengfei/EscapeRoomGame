System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, EventManager, SceneManager, UIManager, UIType, GameData, EventEnum, SceneBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Scene_S4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "../Manager/SceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIType(extras) {
    _reporterNs.report("UIType", "../Manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventEnum(extras) {
    _reporterNs.report("EventEnum", "./GameEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "./SceneBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      SceneManager = _unresolved_3.SceneManager;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
      UIType = _unresolved_4.UIType;
    }, function (_unresolved_5) {
      GameData = _unresolved_5.GameData;
    }, function (_unresolved_6) {
      EventEnum = _unresolved_6.EventEnum;
    }, function (_unresolved_7) {
      SceneBase = _unresolved_7.SceneBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc150lpRyFHSI3kNeDoOs9x", "Scene_S4", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BASELINE_RATIO', 'tween', 'Sprite', 'color', 'Color', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Scene_S4", Scene_S4 = (_dec = ccclass('Scene_S4'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class Scene_S4 extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mMainScene", _descriptor, this);

          _initializerDefineProperty(this, "mScene_Sofa", _descriptor2, this);

          _initializerDefineProperty(this, "mItem_Key", _descriptor3, this);
        }

        start() {
          this.mMainScene.active = false;
          this.mScene_Sofa.active = false;
        }

        update(deltaTime) {}

        show() {
          this.showScene(this.mMainScene);
        }

        hide() {
          this.hideScene(this.mMainScene);
        }

        hideAll() {
          this.mMainScene.active = false;
          this.mScene_Sofa.active = false;
        }

        ToMainScene() {
          this.hideScene(this.mScene_Sofa);
          this.show();
        }

        goSofaScene() {
          // 隐藏当前的
          this.hide(); // 展示现在的

          this.showScene(this.mScene_Sofa);
          this.mItem_Key.active = !(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Key; // 通知场景管理器

          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.GoInterScene();
        }

        OnClickLeftTrigger() {
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.GoLeftScene();
        }

        OnClick_Item_Key() {
          this.mItem_Key.active = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).UpdateItem);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.ShowTips("找到了一个钥匙");
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbGetItem_Key = true;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveBaseData();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Bag);
        }

        onEnable() {}

        onDisable() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mMainScene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mScene_Sofa", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mItem_Key", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfd6b44038897aec5a388c3bb10e8276e2674f4d.js.map