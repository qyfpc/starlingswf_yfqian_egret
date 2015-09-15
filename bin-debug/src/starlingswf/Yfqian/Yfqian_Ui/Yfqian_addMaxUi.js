/**
 * Created by DELL on 2015/6/1.
 */
var Yfqian;
(function (Yfqian) {
    var addMax_Ui = (function () {
        function addMax_Ui(Name, LogTime) {
            if (LogTime === void 0) { LogTime = 2000; }
            this.GameMaxUIW = 480;
            this.GameMaxUIH = 800;
            this.GsLogTime = LogTime;
            this.GoTo_Name = Name;
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
            RES.loadConfig("resource/EgretSwf/EgretSwf.json", "resource/EgretSwf/");
            RES.loadGroup("EgretSwf_All", 1);
            RES.loadGroup("EgretSwf_All_Loading", 0);
        }
        var __egretProto__ = addMax_Ui.prototype;
        __egretProto__.onConfigComp = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onlogResourceLoadErr, this);
        };
        __egretProto__.onlogResourceLoadErr = function (event) {
            trace.log("错误1");
            if (++this.countGroupError < 3) {
                //                RES.loadGroup(event.groupName);
                RES.loadGroup("EgretSwf_All", 1);
                RES.loadGroup("EgretSwf_All_Loading", 0);
            }
            else {
                /// 弹出网络失去连接提示等
                trace.goSX("弹出网络失去连接提示等");
            }
        };
        __egretProto__.onResourceLoadComplete = function (event) {
            if (event.groupName == "EgretSwf_All_Loading") {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onlogResourceLoadErr, this);
                var swfData = RES.getRes("EgretSwf_MaxUi_swf");
                var spriteSheet = RES.getRes("EgretSwf_MaxUi");
                var assetsManager = new starlingswf.SwfAssetManager();
                assetsManager.addSpriteSheet("EgretSwf_MaxUi", spriteSheet);
                var Swf = new starlingswf.Swf(swfData, assetsManager);
                Yfqian.addMax_Ui.Sprite = Swf.createSprite("spr_GameUiMax");
                Yfqian.addMax_Ui.Sprite.name = "GameUiMax";
                Main.MaxStage.addChild(Yfqian.addMax_Ui.Sprite);
                Main.MaxStage.setChildIndex(Yfqian.addMax_Ui.Sprite, 0);
                Yfqian.addMax_Ui.Sprite.scaleX = 100 / this.GameMaxUIW * (Main.MaxStage.stageWidth / 100);
                Yfqian.addMax_Ui.Sprite.scaleY = 100 / this.GameMaxUIH * (Main.MaxStage.stageHeight / 100);
                Yfqian.addMax_Ui.GameUi_GG = Yfqian.addMax_Ui.Sprite.getSprite("gg");
                Yfqian.addMax_Ui.GameUi_GsLog = Yfqian.addMax_Ui.Sprite.getSprite("gsLog");
                Yfqian.addMax_Ui.GameUi_GameLog = Yfqian.addMax_Ui.Sprite.getSprite("gameLog");
                Yfqian.addMax_Ui.GameUi = Yfqian.addMax_Ui.Sprite.getSprite("gameUi");
                this.gameLoading();
            }
        };
        __egretProto__.UiVis = function () {
            Yfqian.addMax_Ui.GameUi_GG.visible = false;
            //            Yfqian.addMax_Ui.GameUi.visible = false;
        };
        __egretProto__.UiList_SX = function () {
            trace.log("开始1");
            new Yfqian.resMaxUi(this.GoTo_Name);
            trace.log("开始2");
            //                initStarling.Offtext();
            //                        new Yfqian.loading(this.GoTo_Name,"界面资源",0,1);
            //                        new this.GoTo_Name();
            //            Main.MaxStage.removeChild(initStarling.Ontext);
        };
        /**
         * preload资源组加载进度
         */
        __egretProto__.onResourceProgress = function (event) {
        };
        __egretProto__.onReSize = function (e) {
            //            console.log(Main.MaxStage.stageWidth);
            //            console.log(Main.MaxStage.stageHeight);
            ClassList.MaxWidth = Main.MaxStage.stageWidth;
            ClassList.MaxHeight = Main.MaxStage.stageHeight;
            Yfqian.addMax_Ui.Sprite.scaleX = 100 / this.GameMaxUIW * (Main.MaxStage.stageWidth / 100);
            Yfqian.addMax_Ui.Sprite.scaleY = 100 / this.GameMaxUIH * (Main.MaxStage.stageHeight / 100);
            //            Yfqian.addMax_Ui.Sprite.getChildByName("GameUiMax").width = Main.MaxStage.stageWidth;
            //            Yfqian.addMax_Ui.Sprite.getChildByName("GameUiMax").height = Main.MaxStage.stageHeight;
        };
        __egretProto__.gameLoading = function () {
            var swfData = RES.getRes("EgretSwf_Loading_swf");
            var spriteSheet = RES.getRes("EgretSwf_Loading");
            var assetsManager = new starlingswf.SwfAssetManager();
            assetsManager.addSpriteSheet("EgretSwf_Loading", spriteSheet);
            var Swf = new starlingswf.Swf(swfData, assetsManager);
            Yfqian.addMax_Ui.LoadingSpr = Swf.createSprite("spr_Loading");
            Yfqian.addMax_Ui.GameUi_GameLog.addChild(Yfqian.addMax_Ui.LoadingSpr);
            if (this.GsLogTime == 0) {
                Yfqian.addMax_Ui.GameUi_GsLog.visible = false;
                var _UiVis = this.UiVis;
                setTimeout(function () {
                    initStarling.Offtext();
                    Yfqian.addMax_Ui.GameUi_GsLog.visible = false;
                    _UiVis();
                    this.UiList_SX();
                }.bind(this), 10);
            }
            else {
                var _UiVis = this.UiVis;
                initStarling.Offtext();
                setTimeout(function () {
                    Yfqian.addMax_Ui.GameUi_GsLog.visible = false;
                    _UiVis();
                    this.UiList_SX();
                }.bind(this), this.GsLogTime);
            }
            Yfqian.addMax_Ui.GameUi_GameLog.visible = false;
            Main.MaxStage.addEventListener(egret.Event.RESIZE, this.onReSize, this);
        };
        return addMax_Ui;
    })();
    Yfqian.addMax_Ui = addMax_Ui;
    addMax_Ui.prototype.__class__ = "Yfqian.addMax_Ui";
})(Yfqian || (Yfqian = {}));
//# sourceMappingURL=Yfqian_addMaxUi.js.map