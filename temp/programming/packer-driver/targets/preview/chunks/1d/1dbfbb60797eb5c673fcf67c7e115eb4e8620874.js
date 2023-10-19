System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, director, Sprite, Component, GameData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadingManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Data/GameData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      director = _cc.director;
      Sprite = _cc.Sprite;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69a499cWolF1J5K4TMXw4wK", "LoadingManager", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'director', 'Sprite', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingManager", LoadingManager = (_dec = ccclass("LoadingManager"), _dec2 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class LoadingManager extends Component {
        constructor() {
          super(...arguments);
          //载入子包（文件位置: Res/SubPackages/..）
          //需要动态加载的资源都应该放在该子包文件夹下
          this.readyLoadSubPackage = ["Config", "UI", "Sound", "S1", "S2", "S3", "S4"];
          this.currentPackageIndex = 0;

          _initializerDefineProperty(this, "mProgress", _descriptor, this);

          this.bLoadFinish = false;
        }

        onLoad() {}

        start() {
          director.preloadScene("Main", () => {
            console.log("预加载主场景");
          }); // 载入数据

          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().LoadData();
          this.mProgress.fillRange = 0;
          this.LoadSubPackages();
        }

        LoadSubPackages() {
          var self = this;
          self.currentPackageIndex = 0;
          var subPackageName = self.readyLoadSubPackage[self.currentPackageIndex];
          self.LoadSubPackage(subPackageName);
        }

        LoadSubPackage(resName) {
          assetManager.loadBundle(resName, err => {
            if (err) {
              // 载入失败，暂时不用管，网页没有此方法会载入失败
              console.log("加载子包失败：" + resName);
            } else {
              // 载入成功
              console.log("加载子包成功：" + resName);
            }

            this.currentPackageIndex += 1;
            this.mProgress.fillRange = this.currentPackageIndex / this.readyLoadSubPackage.length;

            if (this.currentPackageIndex < this.readyLoadSubPackage.length) {
              var subPackageName = this.readyLoadSubPackage[this.currentPackageIndex];
              this.LoadSubPackage(subPackageName);
            } else {
              // 子包全部载入完毕
              this.LoadFinish();
            }
          });
        }

        LoadFinish() {
          this.mProgress.fillRange = 1;
          this.bLoadFinish = true;
          director.loadScene("Main");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mProgress", [_dec2], {
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
//# sourceMappingURL=1dbfbb60797eb5c673fcf67c7e115eb4e8620874.js.map