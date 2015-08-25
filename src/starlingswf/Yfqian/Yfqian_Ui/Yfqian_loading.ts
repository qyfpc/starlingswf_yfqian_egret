/**
 * Created by Administrator on 2015/6/3.
 */
module Yfqian {
    export class loading {
        public loadingMask;
        public loadingMaskW;
        public LoadingMaxNum;
        public LoadingMixNum;
        public LoadingNum;
        public loadingT = Yfqian.addMax_Ui.LoadingSpr.getImage("loadingT");
        public jz1 = Yfqian.addMax_Ui.LoadingSpr.getTextField("jz1");
        public jz2 = Yfqian.addMax_Ui.LoadingSpr.getTextField("jz2");
        public id1 = Yfqian.addMax_Ui.LoadingSpr.getTextField("id");
        public id2 = Yfqian.addMax_Ui.LoadingSpr.getTextField("id2");
        public goToName;
        public stopSettime;
        public static loadingOn: Yfqian.loading;
        private _Name;
        private _TextName;
        private _TextMix;
        private _TextMax;

        constructor(Name,TextName,TextMix,TextMax) {
            Yfqian.loading.loadingOn = this;
            this._Name = Name
            this._TextName = TextName
            this._TextMix = TextMix
            this._TextMax = TextMax
            this.LoadingMaxNum = 100;
            this.LoadingMixNum = 0;
            clearTimeout(Yfqian.addMax_Ui.GameUi_timestop);
            Yfqian.addMax_Ui.GameUi_GameLog.visible = true;
            this.loadingMaskW = this.loadingT.width;
            this.loadingMask = new egret.Rectangle(0,0,this.loadingT.width,this.loadingT.height);
            this.loadingT.mask = this.loadingMask;
            this.goToName = Name;
            this.jz1.text = TextName + "... " + this.LoadingMixNum + "%";
            this.jz2.text = "资源总数：（" + TextMix + "/" + TextMax + "）";
            this.JingDu(Name,TextName,TextMix,TextMax);
            //            trace.log(this.loadingT.width+":"+this.loadingMask.width)
        }
        public JingDu(Name,TextName,TextMix,TextMax) {
            this.LoadingMixNum++;
            if(this.LoadingMixNum == 99) {
                trace.goSX();//重启页面
            } else {
                this.LoadingNum = Number(this.loadingMaskW) / Number(this.LoadingMaxNum) * Number(this.LoadingMixNum);
//                trace.log(this.LoadingNum+" - "+this.loadingMaskW+" - "+this.LoadingMaxNum+" - "+this.LoadingMixNum)
                this.loadingMask.width = this.LoadingNum;
                this.jz1.text = TextName + "... " + this.LoadingMixNum + "%";
                var JD_Time =Math.round(Math.random() * (3000 - 1000) + 1000);
                this.stopSettime = setTimeout(function() {
                    this.JingDu(Name,TextName,TextMix,TextMax);
                }.bind(this),JD_Time);
//                if(initStarling.lognMax != false) {
//                    initStarling.Offtext();
//                    initStarling.lognMax = false;
//                }
            }
        }
        public JingDu_Off() {
            clearTimeout(Yfqian.loading.loadingOn.stopSettime)
            Yfqian.loading.loadingOn.JingDu_TimeOff(Yfqian.loading.loadingOn._Name,Yfqian.loading.loadingOn._TextName,Yfqian.loading.loadingOn._TextMix,Yfqian.loading.loadingOn._TextMax);
        }
        public JingDu_TimeOff(Name,TextName,TextMix,TextMax) {
            Yfqian.loading.loadingOn.LoadingMixNum += 5;
            if(Yfqian.loading.loadingOn.LoadingMixNum >= 100) {
                Yfqian.loading.loadingOn.LoadingNum = Number(Yfqian.loading.loadingOn.loadingMaskW) / Number(Yfqian.loading.loadingOn.LoadingMaxNum) * Number(100);
                Yfqian.loading.loadingOn.loadingMask.width = Yfqian.loading.loadingOn.LoadingNum;
                Yfqian.loading.loadingOn.jz1.text = TextName + "... 100%";
                this.jz2.text = "资源总数：（" + (TextMix + 1) + "/" + TextMax + "）";
                // Yfqian.addMax_Ui.GameUi_timestop=
                setTimeout(function() {
                    Yfqian.addMax_Ui.GameUi_GameLog.visible = false;
                    Yfqian.resMaxUi.This_resMaxUi.setUi(Name);
                }.bind(this),500);
            } else {
                Yfqian.loading.loadingOn.LoadingNum = Number(Yfqian.loading.loadingOn.loadingMaskW) / Number(Yfqian.loading.loadingOn.LoadingMaxNum) * Number(Yfqian.loading.loadingOn.LoadingMixNum);
                //                trace.log(this.LoadingNum+" - "+this.loadingMaskW+" - "+this.LoadingMaxNum+" - "+this.LoadingMixNum)
                Yfqian.loading.loadingOn.loadingMask.width = Yfqian.loading.loadingOn.LoadingNum;
                Yfqian.loading.loadingOn.jz1.text = TextName + "... " + Yfqian.loading.loadingOn.LoadingMixNum + "%";
                Yfqian.loading.loadingOn.stopSettime = setTimeout(function() {
                    Yfqian.loading.loadingOn.JingDu_TimeOff(Name,TextName,TextMix,TextMax);
                }.bind(this),10);
            }
        }

    }
    /**
    * @Yfqian.log.On(); //开启临时条
    * @Yfqian.log.Off();//关闭临时条
    */
    export class log {
        public static UiLog;
        public static LogOn;
        public static On(textName="网络数据") {   
            if(Yfqian.log.LogOn == false) {
                Yfqian.log.LogOn = true;
                Yfqian.log.UiLog = new spr_Ui.OnChild_Log("Log");
                Yfqian.log.UiLog.SprUi.x = (ClassList.MaxWidth - Yfqian.log.UiLog.SprUi.width) / 2;
                Yfqian.log.UiLog.SprUi.y = (ClassList.MaxHeight - Yfqian.log.UiLog.SprUi.height) / 2;
                var TextName = Yfqian.log.UiLog.SprUi.getTextField("txt");
                TextName.text = textName + "加载中(小于1k) ...";
            } else {
                trace.log("目前参口已经被打开");
            }
        }
        public static Off() {
            Yfqian.log.LogOn = false;  
            new spr_Ui.OffChild_Log(Yfqian.log.UiLog.SprUi,Yfqian.log.UiLog.Sprshp);
        }

    }
}