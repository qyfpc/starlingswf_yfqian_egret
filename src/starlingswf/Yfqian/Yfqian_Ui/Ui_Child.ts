module spr_Ui {
	/**
	 *
	 * @唯一的标签，尽量在使用后直接销毁
	 *
	 */
    export class Swf {
        public static OnChild(UiName) {
            var NameSpr = "spr_" + UiName;
            var Sprite: starlingswf.SwfSprite;
            Sprite = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            Yfqian.addMax_Ui.GameUi.addChild(Sprite);
        }

    }
    /**
    * @UiName 调用资源名
    * @UiNameSpr 附属资源名
    */
    export class OnChild {
        public SprUi: starlingswf.SwfSprite;
        public constructor(UiName,UiNameSpr = null,gtUi=null) {
            var NameSpr;
            if(UiNameSpr == null) {
                NameSpr = "spr_" + UiName;
            } else {
                NameSpr = "spr_" + UiNameSpr;
            }
//trace.log(UiName+" - "+NameSpr)
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            if(gtUi == null) {
                Yfqian.addMax_Ui.GameUi.addChild(this.SprUi);

            } else {
                gtUi.addChild(this.SprUi);

            }

            
        }
    }
    export class OffChild {
        public constructor(UiNameObj,gtUi=null) {
            
            if(gtUi == null) {
                Yfqian.addMax_Ui.GameUi.removeChild(UiNameObj);

            } else {
                gtUi.removeChild(UiNameObj);

            }

        }
    }
    
    /**
    * @UiName 调用资源名
    * @UiNameSpr 附属资源名
    * @UiObj 传送一个显示容器
    */
    export class OnChild_Obj {
        public SprUi: starlingswf.SwfSprite;
        public constructor(UiName,UiNameSpr,UiObj) {
            
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(UiNameSpr);
            UiObj.addChild(this.SprUi);
        }
    }
    export class OffChild_Obj  {
        public constructor(UiNameObj,UiObj) {
            UiObj.removeChild(UiNameObj);
        }
    }
    
    
    export class OnChild_Log {
        public SprUi: starlingswf.SwfSprite;
        public Sprshp: egret.Shape;
        public constructor(UiName,UiNameSpr = null) {
            var NameSpr;
            if(UiNameSpr == null) {
                    NameSpr = "spr_" + UiName;
            } else {
                NameSpr = "spr_" + UiNameSpr;
            }
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            this.Sprshp = new egret.Shape();
            this.Sprshp.graphics.beginFill( 0x000000, 1);
            this.Sprshp.graphics.drawRect( 0, 0, 480, 800 );
            this.Sprshp.graphics.endFill();
            this.Sprshp.alpha = 0.3;
            Yfqian.TuchEvent.On(this.Sprshp);
            Yfqian.addMax_Ui.GameUi.addChild(this.Sprshp);
            Yfqian.addMax_Ui.GameUi.addChild(this.SprUi);
            Yfqian.addMax_Ui.GameUi.setChildIndex(this.SprUi,10000);
        }
    }
    export class OffChild_Log {
        public constructor(UiNameObj,UiBJObj) {
            Yfqian.addMax_Ui.GameUi.removeChild(UiNameObj);
            Yfqian.addMax_Ui.GameUi.removeChild(UiBJObj);
        }
    }
}
