System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIOpacity, tween, SceneInfo, _dec, _class, _crd, ccclass, property, SceneBase;

  function _reportPossibleCrUseOfSceneInfo(extras) {
    _reporterNs.report("SceneInfo", "./SceneInfo", _context.meta, extras);
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
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      SceneInfo = _unresolved_2.SceneInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f97eeJInt5J6qQHo+WkzfTw", "SceneBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UIOpacity', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneBase", SceneBase = (_dec = ccclass('SceneBase'), _dec(_class = class SceneBase extends Component {
        start() {}

        update(deltaTime) {}

        show() {}

        hide() {}

        hideAll() {}

        ToMainScene() {}

        showScene(sceneNode) {
          sceneNode.getComponent(_crd && SceneInfo === void 0 ? (_reportPossibleCrUseOfSceneInfo({
            error: Error()
          }), SceneInfo) : SceneInfo).mbHide = false;
          sceneNode.active = true;
          sceneNode.setPosition(0, 0, 0);
          let uiOpacity = sceneNode.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
          tween(uiOpacity).to(1, {
            opacity: 255
          }).start();
        }

        hideScene(sceneNode) {
          sceneNode.getComponent(_crd && SceneInfo === void 0 ? (_reportPossibleCrUseOfSceneInfo({
            error: Error()
          }), SceneInfo) : SceneInfo).mbHide = true;
          let uiOpacity = sceneNode.getComponent(UIOpacity);
          uiOpacity.opacity = 255;
          tween(uiOpacity).to(1, {
            opacity: 0
          }).call(() => {
            if (sceneNode.getComponent(_crd && SceneInfo === void 0 ? (_reportPossibleCrUseOfSceneInfo({
              error: Error()
            }), SceneInfo) : SceneInfo).mbHide) {
              sceneNode.active = false;
            }
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7cbbceb825990989581a00cb69c52ede20fe5d5.js.map