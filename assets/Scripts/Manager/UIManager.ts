import { _decorator, Component, game, Node, assetManager, Prefab, instantiate } from "cc";
import { UIBase } from "../Base/UIBase";
import { CfgUtil } from "../Config/CfgUtil";

const { ccclass, property } = _decorator;

// UI 类型
export enum UIType {
    Main = 1,
    Game,
    Tips,
    Bag,
    Dialogue,
    Pause,
    Item_PC,
    Item_Phone,
    Item_Watch,
    Win,
    

    Max
}

var UIRootType:string[] = ["UIMain", "UIAlert", "UITip"];

@ccclass('UIManager')
export class UIManager extends Component {
    static Instance:UIManager = null!;

    UINode:Node|null = null!;
    @property(Node)
    canvas:Node|null = null;

    UINodeList:any[] = [];

    bInit:boolean = false;
    UIMap:any = {};

    onLoad() {
        UIManager.Instance = this;
        game.addPersistRootNode(this.node);
    
    }

    init() {
        if (this.bInit)
        {
            return;
        }
        if (!this.UINode) {
            if (this.canvas) {
                this.UINode = this.canvas.getChildByName("UINode");
                if (this.UINode) {
                    var typeList = UIRootType;
                    this.UINodeList.length = 0;
                    for (var k in typeList) {
                        let nodeName = typeList[k];
                        this.UINodeList.push({name:nodeName, node:this.UINode.getChildByName(nodeName)});
                    }
                }
    
                this.bInit = true;
            }
        }
    }

    getUIParentNode(type:string) {
        for (let index = 0; index < this.UINodeList.length; index++) {
            let info = this.UINodeList[index];
            if (info.name == type) {
                return info.node;
            }
        }

        return null;
    }

    getUICfg(uiEnum) {
        var cfg = CfgUtil.ins().getUICfg(uiEnum);
        return cfg;
    }

    getUIComponent(type:UIType) {
        if (this.UIMap[type] == null)
        {
            return null;
        }
        if (this.UIMap[type].Show) 
        {
            if (this.UIMap[type].node != null) {
                var uiBase:UIBase = this.UIMap[type].node.getComponent(UIBase);
                if (uiBase && typeof (uiBase.refreshBase) == "function") {
                    return uiBase;
                }
            }
        }
        return null;
    }

    openUI(type:UIType, args:any = null) {
        if (!this.bInit) {
            this.init();
        }
        if (this.UIMap[type] == null)
        {
            this.UIMap[type] = {};
        }
        if (this.UIMap[type].Show) 
        {
            if (this.UIMap[type].node != null) {
                this.UIMap[type].node.active = true;
                this.UIMap[type].node.setSiblingIndex(100);
                var uiBase:UIBase = this.UIMap[type].node.getComponent(UIBase);
                if (uiBase && typeof (uiBase.refreshBase) == "function") {
                    uiBase.refreshBase(args);
                }
            }
            return;
        }
        this.UIMap[type].Show = true;
        if (this.UIMap[type].node != null) {
            this.UIMap[type].node.active = true;
            this.UIMap[type].node.setSiblingIndex(100);
            var uiBase:UIBase = this.UIMap[type].node.getComponent(UIBase);
            if (uiBase && typeof (uiBase.refreshBase) == "function") {
                uiBase.refreshBase(args);
            }
        }
        else {
            if (this.UIMap[type].bCreate) 
            {
                return;
            }
            this.UIMap[type].bCreate = true;
            var cfg:any = this.getUICfg(type);
            var path = cfg.name;
            let bundleName = "UI";
            let bundle = assetManager.getBundle(bundleName);
            if (cfg && bundle != null) {
                bundle.load(path, Prefab, (error, prefabAsset:Prefab) => {
                    if (!this.UIMap[type].Show)
                    {
                        //console.log("UI已关闭", type);
                        this.UIMap[type].bCreate = false;
                        return;
                    }
                    var uiNode:Node = instantiate(prefabAsset);
                    //console.log("UI实例化", type, ",", uiNode);
                    var ui:UIBase|null = uiNode.getComponent(UIBase);
                    if (ui == null) {
                        console.error('该UI未挂脚本', uiNode.name);
                    }
                    uiNode.active = true;
                    uiNode.setSiblingIndex(100);
                    uiNode.parent = this.getUIParentNode(cfg.type);

                    // this.UIMap[type] = {};
                    this.UIMap[type].node = uiNode;

                    //console.log("打开界面",type);
                    
                    if (ui) {
                        ui.bDestroyMode = false;
                        ui.type = type;
                        if (typeof (ui.onStart) == "function") {
                            ui.onStart();
                        }
                        if (typeof (ui.refreshBase) == "function") {
                            ui.refreshBase(args);
                        }
                        if (!this.UIMap[type].Show)
                        {
                            uiNode.active = false;
                            this.closeUI(type);
                        }
                    }
                });
            }
            else {
                console.error(" 没有此UI 配置", type);
            }
        }
    }

