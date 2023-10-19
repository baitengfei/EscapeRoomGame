System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CfgUtil, _decorator, Component, TextAsset, game, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ConfigLoader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCfgUtil(extras) {
    _reporterNs.report("CfgUtil", "./CfgUtil", _context.meta, extras);
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
      TextAsset = _cc.TextAsset;
      game = _cc.game;
    }, function (_unresolved_2) {
      CfgUtil = _unresolved_2.CfgUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67dcdalPhFCmbLtLDAyAVXz", "ConfigLoader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'TextAsset', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ConfigLoader", ConfigLoader = (_dec = ccclass('ConfigLoader'), _dec2 = property(TextAsset), _dec(_class = (_class2 = class ConfigLoader extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cfgs", _descriptor, this);

          this._sendOver = false;
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          this.loadCfgs();
        }

        start() {} //延迟加载


        loadCfgs() {
          console.log("开始读配置 ");

          this._cfgsInit();
        }

        //初始化配置
        _cfgsInit() {
          if (this._sendOver) {
            return;
          }

          var cfgDic = {}; //从预设引用 读取所有 配置数据

          this.cfgs.forEach(v => {
            cfgDic[v.name] = v.text;
          });
          var cfgMap = {}; //每个配置文件生成 id为索引的key

          for (let k in cfgDic) {
            if (!cfgMap[k]) {
              cfgMap[k] = {};
              var content = cfgDic[k];
              let listItems = [];
              var mapArr = content.split("\n");
              let listPropertys = [];
              listPropertys = mapArr[1].split("\t");

              for (var i = 2; i < mapArr.length; i++) {
                var arr = mapArr[i].split("\t");

                if (arr != null && mapArr[i] != "") {
                  let obj = {};

                  for (let index = 0; index < arr.length; index++) {
                    let arrName = listPropertys[index].trim();

                    if (arrName == "id") {
                      obj[arrName] = parseInt(arr[index]);
                    } else {
                      obj[arrName] = arr[index].toString().trim();
                    }
                  }

                  listItems.push(obj);
                }
              }

              cfgMap[k] = listItems;
            }
          }

          (_crd && CfgUtil === void 0 ? (_reportPossibleCrUseOfCfgUtil({
            error: Error()
          }), CfgUtil) : CfgUtil).ins().loadCfgOver(cfgMap);
          this._sendOver = true;
          console.log("配置读取完毕");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cfgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93c572dd26262c526963b985c5e1640afdfa5664.js.map