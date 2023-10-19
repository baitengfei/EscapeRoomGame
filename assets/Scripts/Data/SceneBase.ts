import { _decorator, Component, Node, UIOpacity, tween } from 'cc';
import { SceneInfo } from './SceneInfo';
const { ccclass, property } = _decorator;

@ccclass('SceneBase')
export class SceneBase extends Component {

    start() {

    }

    update(deltaTime: number) {
        
    }

    show() {

    }

    hide() {

    }

    hideAll() {

    }

    ToMainScene() {

    }
    
    showScene(sceneNode:Node) { 
        sceneNode.getComponent(SceneInfo).mbHide = false;

        sceneNode.active = true;
        sceneNode.setPosition(0, 0, 0);

        let uiOpacity = sceneNode.getComponent(UIOpacity);
        uiOpacity.opacity = 0;

        tween(uiOpacity)
        .to(1, {opacity: 255})
        .start();
    }
    hideScene(sceneNode:Node) {
        sceneNode.getComponent(SceneInfo).mbHide = true;

        let uiOpacity = sceneNode.getComponent(UIOpacity);
        uiOpacity.opacity = 255;

        tween(uiOpacity)
        .to(1, {opacity: 0})
        .call(()=>{
            if (sceneNode.getComponent(SceneInfo).mbHide) {
                sceneNode.active = false;
            }
        })
        .start();
    }
}

