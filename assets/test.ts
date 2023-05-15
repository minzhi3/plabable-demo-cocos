import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
  start() {
    window.gameReady && window.gameReady();
    window.gameEnd && window.gameEnd();
  }

  update(deltaTime: number) {}
}
