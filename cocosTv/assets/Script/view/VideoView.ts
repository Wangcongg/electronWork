const {ccclass, property} = cc._decorator;

@ccclass
export default class VideoView extends cc.Component {

    @property(cc.VideoPlayer)
    videoplayer: cc.VideoPlayer = null;

    onLoad() 
    {
        this.videoplayer.node.on('ready-to-play', this.callback, this);
     }
 
     callback (event) {
        this.videoplayer.play();
     }
}

