class EventCenter{

    let _events = {};

    let _instance = null;

    let  TEST_EVENT: "TEST_EVENT";


    //定义一个静态方法
    EventCenter.getInstance = function(){
        if(!this.instance){
            this.instance = new EventCenter()
        }
        return this.instance
    }


     AddListener(eventname,callback,target){
        if(this._events[eventname] == undefined)
        {
            this._events[eventname] = [];
        }
        this._events[eventname].push({
            callback: callback,
            target: target,
        });
    }

     RemoveListener(eventname,callback,target){
        var handlers = this._events[eventname];
        for (var index = handlers.length - 1; index >= 0; index--) {
            var handler = handlers[index];
            if(target == handler.target && callback.toString() == handler.callback.toString())
            {
                this._events[eventname].splice(index, 1);
            };
        }
    }

      RemoveAllListener(eventname) {
        if(this._events[eventname] != undefined)
        {
            var handlers = this._events[eventname];
            for (var index = 0; index < handlers.length; index++) {
                handlers[index] = null;
            }
        }
    }

     ResetAllListener() {
        for (const key in this._events) {
            if (this._events.hasOwnProperty(key)) {
                delete this._events[key]; 
            }
        }
    }
    
     dispatchEvent(eventname,data){
        if(this._events[eventname] != undefined)
        {
            var handlers = this._events[eventname];
            for (var index = 0; index < handlers.length; index++) {
                var handler = handlers[index];
                handler.callback.call(handler.target,data);
            }
        }
    }

module.exports = EventCenter;

 
