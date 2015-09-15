module ZJM {
	export class ZJM_Ui {
        public spr_ZJM_DJ=spr_Ui.ZJM_spr.UIZJM.SprUi.getSprite("jd");
        public spr_ZJM_BJ=spr_Ui.ZJM_spr.UIZJM.SprUi.getSprite("bj");
        public spr_ZJM_TS=spr_Ui.ZJM_spr.UIZJM.SprUi.getSprite("ts");
        public spr_ZJM_FJ=spr_Ui.ZJM_spr.UIZJM.SprUi.getSprite("sprfj");
        public spr_ZJM_ZD=spr_Ui.ZJM_spr.UIZJM.SprUi.getSprite("sprzd");
        
		public constructor() {
            this.spr_ZJM_BJ.visible = false;
            this.spr_ZJM_TS.visible = false;
            this.spr_ZJM_FJ.visible = false;
//            this.spr_ZJM_FJ.visible = var;
            
		}
	}
}


