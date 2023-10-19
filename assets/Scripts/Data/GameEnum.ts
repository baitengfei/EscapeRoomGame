// 游戏数据定义
export enum EventEnum {
    LoginSuccess,

    //更新背包组件，UI_Bag 调用
    UpdateItem,
    //场景切换，SceneManager 调用
    ChangeScene,
    //
    UpdateSceneItem,
    //解锁门，UI_Item_Watch 调用
    OpenDoor,
}

export enum ePopType {
    HttpConnect,
    WechatAuth,
    DeleteFriend,
}

export enum OpenDataEnum{
    ShowRank,
    ShowRank_Endless,
    HideRank,
}

// 基本数据信息
export class CBaseData {
    // 首次登录
    isFirstLoign:boolean = true;
    // 离线的时间
    mOfflineTime:number = 0;
    // 上次保存信息的时间戳
    mLastSaveTimeStamp:number = 0;


    // 获得手机
    mbGetItem_Phone:boolean = false;
    // 是否点击过抽屉
    mbLockDrawerTips:boolean = false;
    // 获得钥匙
    mbGetItem_Key:boolean = false;
    //解锁抽屉
    mbUnlockDrawer:boolean = false;
    // 打开抽屉
    mbOpenDrawer:boolean = false;
    // 获得智能手表
    mbGetItem_Watch:boolean = false;
    // 大门解锁
    mbUnlockDoor:boolean = false;
    // 大门解锁前的提示
    mbLockDoorTips:boolean = false;
}
