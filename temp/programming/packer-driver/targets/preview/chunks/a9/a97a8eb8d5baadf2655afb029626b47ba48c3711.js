System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tween, UIOpacity, UIBase, _dec, _class, _crd, ccclass, property, UI_Tips;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77ad8D/IrdEH7ceM6bALkhI", "UI_Tips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Tips", UI_Tips = (_dec = ccclass('UI_Tips'), _dec(_class = class UI_Tips extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.label = void 0;
        }

        onStart() {
          this.label = this.getLabel('bg/Info');
        }

        refresh() {
          if (!this.args) {
            return;
          }

          this.label.string = this.args;
          this.unschedule(this.Hide);
          this.scheduleOnce(this.Hide, 1.2);
        }

        Hide() {
          var uiOpacity = this.getComponentInChildren(UIOpacity);
          uiOpacity.opacity = 255;
          tween(uiOpacity).to(1, {
            opacity: 0
          }).call(() => {
            this.node.destroy();
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a97a8eb8d5baadf2655afb029626b47ba48c3711.js.map