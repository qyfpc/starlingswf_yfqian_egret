/**
 * Created by Administrator on 2015/3/29.
 */
class initStarling extends egret.DisplayObjectContainer {
    /**
     *
     * @param name 启动类
     * @param fps  显示信息
     * @param logn 是否需要开放广告
     * @param lognTime 广告停留事件
     * @param Screen 是否动态自适应浏览器
     */
    public static lableNum;
    public static Ontext:egret.TextField;
    public static labletext:egret.TextField;
    public static logtext:egret.TextField;
    public static logtextMax;
    public static logtextMix;
    public static fpsBoo=false;
    public static MaxStageTimer:egret.Timer;
    public static MaxStageState=0;
    public static lognTime;
    public static lognMax;
    public constructor(GoTo_Name,fps=false,lognTime=2000,Screen=false) {
        super();
        new GameTips();
        initStarling.lognTime = lognTime;
        initStarling.lableNum=0;
        initStarling.lableNum=0;
        if (fps == true) {
            initStarling.fpsBoo=true;
            egret.Profiler.getInstance().run();
            initStarling.labletext= new egret.TextField();//普通文本
            initStarling.labletext.text="精灵:"+String(initStarling.lableNum);
            initStarling.labletext.strokeColor=0x0000ff;//描边属性
            initStarling.labletext.bold=true;//粗体显示
            initStarling.labletext.x=0;
            initStarling.labletext.y=90;
            initStarling.labletext.size=30;
            initStarling.labletext.textColor=0xffff00;
            Main.MaxStage.addChild(initStarling.labletext);
            Main.MaxStage.setChildIndex(initStarling.labletext,0);
        }
        new Yfqian.addMax_Ui(GoTo_Name,lognTime);
//        ClassList.LogMaxUI.addChild(new Yfqian_gameLog(UiAll,name,logn,lognTime));
        initStarling.Ontext= new egret.TextField();//普通文本
        initStarling.Ontext.height = ClassList.MaxHeight;
        initStarling.Ontext.width = ClassList.MaxWidth;
        initStarling.Ontext.text="loading...";
        initStarling.Ontext.strokeColor=0x0000ff;//描边属性
        initStarling.Ontext.bold=true;//粗体显示
        initStarling.Ontext.textAlign=egret.HorizontalAlign.LEFT;//水平对齐
        initStarling.Ontext.verticalAlign=egret.VerticalAlign.BOTTOM;//垂直对齐
        initStarling.Ontext.size=18;
        initStarling.Ontext.textColor=0xffffff;
        Main.MaxStage.addChild(initStarling.Ontext);
        initStarling.MaxStageTimer= new egret.Timer(500, 0);//循环次数0为无限
        initStarling.MaxStageTimer.start();
        initStarling.MaxStageTimer.addEventListener(egret.TimerEvent.TIMER, initStarling.StageTimer,this);
        initStarling.Ontext.x = 400;
    }

    public static StageTimer(e:egret.TimerEvent):void{
        if(initStarling.MaxStageState==0){
            initStarling.Ontext.text="loading   ";
            initStarling.MaxStageState++;
        }else if(initStarling.MaxStageState==1){
            initStarling.Ontext.text="loading.  ";
            initStarling.MaxStageState++; 
        }else if(initStarling.MaxStageState==2){
            initStarling.Ontext.text="loading.. ";
            initStarling.MaxStageState++; 
        }else if(initStarling.MaxStageState==3){
            initStarling.Ontext.text="loading...";
            initStarling.MaxStageState=0; 
        }
        trace.log(1111);
    }

    public static jingling(add=true){
        if(initStarling.fpsBoo==true){
            if(add==null){
                initStarling.lableNum=0;
            }else if(add==true){
                initStarling.lableNum++;
            }else{
                initStarling.lableNum--;
            }
            initStarling.labletext.text="精灵:"+String(initStarling.lableNum);
        }
    }
    public static Offtext(){
        initStarling.MaxStageTimer.stop();
//        initStarling.MaxStageTimer.removeEventListener(egret.TimerEvent.TIMER, initStarling.StageTimer,this);
        Main.MaxStage.removeChild(initStarling.Ontext);  
    }
}
