import { GameData } from "../Data/GameData";

import { _decorator, Component, sys, game, assetManager, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component {
    public static Instance: SoundManager = null!;

    @property(AudioSource)
    mBgAudioSource:AudioSource = null!;

    @property(AudioSource)
    mSoundAudio:AudioSource = null!;

    onLoad() {
        SoundManager.Instance = this;
        game.addPersistRootNode(this.node);
    }

    start() {
 
    }

    PlayBGM(strName:string) {
        if (GameData.ins().BGM_Mute) {
            return;
        }
        let bundle = assetManager.getBundle("Sound");
        if (bundle != null) {
            bundle.load(strName, AudioClip, (err, clip:AudioClip) => {
                this.LoadResFinish(clip);
            });
        }
    }

    StopBGM() {
        this.LastMusicName = "";
        this.mBgAudioSource.stop();
    }

    LastMusicName:string = "";
    LoadResFinish (clip: AudioClip) {
        if (this.LastMusicName == clip.name) {
            return;
        }
        this.LastMusicName = clip.name;
        this.mBgAudioSource.clip = clip;
        this.mBgAudioSource.play();
    }

    PlaySound(strName: string, volume: number = 1) {
        if (GameData.ins().Sound_Mute)
        {
            return;
        }
        let bundle = assetManager.getBundle("Sound");
        if (bundle != null) {   
            bundle.load(strName, AudioClip, (err, clip:AudioClip) => {
                this.LoadSoundFinish(clip, volume);
            });
        }
        else {
            console.log("找不到资源，不能播放音效");
        }
    }

    LoadSoundFinish(clip: AudioClip, volume: number) {
        //clip.playOneShot(volume);
        this.mSoundAudio.playOneShot(clip, volume);
    }

    InitData()
    {
        this.mBgAudioSource.volume = GameData.ins().BGM_Mute ? 0 : 0.2;
    }

    SetBGM_On() {
        GameData.ins().BGM_Mute = false;
        this.mBgAudioSource.volume = 0.2;
        GameData.ins().SaveData_BGM();
    }

    SetBGM_Off() {
        GameData.ins().BGM_Mute = true;
        this.mBgAudioSource.volume = 0;
        GameData.ins().SaveData_BGM();
    }

    SetSound_On() {
        GameData.ins().Sound_Mute = false;
        GameData.ins().SaveData_Sound();
    }

    SetSound_Off() {
        GameData.ins().Sound_Mute = true;
        GameData.ins().SaveData_Sound();
    }
}
