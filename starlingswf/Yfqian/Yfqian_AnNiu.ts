/**
 * Created by DELL on 2015/5/11.
 */
class Yfqian_AnNiu extends  egret.DisplayObjectContainer {
    public static ChatANTime;
    public constructor(AnNiuObj) {
        super();
        clearTimeout(Yfqian_AnNiu.ChatANTime);
        AnNiuObj.scaleX=AnNiuObj.scaleY=0.5;
        Yfqian_AnNiu.ChatANTime=setTimeout(function(){
            AnNiuObj.scaleX=AnNiuObj.scaleY=1;
        },100)


    }
}