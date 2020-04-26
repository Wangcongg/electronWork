const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    chNode: cc.Node = null;
    private pointsDis:number = 1;

    start () {
        this.chNode.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this);
        this.chNode.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoved,this);
        this.chNode.on(cc.Node.EventType.TOUCH_END,this.onTouchEnded,this);
    }

    
    onTouchBegan(event) {
    
    }

    onTouchMoved(event) {
        
        let touches = event.getTouches();

        if (touches.length == 2) {
            // 两根手指是缩放
            let touchPoint1 = this.node.convertToNodeSpaceAR(touches[0].getLocation());
            let touchPoint2 = this.node.convertToNodeSpaceAR(touches[1].getLocation());
            let newPointsDis = touchPoint1.sub(touchPoint2).mag();
     
            if (newPointsDis > this.pointsDis) {
                // 表明两根手指在往外划
                this.pointsDis = newPointsDis;
                this.chNode.scale += 0.05;
            }   
            else if (newPointsDis < this.pointsDis) {
                // 表明两根手指在往内划
                if (this.chNode.scale <= 1) {
                    this.chNode.scale = 1;
                    return;
                }
                this.pointsDis = newPointsDis;
                this.chNode.scale -= 0.05;
            }
     
            this.restrictPic();
        }else
        {
            //获取触摸点数据
            var touchLoc = new cc.Vec2(event.getLocationX(),event.getLocationY());
            touchLoc = this.node.convertToNodeSpaceAR(touchLoc);

            this.chNode.x = touchLoc.x;
            this.chNode.y = touchLoc.y;
        }
        
    }


    restrictPic () {
        // 限制移动，放置出现黑边
        // let picWidth = this.chNode.getBoundingBox().width;
        // let picHeight = this.chNode.getBoundingBox().height;
        // if (this.picNode.x>0 && this.picNode.x-0>picWidth/2-this.maskNode.width/2)
        //     this.picNode.x = picWidth/2-this.maskNode.width/2;
        // if (this.picNode.x<0 && this.picNode.x-0<this.maskNode.width/2-picWidth/2)
        //     this.picNode.x = this.maskNode.width/2-picWidth/2;
        // if (this.picNode.y>0 && this.picNode.y-0>picHeight/2-this.maskNode.height/2)
        //     this.picNode.y = picHeight/2-this.maskNode.height/2;
        // if (this.picNode.y<0 && this.picNode.y-0<this.maskNode.height/2-picHeight/2)
        //     this.picNode.y = this.maskNode.height/2-picHeight/2;
    }
    onTouchEnded(event) {
    
    }


}
