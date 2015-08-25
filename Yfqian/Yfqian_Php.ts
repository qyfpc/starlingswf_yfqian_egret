class Yfqian_Php extends egret.DisplayObjectContainer
{
    //入口函数
    public constructor()
    {
        super();
        this.onAddToStage();
    }

    public onAddToStage()
    {
        //绘制文本
        this.drawText();
        //创建POST请求

        var url:string = "http://10.227.66.127/game/Evildoer/Server1List.json";
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.offPostComplete,this);
        loader.load(new egret.URLRequest(url));

//        var ok ={
//            select:1
//        };
//        var url:string = "http://10.227.66.127/game/json.php";
//        var loader:egret.URLLoader = new egret.URLLoader();
//        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
//        loader.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
//        var request:egret.URLRequest = new egret.URLRequest(url);
//        request.method = egret.URLRequestMethod.POST;
//        request.data = new egret.URLVariables("select=1");
//        loader.load(request);
//        this.statusGetLabel.text = "正在向httpbin.org发送POST请求";

    }

    //POST请求完成
    private onPostComplete(event:egret.Event):void
    {
        trace.log(123);
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
       trace.log("数据："+data.toString());
        this.statusGetLabel.text = "获得POST响应! ";
        this.statusGetLabel.text += "\nPOST响应: \n" + data.toString();

    }
    private offPostComplete(event:egret.IOErrorEvent):void
    {
        trace.log(123);
//        this.onAddToStage();
    }

    //绘制文本
    private statusGetLabel:egret.TextField;
    private drawText()
    {
        this.statusGetLabel = new egret.TextField();
        this.statusGetLabel.size = 12;
        this.statusGetLabel.text = "状态文本";
        this.statusGetLabel.x = 10;
        this.statusGetLabel.y = 10;
        this.statusGetLabel.width = 430;
        this.statusGetLabel.height = 430;
        this.addChild( this.statusGetLabel );
    }

}/**
 * Created by DELL on 2015/4/14.
 */
