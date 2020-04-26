import EventCenter from "./EventCenter";

export default class UIEvent  extends EventCenter{

    public _events:object = {};

    public static  _instance:UIEvent = null;

    public  UI_EVENT: "UI_EVENT";
     

    //全局自定义单例类
    public static getInstance():UIEvent
    {
        if(this._instance == null){
                this._instance = new UIEvent();
        }
            return this._instance;
    }
 
  
}