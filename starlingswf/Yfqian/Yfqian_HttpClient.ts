class Yfqian_HttpClient extends  egret.DisplayObjectContainer{
    /** AS3 ZML创建，Egret Yfqian 修改
     * 请求url
     * @param url
     * @param params
     * @param completeFunction
     * @param method
     *
     */
    public constructor() {
        super();
    }
    public static send(url,params:any,completeFunction:Function=null,timeoutFunction:Function=null,method="get"):void{
        var request:egret.URLRequest;
        if(method=="get"){
            request = Yfqian_HttpClient.getRequest(url,params);
        }else if(method=="post"){
            request = Yfqian_HttpClient.postRequest(url,params);
        }

        var loader:egret.URLLoader = new egret.URLLoader();

        var callback:Function = function(e:Event):void{
            loader.removeEventListener(egret.Event.COMPLETE,callback,this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR,timeout,this);
            if(completeFunction!=null){
//					trace.goto(loader.data);
                completeFunction(loader.data);
            }
        };

        var timeout:Function = function(e:Event):void{
            loader.removeEventListener(egret.Event.COMPLETE,callback,this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR,timeout,this);
            if(timeoutFunction != null){
                timeoutFunction(loader.data);
            }
        };

        loader.addEventListener(egret.Event.COMPLETE,callback,this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR,timeout,this);
        loader.load(request);

    }


    private static getRequest(url,params:any):egret.URLRequest{
        url += "?"
        var k;
        for (k in params){
            url += k+"="+params[k] + "&";
        }
        return new egret.URLRequest(url.substring(0,url.length-1));
    }

    private static postRequest(url,params:any):egret.URLRequest{
        var UrlData;
        var k;
        for (k in params){
            if(!UrlData){
                UrlData=(k+"="+params[k]);
            }else{
                UrlData+="&"+(k+"="+params[k]);
            }
//            trace.log("获得数据："+params[k]);
        }

        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method =  egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(UrlData);//"select=1&ceshi=1");
        return request;
    }
}