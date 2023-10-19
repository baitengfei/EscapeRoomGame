System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIBase, _dec, _class, _crd, ccclass, property, UI_Item_Phone;

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
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18652aafThH7ZW1EfFrRB3q", "UI_Item_Phone", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween', 'TiledUserNodeData', 'UIMeshRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Item_Phone", UI_Item_Phone = (_dec = ccclass('UI_Item_Phone'), _dec(_class = class UI_Item_Phone extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.mLabel_Info = void 0;
        }

        onStart() {
          this.mLabel_Info = this.getLabel("Info/Info");
          var Btn_Close = this.getNode("Btn_Close");
          Btn_Close.on("click", this.OnClickClose, this);
        }

        refresh() {
          this.mLabel_Info.string = "一个智能手机";
        }

        onEnable() {}

        onDisable() {}

        OnClickClose() {
          this.close();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fda6cf479bbf27d3d8be504f7d5702c7a76cdae7.js.map