const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    
    @property(cc.Node)
    clearBtn: cc.Node = null;

    private graphics:cc.Graphics;

    private oldx:number;
    private oldy:number;

    onLoad(){

        
        this.graphics = this.node.getComponent(cc.Graphics);

        this.graphics.fillColor = cc.color(255, 0, 0, 255);
        
        this.node.parent.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoved,this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnded,this);
        this.clearBtn.on(cc.Node.EventType.TOUCH_START,this.onTouchClear,this);
    }

    onTouchClear(event){
        this.graphics.clear();
    }

    onTouchBegan(event) {

        var touchLoc = new cc.Vec2(event.getLocationX(),event.getLocationY());
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
        this.oldx = touchLoc.x;
        this.oldy = touchLoc.y;
        //this.graphics.moveTo(touchLoc.x,touchLoc.y);
    }

    onTouchMoved(event) {

        // // 获取触摸点数据
        var touchLoc = new cc.Vec2(event.getLocationX(),event.getLocationY());
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
        this.graphics.moveTo(this.oldx, this.oldy);                    
        this.graphics.lineTo(touchLoc.x, touchLoc.y);  
        this.graphics.stroke();
        this.graphics.fill();

        this.oldx = touchLoc.x; 
        this.oldy = touchLoc.y; 
    }

    // 清屏
    clearAll(){

    }

    // 橡皮擦
    rubber(){
       
    }

    onTouchEnded(event) {
        
    }

}
