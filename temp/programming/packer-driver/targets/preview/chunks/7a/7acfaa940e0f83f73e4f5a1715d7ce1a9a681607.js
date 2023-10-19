System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIManager, _decorator, Component, Label, Toggle, Sprite, _dec, _class, _crd, ccclass, property, UIBase;

  function _reportPossibleCrUseOfUIType(extras) {
    _reporterNs.report("UIType", "../Manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Manager/UIManager", _context.meta, extras);
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
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49051DIYgVG8ZzxR5rPWaWH", "UIBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Toggle', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBase", UIBase = (_dec = ccclass('UIBase'), _dec(_class = class UIBase extends Component {
        constructor() {
          super(...arguments);
          //用于传递给 UI 组件的参数
          this.args = void 0;
          this.addListener = void 0;
          this.bDestroyMode = false;
          this.type = 0;
        }

        _init() {} //实例化调用一次


        onStart() {} //刷新 UI 内容


        refreshBase(args) {
          if (args === void 0) {
            args = null;
          }

          this.args = args; //log(" refresh base ",args);

          if (typeof this.refresh == "function") {
            this.refresh();
          }

          if (typeof this.addListener == "function") {
            this.addListener();
          }
        }

        refresh() {}

        close() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instance.closeUI(this.type);
        }

        getNode(name, node) {
          if (node === void 0) {
            node = null;
          }

          if (node == null) {
            node = this.node;
          }

          var returnNode = null;
          var childNode = node.getChildByPath(name);

          if (childNode != null) {
            returnNode = childNode;
          }

          return returnNode;
        }

        getLabel(name, node) {
          if (node === void 0) {
            node = null;
          }

          if (node == null) {
            node = this.node;
          }

          var label = null;
          var childNode = node.getChildByPath(name);

          if (childNode != null) {
            var temp = childNode.getComponent(Label);

            if (temp != null) {
              label = temp;
            }
          }

          return label;
        }

        getToggle(name) {
          var tog = null;
          var childNode = this.node.getChildByPath(name);

          if (childNode != null) {
            var temp = childNode.getComponent(Toggle);

            if (temp != null) {
              tog = temp;
            }
          }

          return tog;
        }

        getSprite(name, node) {
          if (node === void 0) {
            node = null;
          }

          if (node == null) {
            node = this.node;
          }

          var sprite = null;
          var childNode = node.getChildByPath(name);

          if (childNode != null) {
            var temp = childNode.getComponent(Sprite);

            if (temp != null) {
              sprite = temp;
            }
          }

          return sprite;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7acfaa940e0f83f73e4f5a1715d7ce1a9a681607.js.map