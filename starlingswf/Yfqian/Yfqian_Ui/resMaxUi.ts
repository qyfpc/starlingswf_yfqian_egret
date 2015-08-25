module Yfqian {
	/**
	 *
	 * @author 
	 *
	 */
    export class resMaxUi {
        private _UiMix;
        private _UiMax;
        private _gotoName;
        public static This_resMaxUi: Yfqian.resMaxUi;

        public constructor(gotoName) {
            Yfqian.resMaxUi.This_resMaxUi = this;
            this._UiMix = 0
            this._UiMax = list.Ui_MaxList.UiRes.length;
            this._gotoName = gotoName;
            this.setUi(gotoName);
        }
        public setUi(gotoName) {
            if(list.Ui_MaxList.UiMix < list.Ui_MaxList.UiMax) {
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComp,this);
                RES.loadConfig("resource/EgretSwf/EgretSwf.json","resource/EgretSwf/");
                RES.loadGroup(list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][1]);
                //                RES.loadGroup(list.Ui_MaxList.UiRes[Yfqian.resMaxUi.This_resMaxUi._UiMix][1]);    
                new Yfqian.loading(gotoName,list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][0],list.Ui_MaxList.UiMix,list.Ui_MaxList.UiMax);
            } else {
                new gotoName();
//                trace.goto(11111);
//                Yfqian.addMax_Ui.GameUi.visible = true;
//                trace.log("进入游戏")

            }
        }
        public onConfigComp(event: RES.ResourceEvent): void {
            this.countGroupError = 0;
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComp,this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadErr,this);
        }
        private countGroupError;
        private onResourceLoadErr(event:RES.ResourceEvent ):void {
            trace.log( this.countGroupError );
            if( ++this.countGroupError < 3 ){
                RES.loadGroup(event.groupName);
            }else{
                /// 弹出网络失去连接提示等
                trace.goSX("弹出网络失去连接提示等");
            }
        }
        public onResourceLoadComplete(event: RES.ResourceEvent): void {
            if(event.groupName == list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][1]) {            
                RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onResourceLoadErr,this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
                list.Ui_MaxList.UiMix++;
                Yfqian.loading.loadingOn.JingDu_Off();
            }
        }
    }
    export class McData {
//        public Sprite:starlingswf.SwfSprite;
        public Swf:starlingswf.Swf ;
        public static EventUi:Yfqian.McData;
        public constructor(UIName,fps=12) {//UIObj,GameUiObj,GameMod,fps
            var UIObj = {
                UISwf:"EgretSwf_"+UIName+"_swf",
                UISheet:"EgretSwf_"+UIName
            }
            Yfqian.McData.EventUi = this;
            var swfData:Object = RES.getRes(UIObj.UISwf);
            var spriteSheet:egret.SpriteSheet = RES.getRes(UIObj.UISheet);
            
            var assetsManager = new starlingswf.SwfAssetManager();
            assetsManager.addSpriteSheet(UIObj.UISheet, spriteSheet);
            this.Swf = new starlingswf.Swf(swfData, assetsManager, fps);
//            trace.log("资源获得");
//            
//            this.Sprite = this.Swf.createSprite("spr_2100001");
//            GameUiObj.addChild(this.Sprite);
        }
    }

}