    preLoadUI(type:UIType) {
        var cfg:any = this.getUICfg(type);
        var path = cfg.name;
        let bundleName = "UI";
        let bundle = assetManager.getBundle(bundleName);
        if (bundle != null) {
            bundle.preload(path, Prefab);
        }
    }

    closeUI(type:UIType) {
        if (this.UIMap[type] != null)
        {
            this.UIMap[type].Show = false;
            var node:Node = this.UIMap[type].node;
            if (node != null) {
                var uiBase:UIBase|null = node.getComponent(UIBase);
                if (uiBase != null && uiBase.bDestroyMode)
                {
                    node.destroy();
                    this.UIMap[type] = null;
                }
                else
                {
                    node.active = false;
                    //console.log("UI关闭了",node.name,",",type);
                }
            }
        }   
    }

    //关闭所有UI
    closeAllUI() {
        console.log("关闭所有UI");
        for (let k in this.UIMap) {
            if (this.UIMap[k] != null)
            {
                this.UIMap[k].Show = false;
                var node:Node = this.UIMap[k].node;
                if (node != null) {
                    var uiBase:UIBase|null = node.getComponent(UIBase);
                    if (uiBase != null && uiBase.bDestroyMode)
                    {
                        node.destroy();
                        this.UIMap[k] = null;
                    }
                    else
                    {
                        node.active = false;
                        console.log("UI关闭了",node.name,",",k);
                    }
                }
            }  
        }
    }

    listTips:string[] = [];
    tipsPrefab:Prefab|null = null;
    ShowTips(content:string) {
        //console.log("准备提示：" + content);
        if (this.listTips.length <= 0)
        {
            this.listTips.push(content);

            if (this.tipsPrefab == null)
            {
                var cfg:any = this.getUICfg(UIType.Tips);
                var path = cfg.name;
                let bundle = assetManager.getBundle("UI");
                if (cfg && bundle != null) {
                    bundle.load(path, Prefab, (error, prefab:Prefab) => {
                        this.tipsPrefab = prefab;
                        this.InstanceTips();
                    });
                }
            }
            else    
            {
                this.InstanceTips();
            }
        }
        else
        {
            this.listTips.push(content);
        }
    }

    InstanceTips() {
        if (this.listTips.length <= 0)
        {
            return;
        }

        let content:string = "";
        for (let k in this.listTips) {
            content = this.listTips[k];
            break;
        }

        if (this.tipsPrefab == null) {
            return;
        }
        var node = instantiate(this.tipsPrefab);
        if (node == null) {
            return;
        }
        var ui:UIBase|null = node.getComponent(UIBase);
        if (ui == null) {
            console.error('该UI未挂脚本');
        }

        var pNodeName = "UITip";
        node.parent = this.getUIParentNode(pNodeName);

        if (ui) {
            ui.bDestroyMode = true;
            ui.type = UIType.Tips;
            if (typeof (ui.onStart) == "function") {
                ui.onStart();
            }
            if (typeof (ui.refreshBase) == "function") {
                ui.refreshBase(content);
            }

            let self = this;
            this.scheduleOnce(function() {
                self.listTips.splice(0, 1);
                self.InstanceTips();
            }, 0.5);
        }
    }

}
