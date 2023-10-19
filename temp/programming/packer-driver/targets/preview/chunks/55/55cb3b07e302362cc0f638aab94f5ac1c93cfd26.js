System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingletonClass, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7b1a1msOxLVbVZrxb00IUV", "SingletonClass", undefined);

      // 单例
      _export("default", SingletonClass = class SingletonClass {
        constructor() {}

        static ins() {
          if (!this._ins) {
            this._ins = new this();
          }

          return this._ins;
        }

      });

      SingletonClass._ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55cb3b07e302362cc0f638aab94f5ac1c93cfd26.js.map