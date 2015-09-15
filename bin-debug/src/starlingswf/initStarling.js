/**
 * Created by Administrator on 2015/3/29.
 */
var initStarling = (function (_super) {
    __extends(initStarling, _super);
    function initStarling(GoTo_Name, fps, lognTime, Screen) {
        if (fps === void 0) { fps = false; }
        if (lognTime === void 0) { lognTime = 2000; }
        if (Screen === void 0) { Screen = false; }
        _super.call(this);
        new GameTips();
        initStarling.lognTime = lognTime;
        initStarling.lableNum = 0;
        initStarling.lableNum = 0;
        if (fps == true) {
            initStarling.fpsBoo = true;
            egret.Profiler.getInstance().run();
            initStarling.labletext = new egret.TextField(); //普通文本
            initStarling.labletext.text = "精灵:" + String(initStarling.lableNum);
            initStarling.labletext.strokeColor = 0x0000ff; //描边属性
            initStarling.labletext.bold = true; //粗体显示
            initStarling.labletext.x = 0;
            initStarling.labletext.y = 90;
            initStarling.labletext.size = 30;
            initStarling.labletext.textColor = 0xffff00;
            Main.MaxStage.addChild(initStarling.labletext);
            Main.MaxStage.setChildIndex(initStarling.labletext, 0);
        }
        new Yfqian.addMax_Ui(GoTo_Name, lognTime);
        //        ClassList.LogMaxUI.addChild(new Yfqian_gameLog(UiAll,name,logn,lognTime));
        initStarling.Ontext = new egret.TextField(); //普通文本
        initStarling.Ontext.height = ClassList.MaxHeight;
        initStarling.Ontext.width = ClassList.MaxWidth;
        initStarling.Ontext.text = "loading...";
        initStarling.Ontext.strokeColor = 0x0000ff; //描边属性
        initStarling.Ontext.bold = true; //粗体显示
        initStarling.Ontext.textAlign = egret.HorizontalAlign.LEFT; //水平对齐
        initStarling.Ontext.verticalAlign = egret.VerticalAlign.BOTTOM; //垂直对齐
        initStarling.Ontext.size = 18;
        initStarling.Ontext.textColor = 0xffffff;
        Main.MaxStage.addChild(initStarling.Ontext);
        initStarling.MaxStageTimer = new egret.Timer(500, 0); //循环次数0为无限
        initStarling.MaxStageTimer.start();
        initStarling.MaxStageTimer.addEventListener(egret.TimerEvent.TIMER, initStarling.StageTimer, this);
        initStarling.Ontext.x = 400;
    }
    var __egretProto__ = initStarling.prototype;
    initStarling.StageTimer = function (e) {
        if (initStarling.MaxStageState == 0) {
            initStarling.Ontext.text = "loading   ";
            initStarling.MaxStageState++;
        }
        else if (initStarling.MaxStageState == 1) {
            initStarling.Ontext.text = "loading.  ";
            initStarling.MaxStageState++;
        }
        else if (initStarling.MaxStageState == 2) {
            initStarling.Ontext.text = "loading.. ";
            initStarling.MaxStageState++;
        }
        else if (initStarling.MaxStageState == 3) {
            initStarling.Ontext.text = "loading...";
            initStarling.MaxStageState = 0;
        }
        //        trace.log("完成初始化");
    };
    initStarling.jingling = function (add) {
        if (add === void 0) { add = true; }
        if (initStarling.fpsBoo == true) {
            if (add == null) {
                initStarling.lableNum = 0;
            }
            else if (add == true) {
                initStarling.lableNum++;
            }
            else {
                initStarling.lableNum--;
            }
            initStarling.labletext.text = "精灵:" + String(initStarling.lableNum);
        }
    };
    initStarling.Offtext = function () {
        initStarling.MaxStageTimer.stop();
        //        initStarling.MaxStageTimer.removeEventListener(egret.TimerEvent.TIMER, initStarling.StageTimer,this);
        Main.MaxStage.removeChild(initStarling.Ontext);
    };
    initStarling.fpsBoo = false;
    initStarling.MaxStageState = 0;
    return initStarling;
})(egret.DisplayObjectContainer);
initStarling.prototype.__class__ = "initStarling";
//# sourceMappingURL=initStarling.js.map