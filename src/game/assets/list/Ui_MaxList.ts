module list {
	/**
	 *
	 * @author 
	 *
	 */
    export class Ui_Load {
        public constructor() {
            new list.Ui_MaxList();
        }
    }
	export class Ui_MaxList {
        public static UiRes=[];
        public static UiMix;//当前图片数
        public static UiMax;//最大图片数
		public constructor() {
            Yfqian.log.LogOn = false;//目前没有加载页面打开。;
            list.Ui_MaxList.UiRes[0] = ["主界面资源加载","EgretSwf_All_ZJM","EgretSwf_ZJM","EgretSwf_ZJM_swf"];
            list.Ui_MaxList.UiRes[1] = ["跳转资源加载","EgretSwf_All_Log","EgretSwf_Log","EgretSwf_Log_swf"];
//            trace.log(list.Ui_MaxList.UiRes.length + " - " + list.Ui_MaxList.UiRes[0][0]);
            list.Ui_MaxList.UiMix = 0;
            list.Ui_MaxList.UiMax = list.Ui_MaxList.UiRes.length;
		}
	}
    export class dataList {
        public static urlIp="http://www.17wgj.com"
    }
}
