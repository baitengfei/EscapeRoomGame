//存储有关场景的一些信息，如场景名称和是否应该隐藏。这些信息可能在游戏中的场景管理和切换过程中使用。
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SceneInfo')
export class SceneInfo extends Component {
    @property({type:String})
    mSceneName:string = "";

    mbHide:boolean = false;
    
    start() {
        
    }

    update(deltaTime: number) {
        
    }
}

