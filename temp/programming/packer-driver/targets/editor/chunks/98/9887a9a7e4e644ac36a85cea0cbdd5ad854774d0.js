System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIBase, SoundManager, _dec, _class, _crd, ccclass, property, UI_Item_PC;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
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
      SoundManager = _unresolved_3.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1247XF+BtJAarAxOl5v2IP", "UI_Item_PC", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween', 'TiledUserNodeData']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Item_PC", UI_Item_PC = (_dec = ccclass('UI_Item_PC'), _dec(_class = class UI_Item_PC extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);
          this.mLabel_Info = void 0;
        }

        onStart() {
          this.mLabel_Info = this.getLabel("Info/Info");
          let Btn_Close = this.getNode("Btn_Close");
          Btn_Close.on("click", this.OnClickClose, this);
        }

        refresh() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).Instance.PlaySound("item");
          this.mLabel_Info.string = "一台笔记本";
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
//# sourceMappingURL=9887a9a7e4e644ac36a85cea0cbdd5ad854774d0.js.map