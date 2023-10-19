System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameData, _decorator, Component, game, assetManager, AudioClip, AudioSource, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, SoundManager;

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
      Component = _cc.Component;
      game = _cc.game;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e145B/eNlE7Zl88FI1P0u5", "SoundManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys', 'game', 'assetManager', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = (_class3 = class SoundManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mBgAudioSource", _descriptor, this);

          _initializerDefineProperty(this, "mSoundAudio", _descriptor2, this);

          this.LastMusicName = "";
        }

        onLoad() {
          SoundManager.Instance = this;
          game.addPersistRootNode(this.node);
        }

        start() {}

        PlayBGM(strName) {
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().BGM_Mute) {
            return;
          }

          let bundle = assetManager.getBundle("Sound");

          if (bundle != null) {
            bundle.load(strName, AudioClip, (err, clip) => {
              this.LoadResFinish(clip);
            });
          }
        }

        StopBGM() {
          this.LastMusicName = "";
          this.mBgAudioSource.stop();
        }

        LoadResFinish(clip) {
          if (this.LastMusicName == clip.name) {
            return;
          }

          this.LastMusicName = clip.name;
          this.mBgAudioSource.clip = clip;
          this.mBgAudioSource.play();
        }

        PlaySound(strName, volume = 1) {
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().Sound_Mute) {
            return;
          }

          let bundle = assetManager.getBundle("Sound");

          if (bundle != null) {
            bundle.load(strName, AudioClip, (err, clip) => {
              this.LoadSoundFinish(clip, volume);
            });
          } else {
            console.log("找不到资源，不能播放音效");
          }
        }

        LoadSoundFinish(clip, volume) {
          //clip.playOneShot(volume);
          this.mSoundAudio.playOneShot(clip, volume);
        }

        InitData() {
          this.mBgAudioSource.volume = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().BGM_Mute ? 0 : 0.2;
        }

        SetBGM_On() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().BGM_Mute = false;
          this.mBgAudioSource.volume = 0.2;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveData_BGM();
        }

        SetBGM_Off() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().BGM_Mute = true;
          this.mBgAudioSource.volume = 0;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveData_BGM();
        }

        SetSound_On() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().Sound_Mute = false;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveData_Sound();
        }

        SetSound_Off() {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().Sound_Mute = true;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).ins().SaveData_Sound();
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mBgAudioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mSoundAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc99ad77fbee2a61414edefcfabb182a0eda257f.js.map