import EventCenter from "./event/EventCenter";
import UIEvent from "./event/UIEvent";

const {ccclass, property} = cc._decorator;

//游戏大厅
@ccclass
export default class GameMain extends cc.Component {

    @property(cc.Node)
    buttonParent: cc.Node = null;

    @property(cc.Node)
    maskView: cc.Node = null;

    @property(cc.Node)
    drawView: cc.Node = null;

    @property(cc.Node)
    timerView: cc.Node = null;

    @property(cc.Node)
    gameView: cc.Node = null;

    @property(cc.Node)
    videoView: cc.Node = null;

    @property(cc.Node)
    graphicsPanel:cc.Node=null;

    start () {
        this.initUI();
    }

    //初始化ui
    private initUI()
    {
        this.initUIEvent();
    }

    private initUIEvent()
    {
        //请注意游戏弹框分层  下次迭代要搞

        this.buttonEvent();
    }

    private buttonEvent()
    {
        for (let index = 0; index < this.buttonParent.children.length; index++) {
            const element = this.buttonParent.children[index];
            element.on(cc.Node.EventType.TOUCH_START,this.buttonHandler,this);
        }
    }

    private buttonHandler(event):void
    {
        let label = event.currentTarget.children[0].children[0].getComponent(cc.Label).string;
        switch (label) {
            case "计时器":
                this.openTimer();
                break;
            case "随机数":
                this.openRandom();
                break;
            case "画笔":
                this.openDrawPanel();
                break;
            case "图形":
                this.openGraphics();
                break;
            case "视频":
                this.openVideo();
                break;   
            case "游戏":
                this.openGame();
                break;  
            case "息屏":
                this.openMask();
                break;   
            default:
                break;
        }
    }

    private openDrawPanel()
    {
        if(this.drawView.active)
        {
            this.drawView.active = false;
        }else
        {
            this.drawView.active = true;
        }
    }

    private openTimer()
    {
        if(this.timerView.active)
        {
            this.timerView.active = false;
        }else
        {
            this.timerView.active = true;
        }
    }

    private openRandom()
    {
        
    }

    private openGraphics()
    {
        if(this.graphicsPanel.active)
        {
            this.graphicsPanel.active = false;
        }else
        {
            this.graphicsPanel.active = true;
        }
    }

    private openVideo()
    {
        if(this.videoView.active)
        {
            this.videoView.active = false;
        }else
        {
            this.videoView.active = true;
            let videoPlayer = this.videoView.getComponent(cc.VideoPlayer);
            //videoPlayer.remoteURL = "https://www.w3school.com.cn/i/movie.mp4";
            // videoPlayer.play();
           
        }
    }

    private openGame()
    {
        if(this.gameView.active)
        {
            this.gameView.active = false;
        }else
        {
            this.gameView.active = true;
        }
    }

    private openMask()
    {
        if(this.maskView.active)
        {
            this.maskView.active = false;
        }else
        {
            this.maskView.active = true;
        }
    }

}
