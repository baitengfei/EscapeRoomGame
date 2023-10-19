import { _decorator, Component, assetManager, Sprite, SpriteFrame, Prefab, TextAsset, loader } from 'cc';
const { ccclass, property } = _decorator;

@ccclass
export default class ResManager extends Component {
    public static Instance:ResManager = null!;

    onLoad() {
        ResManager.Instance = this;
    }

    LoadSprite(bundleName:string, resName:string, spriteNode:Sprite) {
        let bundle = assetManager.getBundle(bundleName);
        let strResName = resName + "";
        if (bundle == null) {
            assetManager.loadBundle(bundleName, (error, any)=>{
                if (error) {
                    console.error("bundle载入错误:", bundleName);
                }
                else {
                    this.LoadSprite(bundleName, strResName, spriteNode);
                }
            });
        }
        else {
            bundle.load(strResName, SpriteFrame, (error, sprite:SpriteFrame)=>{
                if (error) {
                    console.error("sprite载入错误:", bundleName, strResName);
                }
                else {
                    spriteNode.spriteFrame = sprite;
                }
            })
        }
    }
    
    LoadPrefab(bundleName:string, resName:string, callback:any) {
        let bundle = assetManager.getBundle(bundleName);
        if (bundle == null) {
            assetManager.loadBundle(bundleName, (error, any)=>{
                if (error) {
                    console.error("载入错误:", bundleName);
                }
                else {
                    console.log("载入bundle包", bundleName);
                    
                    this.LoadPrefab(bundleName, resName, callback);
                }
            });
        }
        else {
            bundle.load(resName, Prefab, (error, prefab:Prefab)=>{
                if (error) {
                    console.error("载入错误:", bundleName, resName);
                }
                else {
                    if (callback != null) {
                        console.log("载入预制体成功，回调", resName);
                        callback(prefab);
                    }
                }
            })
        }
    }

    LoadConfig(resName:string) {
        let listConfigs:any[] = [];
        let bundle = assetManager.getBundle("Config");
        if (bundle != null) {
            bundle.load(resName, TextAsset, (error, content:TextAsset)=>{
                if (error) {
                    console.error("配置载入错误:", resName);
                }
                else {
                    var mapArr = content.text.split("\n")  
                    let listPropertys:string[] = [];
                    listPropertys = mapArr[1].split("\t");
                    for(var i = 2; i < mapArr.length;i++) {
                        var arr = mapArr[i].split("\t")
                        if(arr != null && mapArr[i] != "") {
                            let obj:any = {};  
                            for (let index = 0; index < arr.length; index++) {
                                let arrName = listPropertys[index].trim();
                                if (arrName == "id") {
                                    obj[arrName] = parseInt(arr[index]);
                                }
                                else {
                                    obj[arrName] = arr[index];
                                }
                            }
                            listConfigs.push(obj);
                            console.log("配置：", listConfigs[listConfigs.length - 1]);
                        }
                    } 

                    return listConfigs;
                }
            })
        }

        return listConfigs;
    }
}