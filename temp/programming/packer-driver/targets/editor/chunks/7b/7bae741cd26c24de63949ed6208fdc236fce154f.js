System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, Node, assetManager, Prefab, instantiate, UIBase, CfgUtil, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, UIType, UIRootType, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgUtil(extras) {
    _reporterNs.report("CfgUtil", "../Config/CfgUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }, function (_unresolved_3) {
      CfgUtil = _unresolved_3.CfgUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52d86QqgbNDZ4JsGYeHO6Tg", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node', 'assetManager', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator); // UI 类型

      _export("UIType", UIType = /*#__PURE__*/function (UIType) {
        UIType[UIType["Main"] = 1] = "Main";
        UIType[UIType["Game"] = 2] = "Game";
        UIType[UIType["Tips"] = 3] = "Tips";
        UIType[UIType["Bag"] = 4] = "Bag";
        UIType[UIType["Dialogue"] = 5] = "Dialogue";
        UIType[UIType["Pause"] = 6] = "Pause";
        UIType[UIType["Item_PC"] = 7] = "Item_PC";
        UIType[UIType["Item_Phone"] = 8] = "Item_Phone";
        UIType[UIType["Item_Watch"] = 9] = "Item_Watch";
        UIType[UIType["Win"] = 10] = "Win";
        UIType[UIType["Max"] = 11] = "Max";
        return UIType;
      }({}));

      UIRootType = ["UIMain", "UIAlert", "UITip"];

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = class UIManager extends Component {
        constructor(...args) {
          super(...args);
          this.UINode = null;

          _initializerDefineProperty(this, "canvas", _descriptor, this);

          this.UINodeList = [];
          this.bInit = false;
          this.UIMap = {};
          this.listTips = [];
          this.tipsPrefab = null;
        }

        onLoad() {
          UIManager.Instance = this;
          game.addPersistRootNode(this.node);
        }

        init() {
          if (this.bInit) {
            return;
          }

          if (!this.UINode) {
            if (this.canvas) {
              this.UINode = this.canvas.getChildByName("UINode");

              if (this.UINode) {
                var typeList = UIRootType;
                this.UINodeList.length = 0;

                for (var k in typeList) {
                  let nodeName = typeList[k];
                  this.UINodeList.push({
                    name: nodeName,
                    node: this.UINode.getChildByName(nodeName)
                  });
                }
              }

              this.bInit = true;
            }
          }
        }

        getUIParentNode(type) {
          for (let index = 0; index < this.UINodeList.length; index++) {
            let info = this.UINodeList[index];

            if (info.name == type) {
              return info.node;
            }
          }

          return null;
        }

        getUICfg(uiEnum) {
          var cfg = (_crd && CfgUtil === void 0 ? (_reportPossibleCrUseOfCfgUtil({
            error: Error()
          }), CfgUtil) : CfgUtil).ins().getUICfg(uiEnum);
          return cfg;
        }

        getUIComponent(type) {
          if (this.UIMap[type] == null) {
            return null;
          }

          if (this.UIMap[type].Show) {
            if (this.UIMap[type].node != null) {
              var uiBase = this.UIMap[type].node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                error: Error()
              }), UIBase) : UIBase);

              if (uiBase && typeof uiBase.refreshBase == "function") {
                return uiBase;
              }
            }
          }

          return null;
        }

        openUI(type, args = null) {
          if (!this.bInit) {
            this.init();
          }

          if (this.UIMap[type] == null) {
            this.UIMap[type] = {};
          }

          if (this.UIMap[type].Show) {
            if (this.UIMap[type].node != null) {
              this.UIMap[type].node.active = true;
              this.UIMap[type].node.setSiblingIndex(100);
              var uiBase = this.UIMap[type].node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                error: Error()
              }), UIBase) : UIBase);

              if (uiBase && typeof uiBase.refreshBase == "function") {
                uiBase.refreshBase(args);
              }
            }

            return;
          }

          this.UIMap[type].Show = true;

          if (this.UIMap[type].node != null) {
            this.UIMap[type].node.active = true;
            this.UIMap[type].node.setSiblingIndex(100);
            var uiBase = this.UIMap[type].node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
              error: Error()
            }), UIBase) : UIBase);

            if (uiBase && typeof uiBase.refreshBase == "function") {
              uiBase.refreshBase(args);
            }
          } else {
            if (this.UIMap[type].bCreate) {
              return;
            }

            this.UIMap[type].bCreate = true;
            var cfg = this.getUICfg(type);
            var path = cfg.name;
            let bundleName = "UI";
            let bundle = assetManager.getBundle(bundleName);

            if (cfg && bundle != null) {
              bundle.load(path, Prefab, (error, prefabAsset) => {
                if (!this.UIMap[type].Show) {
                  //console.log("UI已关闭", type);
                  this.UIMap[type].bCreate = false;
                  return;
                }

                var uiNode = instantiate(prefabAsset); //console.log("UI实例化", type, ",", uiNode);

                var ui = uiNode.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                  error: Error()
                }), UIBase) : UIBase);

                if (ui == null) {
                  console.error('该UI未挂脚本', uiNode.name);
                }

                uiNode.active = true;
                uiNode.setSiblingIndex(100);
                uiNode.parent = this.getUIParentNode(cfg.type); // this.UIMap[type] = {};

                this.UIMap[type].node = uiNode; //console.log("打开界面",type);

                if (ui) {
                  ui.bDestroyMode = false;
                  ui.type = type;

                  if (typeof ui.onStart == "function") {
                    ui.onStart();
                  }

                  if (typeof ui.refreshBase == "function") {
                    ui.refreshBase(args);
                  }

                  if (!this.UIMap[type].Show) {
                    uiNode.active = false;
                    this.closeUI(type);
                  }
                }
              });
            } else {
              console.error(" 没有此UI 配置", type);
            }
          }
        }

        preLoadUI(type) {
          var cfg = this.getUICfg(type);
          var path = cfg.name;
          let bundleName = "UI";
          let bundle = assetManager.getBundle(bundleName);

          if (bundle != null) {
            bundle.preload(path, Prefab);
          }
        }

        closeUI(type) {
          if (this.UIMap[type] != null) {
            this.UIMap[type].Show = false;
            var node = this.UIMap[type].node;

            if (node != null) {
              var uiBase = node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                error: Error()
              }), UIBase) : UIBase);

              if (uiBase != null && uiBase.bDestroyMode) {
                node.destroy();
                this.UIMap[type] = null;
              } else {
                node.active = false; //console.log("UI关闭了",node.name,",",type);
              }
            }
          }
        } //关闭所有UI


        closeAllUI() {
          console.log("关闭所有UI");

          for (let k in this.UIMap) {
            if (this.UIMap[k] != null) {
              this.UIMap[k].Show = false;
              var node = this.UIMap[k].node;

              if (node != null) {
                var uiBase = node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                  error: Error()
                }), UIBase) : UIBase);

                if (uiBase != null && uiBase.bDestroyMode) {
                  node.destroy();
                  this.UIMap[k] = null;
                } else {
                  node.active = false;
                  console.log("UI关闭了", node.name, ",", k);
                }
              }
            }
          }
        }

        ShowTips(content) {
          //console.log("准备提示：" + content);
          if (this.listTips.length <= 0) {
            this.listTips.push(content);

            if (this.tipsPrefab == null) {
              var cfg = this.getUICfg(UIType.Tips);
              var path = cfg.name;
              let bundle = assetManager.getBundle("UI");

              if (cfg && bundle != null) {
                bundle.load(path, Prefab, (error, prefab) => {
                  this.tipsPrefab = prefab;
                  this.InstanceTips();
                });
              }
            } else {
              this.InstanceTips();
            }
          } else {
            this.listTips.push(content);
          }
        }

        InstanceTips() {
          if (this.listTips.length <= 0) {
            return;
          }

          let content = "";

          for (let k in this.listTips) {
            content = this.listTips[k];
            break;
          }

          if (this.tipsPrefab == null) {
            return;
          }

          var node = instantiate(this.tipsPrefab);

          if (node == null) {
            return;
          }

          var ui = node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
            error: Error()
          }), UIBase) : UIBase);

          if (ui == null) {
            console.error('该UI未挂脚本');
          }

          var pNodeName = "UITip";
          node.parent = this.getUIParentNode(pNodeName);

          if (ui) {
            ui.bDestroyMode = true;
            ui.type = UIType.Tips;

            if (typeof ui.onStart == "function") {
              ui.onStart();
            }

            if (typeof ui.refreshBase == "function") {
              ui.refreshBase(content);
            }

            let self = this;
            this.scheduleOnce(function () {
              self.listTips.splice(0, 1);
              self.InstanceTips();
            }, 0.5);
          }
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bae741cd26c24de63949ed6208fdc236fce154f.js.map