System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, SpriteFrame, Prefab, TextAsset, _class, _class2, _crd, ccclass, property, ResManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
      TextAsset = _cc.TextAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "adc715JfZxPKodS4u91e+eZ", "ResManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assetManager', 'Sprite', 'SpriteFrame', 'Prefab', 'TextAsset', 'loader']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ResManager = ccclass(_class = (_class2 = class ResManager extends Component {
        onLoad() {
          ResManager.Instance = this;
        }

        LoadSprite(bundleName, resName, spriteNode) {
          let bundle = assetManager.getBundle(bundleName);
          let strResName = resName + "";

          if (bundle == null) {
            assetManager.loadBundle(bundleName, (error, any) => {
              if (error) {
                console.error("bundle载入错误:", bundleName);
              } else {
                this.LoadSprite(bundleName, strResName, spriteNode);
              }
            });
          } else {
            bundle.load(strResName, SpriteFrame, (error, sprite) => {
              if (error) {
                console.error("sprite载入错误:", bundleName, strResName);
              } else {
                spriteNode.spriteFrame = sprite;
              }
            });
          }
        }

        LoadPrefab(bundleName, resName, callback) {
          let bundle = assetManager.getBundle(bundleName);

          if (bundle == null) {
            assetManager.loadBundle(bundleName, (error, any) => {
              if (error) {
                console.error("载入错误:", bundleName);
              } else {
                console.log("载入bundle包", bundleName);
                this.LoadPrefab(bundleName, resName, callback);
              }
            });
          } else {
            bundle.load(resName, Prefab, (error, prefab) => {
              if (error) {
                console.error("载入错误:", bundleName, resName);
              } else {
                if (callback != null) {
                  console.log("载入预制体成功，回调", resName);
                  callback(prefab);
                }
              }
            });
          }
        }

        LoadConfig(resName) {
          let listConfigs = [];
          let bundle = assetManager.getBundle("Config");

          if (bundle != null) {
            bundle.load(resName, TextAsset, (error, content) => {
              if (error) {
                console.error("配置载入错误:", resName);
              } else {
                var mapArr = content.text.split("\n");
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
                        obj[arrName] = arr[index];
                      }
                    }

                    listConfigs.push(obj);
                    console.log("配置：", listConfigs[listConfigs.length - 1]);
                  }
                }

                return listConfigs;
              }
            });
          }

          return listConfigs;
        }

      }, _class2.Instance = null, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cc9888671f3e28c9ed20dca3110d77af9dbe733.js.map