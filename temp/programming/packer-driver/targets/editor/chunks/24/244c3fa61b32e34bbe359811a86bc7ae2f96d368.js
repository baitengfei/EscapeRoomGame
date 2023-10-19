System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SingletonClass, _decorator, _dec, _class, _crd, ccclass, property, CfgUtil;

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "../Base/SingletonClass", _context.meta, extras);
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
      SingletonClass = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfd865d+IROAoPrJS4vGsi5", "CfgUtil", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CfgUtil", CfgUtil = (_dec = ccclass('CfgUtil'), _dec(_class = class CfgUtil extends (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass) {
        constructor(...args) {
          super(...args);
          this.mCfgMap = null;
          this.mList_UICfgs = [];
        }

        static ins() {
          return super.ins();
        }

        loadCfgOver(cfgMap) {
          this.mCfgMap = cfgMap;
        }

        getUICfg(id) {
          if (!this.mCfgMap) {
            return;
          }

          let Cfg = {};
          let list = this.mCfgMap['UI'];

          for (let k in list) {
            if (list[k].id == id) {
              Cfg = list[k];
              break;
            }
          }

          return Cfg;
        }

        getCfg(id, cfgName) {
          if (!this.mCfgMap) {
            return;
          }

          let Cfg = {};
          let list = this.mCfgMap[cfgName];

          for (let k in list) {
            if (list[k].id == id) {
              Cfg = list[k];
              break;
            }
          }

          return Cfg;
        }

        getCfgList(cfgName) {
          if (!this.mCfgMap) {
            return;
          }

          let list = this.mCfgMap[cfgName];
          return list;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=244c3fa61b32e34bbe359811a86bc7ae2f96d368.js.map