System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, instantiate, EventEnum, EventManager, ResManager, SceneBase, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, SceneManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventEnum(extras) {
    _reporterNs.report("EventEnum", "../Data/GameEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "./ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "../Data/SceneBase", _context.meta, extras);
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
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      EventEnum = _unresolved_2.EventEnum;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      ResManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      SceneBase = _unresolved_5.SceneBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffad32kDURNzZxBYhiBfwgG", "SceneManager", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneManager", SceneManager = (_dec = ccclass('SceneManager'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = class SceneManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mSceneParentNode", _descriptor, this);

          this.mSceneList = [];
          this.mSceneLoadCount = 0;
          // 大场景的索引
          this.mCurrentSceneIndex = 0;
          this.mbBigScene = false;
          this.mbNeedHideBackBtn = false;
        }

        onLoad() {
          SceneManager.Instance = this;
        }

        start() {
          var _this = this;

          this.mSceneLoadCount = 0; // 加载场景分包资源

          var that = this;

          var _loop = function _loop() {
            var name = "S" + (i + 1);
            (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
              error: Error()
            }), ResManager) : ResManager).Instance.LoadPrefab(name, name, prefab => {
              var sceneNode = instantiate(prefab);
              sceneNode.active = true;
              sceneNode.parent = _this.mSceneParentNode;
              sceneNode.name = name;
              that.mSceneLoadCount += 1;

              if (that.mSceneLoadCount == 4) {
                that.LoadSceneFinish();
              }
            });
          };

          for (var i = 0; i < 4; i++) {
            _loop();
          }
        }

        LoadSceneFinish() {
          for (var i = 0; i < 4; i++) {
            var name = "S" + (i + 1);
            var sceneNode = this.mSceneParentNode.getChildByName(name);
            var sceneBase = sceneNode.getComponent(_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
              error: Error()
            }), SceneBase) : SceneBase);
            this.mSceneList.push(sceneBase);
            sceneBase.hide();
          }
        }

        InitScene() {
          this.mbBigScene = true;
          this.mCurrentSceneIndex = 0;
          this.mSceneList[this.mCurrentSceneIndex].show();
        }

        CloseAllScene() {
          for (var i = 0; i < this.mSceneList.length; i++) {
            var element = this.mSceneList[i];
            element.hideAll();
          }
        }

        GoLeftScene() {
          if (this.mCurrentSceneIndex >= this.mSceneList.length - 1) {
            return;
          }

          var oldIndex = this.mCurrentSceneIndex;
          this.mCurrentSceneIndex += 1;
          this.mSceneList[oldIndex].hide();
          this.scheduleOnce(() => {
            this.mSceneList[this.mCurrentSceneIndex].show();
          }, 0.5);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene);
        }

        GoRightScene() {
          if (this.mCurrentSceneIndex <= 0) {
            return;
          }

          var oldIndex = this.mCurrentSceneIndex;
          this.mCurrentSceneIndex -= 1;
          this.mSceneList[oldIndex].hide();
          this.scheduleOnce(() => {
            this.mSceneList[this.mCurrentSceneIndex].show();
          }, 0.5);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene);
        }

        BackToMainScene() {
          this.mbBigScene = true;
          this.mSceneList[this.mCurrentSceneIndex].ToMainScene();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene);
        }

        GoInterScene() {
          this.mbBigScene = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).ChangeScene);
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mSceneParentNode", [_dec2], {
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
//# sourceMappingURL=cd820b2cb7597a9d05993a2f4c1c3f2e83f3e54f.js.map