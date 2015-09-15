module spr_Ui {
	/**
	 * @登陆界面，包括角色创建
	 */
	export class ZJM_spr {
        public static Swf:spr_Ui.ZJM_spr;//其他外部类可以使用，是一个公有方法！
        public static UIZJM: spr_Ui.OnChild;//其他外部类可以使用，是一个公有方法！用于控制ui
        /**
        * @使用方法：spr_Ui.ZJM_spr.UIZJM.SprUi
        */      
		public constructor() {
            spr_Ui.ZJM_spr.Swf = this;
            spr_Ui.ZJM_spr.UIZJM=new spr_Ui.OnChild("ZJM");//在舞台上生成zjm这个ui
            /**
            * @使用方法：也可以不调用类。
    
            var SprUi: starlingswf.SwfSprite;
            SprUi = new Yfqian.McData("ZJM").Swf.createSprite("ZJM");
            Yfqian.addMax_Ui.GameUi.addChild(SprUi);
            
            */  
            
            new ZJM.ZJM_Ai();
            
		}
        public Off() {
            new spr_Ui.OffChild(spr_Ui.ZJM_spr.UIZJM.SprUi);
        }
	}
}
