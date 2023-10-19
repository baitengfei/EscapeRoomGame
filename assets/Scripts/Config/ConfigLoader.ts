//加载和解析游戏的配置文件
import { CfgUtil } from './CfgUtil';
import { _decorator, Component, TextAsset, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ConfigLoader')
export class ConfigLoader extends Component {

    @property(TextAsset)
    cfgs:TextAsset[]=[];

    onLoad() {
        game.addPersistRootNode(this.node);
        this.loadCfgs();
    }

    start() {
        
    }

    //延迟加载
    loadCfgs() {
        console.log("开始读配置 ");
        this._cfgsInit();
    }

    _sendOver:boolean=false;
    //初始化配置
    _cfgsInit() {
        if (this._sendOver) {
            return;
        }
        var cfgDic:any = {};
        //从预设引用 读取所有 配置数据
        this.cfgs.forEach(v => {
            cfgDic[v.name] = v.text;
        });

        var cfgMap:any = {};
        //每个配置文件生成 id为索引的key
        for (let k in cfgDic) {
            if (!cfgMap[k]) {
                cfgMap[k] = {};

                var content = cfgDic[k];
                let listItems:any[] = [];
                var mapArr = content.split("\n")  
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
                                obj[arrName] = arr[index].toString().trim();
                            }
                        }
                        listItems.push(obj);
                    }
                }
                cfgMap[k] = listItems;
            }
        }
        CfgUtil.ins().loadCfgOver(cfgMap);
        this._sendOver = true;

        console.log("配置读取完毕");
    }
}
