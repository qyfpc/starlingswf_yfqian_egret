/**
 * Created by Administrator on 2015/4/30.
 */
class Yfqian_TextField extends egret.DisplayObjectContainer {
    public constructor() {
        super();
    }
    public static verticalAlign(TextObj):void {
        TextObj.verticalAlign=egret.VerticalAlign.MIDDLE;//垂直对齐
    }
    public static stroke(TextObj,strokeNum=1,ColorNum=0x000000):void {
        TextObj.strokeColor=ColorNum;//描边属性
        TextObj.stroke=strokeNum;//描边像素
    }
    public GongGao(TextObj,ColorNum=1,ToH=0.25,strokeNum=1):void {
        var lable:egret.TextField = new egret.TextField();//普通文本
        lable.text=TextObj;
        lable.strokeColor=0x000000;//描边属性
        lable.stroke=strokeNum;//描边像素
        lable.width=ClassList.MaxWidth;

//        lable.height=ClassList.MaxHeight;
        lable.textAlign=egret.HorizontalAlign.CENTER;//水平对齐
        lable.verticalAlign=egret.VerticalAlign.MIDDLE;//垂直对齐
        lable.bold=true;//粗体显示
        lable.anchorOffsetX=ClassList.MaxWidth/2;
        lable.x=ClassList.MaxWidth/2;
        trace.log("x:"+lable.x+"anchorX:"+lable.anchorX)
//      lable.anchorOffsetY=lable.height*2;
//        lable.italic=true;//斜体显示
        lable.y=ClassList.MaxHeight*ToH;
        lable.size=30;
        switch (ColorNum) {
            case 1 :
                lable.textColor=0x00FF00;//绿色
                break;
            case 2 :
                lable.textColor=0x00CCFF;//蓝色
                break;
            case 3 :
                lable.textColor=0xFF9933;//橙色
                break;
            case 4 :
                lable.textColor=0xFF0000;//红色
                break;
            case 5 :
                lable.textColor=0xFF00FF;//紫色
                break;
            case 6 :
                lable.textColor=0x999999;//灰色
                break;
            case 7 :
                lable.textColor=0xffff00;//黄色
                break;
            case 8 :
                lable.textColor=0x00ffff;//天蓝色
                break;
            default :
                lable.textColor=0xffffff;
        }

        ClassList.MaxUI.addChild(lable);
        lable.scaleX=lable.scaleY=0.8;
        TweenMax.to(lable, 0.1,{scaleX:2, scaleY:2});
        setTimeout(function(){
            TweenMax.to(lable, 0.1,{bezier:[{y:lable.y-10}],scaleX:1, scaleY:1});
            setTimeout(function(){
                TweenMax.to(lable, 4,{bezier:[{y:-80}],alpha:0.5});
                setTimeout(function(){
                    ClassList.MaxUI.removeChild(lable);
                }.bind(this),2000);
            }.bind(this),100);
        }.bind(this),100);
    }
    public static LoadingTxt():void {
        initStarling.logtext= new egret.TextField();//普通文本
        initStarling.logtext.text="资源加载中：（1/1）";
        initStarling.logtext.strokeColor=0x000000;//描边属性
        initStarling.logtext.bold=true;//粗体显示
        initStarling.logtext.y=ClassList.MaxHeight*0.7;
        initStarling.logtext.size=24;
        initStarling.logtext.width=ClassList.MaxWidth;
        initStarling.logtext.textAlign=egret.HorizontalAlign.CENTER;//水平对齐
        initStarling.logtext.verticalAlign=egret.VerticalAlign.MIDDLE;//垂直对齐
        initStarling.logtext.anchorOffsetX=ClassList.MaxWidth/2;
        initStarling.logtext.x=ClassList.MaxWidth/2;
        initStarling.logtext.textColor=0xffffff;
        ClassList.LogMaxUI.addChild(initStarling.logtext);
        ClassList.LogMaxUI.setChildIndex(initStarling.logtext,10000);
    }
    public static LoadingTxtOff():void {
        ClassList.LogMaxUI.removeChild(initStarling.logtext);
    }

}