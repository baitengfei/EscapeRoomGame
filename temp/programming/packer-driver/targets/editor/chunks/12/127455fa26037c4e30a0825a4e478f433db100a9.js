System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, EventManager, SceneManager, SoundManager, UIManager, UIType, GameData, EventEnum, SceneBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Scene_S3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      SceneManager = _unresolved_3.SceneManager;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
      UIType = _unresolved_5.UIType;
    }, function (_unresolved_6) {
      GameData = _unresolved_6.GameData;
    }, function (_unresolved_7) {
      EventEnum = _unresolved_7.EventEnum;
    }, function (_unresolved_8) {
      SceneBase = _unresolved_8.SceneBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "245b0Buei5Oz5Y4xLfnAU1q", "Scene_S3", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UIMeshRenderer', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Scene_S3", Scene_S3 = (_dec = ccclass('Scene_S3'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class Scene_S3 extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mMainScene", _descriptor, this);

          _initializerDefineProperty(this, "mNode_Door", _descriptor2, this);

          _initializerDefineProperty(this, "mNode_DoorAnim", _descriptor3, this);

          this.mClickDoorTimes = 0;
        }

        start() {
          this.mMainScene.active = false;
          this.mNode_Door.active = true;
          this.mNode_DoorAnim.active = false;
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
        }

        ToMainScene() {
          this.show();
        }

        OnClickLeftTrigger() {
          (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).Instance.GoLeftScene();
        }

        ClickBigDoor() {
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().mUserData.mbUnlockDoor) {
            this.OpenDoor();
          } else {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).Instance.PlaySound("lock");

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).ins().mUserData.mbLockDoorTips) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instance.ShowTips("这个锁没有钥匙孔，要用特殊工具解开");
            } else {
              this.mClickDoorTimes += 1;

              if (this.mClickDoorTimes == 1) {
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instance.ShowTips("我居然被锁了，恶作剧吗这是");
              }

              if (this.mClickDoorTimes == 2) {
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instance.ShowTips("这个锁没有钥匙孔，怎么打开");
              }

              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).ins().mUserData.mbLockDoorTips = true;
            }
          }
        }

        OpenDoor() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Item_Watch);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Bag);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
            error: Error()
          }), UIType) : UIType).Game);
          this.mNode_Door.active = false;
          this.mNode_DoorAnim.active = true;
          this.mNode_DoorAnim.getComponent(Animation).play();
          this.scheduleOnce(() => {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instance.openUI((_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType).Win);
          }, 1.0);
        }

        onEnable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).addListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).OpenDoor, this.OpenDoor, this);
        }

        onDisable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).removeListener((_crd && EventEnum === void 0 ? (_reportPossibleCrUseOfEventEnum({
            error: Error()
          }), EventEnum) : EventEnum).OpenDoor, this.OpenDoor);
        }

        OnClickLockDoor() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.ShowTips("门是锁的");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mMainScene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mNode_Door", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mNode_DoorAnim", [_dec4], {
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
//# sourceMappingURL=127455fa26037c4e30a0825a4e478f433db100a9.js.map