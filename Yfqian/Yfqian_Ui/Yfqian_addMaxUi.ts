/**
 * Created by DELL on 2015/6/1.
 */
module Yfqian {
    export class addMax_Ui {
        public GsLogTime;
        public GoTo_Name;
        constructor(Name,LogTime=2000){
            this.GsLogTime=LogTime;
            this.GoTo_Name=Name;
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
            RES.loadConfig("resource/EgretSwf/EgretSwf.json", "resource/EgretSwf/");
            RES.loadGroup("EgretSwf_All",1);
            RES.loadGroup("EgretSwf_All_Loading",0);
        }
        private onConfigComp(event:RES.ResourceEvent):void {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
        }
        /**
         * preload资源组加载完成
         */
        public static Sprite:starlingswf.SwfSprite;
        public GameMaxUIW=480;
        public GameMaxUIH=800;
        public static GameUi_GG;
        public static GameUi_GsLog;
        public static GameUi_GameLog;
        public static GameUi_timestop;
        public static GameUi;
        private countGroupError;
        private onResourceLoadErr( event:RES.ResourceEvent ):void {

            if( ++this.countGroupError < 3 ){
                RES.loadGroup(event.groupName);
            }else{
                /// 弹出网络失去连接提示等
                trace.goSX("弹出网络失去连接提示等");
            }
        }
        
        private onResourceLoadComplete(event:RES.ResourceEvent):void {
            if (event.groupName == "EgretSwf_All_Loading") {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
                var swfData:Object = RES.getRes("EgretSwf_MaxUi_swf");
                var spriteSheet:egret.SpriteSheet = RES.getRes("EgretSwf_MaxUi");

                var assetsManager = new starlingswf.SwfAssetManager();
                assetsManager.addSpriteSheet("EgretSwf_MaxUi", spriteSheet);

                var Swf:starlingswf.Swf = new starlingswf.Swf(swfData, assetsManager);

                Yfqian.addMax_Ui.Sprite = Swf.createSprite("spr_GameUiMax");
                Yfqian.addMax_Ui.Sprite.name = "GameUiMax";
                Main.MaxStage.addChild(Yfqian.addMax_Ui.Sprite);
                Main.MaxStage.setChildIndex(Yfqian.addMax_Ui.Sprite,0);
                Yfqian.addMax_Ui.Sprite.scaleX = 100 / this.GameMaxUIW * (Main.MaxStage.stageWidth / 100);
                Yfqian.addMax_Ui.Sprite.scaleY = 100 / this.GameMaxUIH * (Main.MaxStage.stageHeight / 100);
                Yfqian.addMax_Ui.GameUi_GG = Yfqian.addMax_Ui.Sprite.getSprite("gg");
                Yfqian.addMax_Ui.GameUi_GsLog = Yfqian.addMax_Ui.Sprite.getSprite("gsLog");
                Yfqian.addMax_Ui.GameUi_GameLog = Yfqian.addMax_Ui.Sprite.getSprite("gameLog");
                Yfqian.addMax_Ui.GameUi = Yfqian.addMax_Ui.Sprite.getSprite("gameUi");
                this.gameLoading();
                if (this.GsLogTime == 0) {
                    Yfqian.addMax_Ui.GameUi_GsLog.visible = false;
                    this.UiVis();
                    this.UiList_SX();
                }else{
                    var _UiVis=this.UiVis;
                    setTimeout(function () {
                        Yfqian.addMax_Ui.GameUi_GsLog.visible = false;
//                        Yfqian.addMax_Ui.Sprite.removeChild(Yfqian.addMax_Ui.GameUi_GsLog);
                        _UiVis();
                        this.UiList_SX();
                    }.bind(this), this.GsLogTime)
                }

                Yfqian.addMax_Ui.GameUi_GameLog.visible = false;
            }
            Main.MaxStage.addEventListener(egret.Event.RESIZE,this.onReSize,this);
        }
        private UiVis(){
            Yfqian.addMax_Ui.GameUi_GG.visible = false;
//            Yfqian.addMax_Ui.GameUi.visible = false;
        }
      
        private UiList_SX(){//刷新界面ui列表
                new Yfqian.resMaxUi(this.GoTo_Name);
//                initStarling.Offtext();
//                        new Yfqian.loading(this.GoTo_Name,"界面资源",0,1);
//                        new this.GoTo_Name();
//            Main.MaxStage.removeChild(initStarling.Ontext);
        }
        /**
         * preload资源组加载进度
         */
        private onResourceProgress(event:RES.ResourceEvent):void {

        }
        private onReSize(e:egret.Event){
//            console.log(Main.MaxStage.stageWidth);
//            console.log(Main.MaxStage.stageHeight);
            ClassList.MaxWidth = Main.MaxStage.stageWidth;
            ClassList.MaxHeight = Main.MaxStage.stageHeight;
            Yfqian.addMax_Ui.Sprite.scaleX=100/this.GameMaxUIW*(Main.MaxStage.stageWidth/100);
            Yfqian.addMax_Ui.Sprite.scaleY=100/this.GameMaxUIH*(Main.MaxStage.stageHeight/100);
//            Yfqian.addMax_Ui.Sprite.getChildByName("GameUiMax").width = Main.MaxStage.stageWidth;
//            Yfqian.addMax_Ui.Sprite.getChildByName("GameUiMax").height = Main.MaxStage.stageHeight;
        }
        public static LoadingSpr:starlingswf.SwfSprite;
        private gameLoading(){
            var swfData:Object = RES.getRes("EgretSwf_Loading_swf");
            var spriteSheet:egret.SpriteSheet = RES.getRes("EgretSwf_Loading");

            var assetsManager = new starlingswf.SwfAssetManager();
            assetsManager.addSpriteSheet("EgretSwf_Loading", spriteSheet);

            var Swf:starlingswf.Swf= new starlingswf.Swf(swfData, assetsManager);
            Yfqian.addMax_Ui.LoadingSpr = Swf.createSprite("spr_Loading");
            Yfqian.addMax_Ui.GameUi_GameLog.addChild(Yfqian.addMax_Ui.LoadingSpr);
        }
    }
}