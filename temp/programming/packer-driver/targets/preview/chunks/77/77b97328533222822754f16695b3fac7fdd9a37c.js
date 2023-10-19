System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIBase, GameManager, _dec, _class, _crd, ccclass, property, UI_Dialogue;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../Base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Manager/GameManager", _context.meta, extras);
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
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a2c1qtu6tNt7cvhWfMnhT1", "UI_Dialogue", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'Vec3', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UI_Dialogue", UI_Dialogue = (_dec = ccclass('UI_Dialogue'), _dec(_class = class UI_Dialogue extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.mLabel_Info = void 0;
          this.mInfoDatas = ["我这是在哪", "对了，在小扎的民宿里", "他说安装了一些智能设备，还说要教我怎么用", "切，这还用教，看不起谁呢", "不过，怎么开灯?"];
          this.mDialogueIndex = 0;
        }

        onStart() {
          this.mLabel_Info = this.getLabel("bg/Info");
          var Btn_Next = this.getNode("Btn_Next");
          Btn_Next.on("click", this.OnClickNextDialogue, this);
        }

        refresh() {
          this.mDialogueIndex = 0;
          this.mLabel_Info.string = this.mInfoDatas[this.mDialogueIndex];
        }

        onEnable() {}

        onDisable() {}

        OnClickNextDialogue() {
          this.mDialogueIndex += 1;

          if (this.mDialogueIndex < this.mInfoDatas.length) {
            this.mLabel_Info.string = this.mInfoDatas[this.mDialogueIndex];
          } else {
            this.close();
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance.ShowScene();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77b97328533222822754f16695b3fac7fdd9a37c.js.map