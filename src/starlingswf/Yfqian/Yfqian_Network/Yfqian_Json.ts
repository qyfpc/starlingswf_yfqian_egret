module Yfqian {
	/**
	 *
	 * @author 
	 *
	 */
	export class Yfqian_Json {
        private _URlObjNum;
        public JsonTips;
        public JsonMaxNum;//最大json数量
		public constructor(URLObj,UrlON=false) {
            this.Postopen(URLObj,UrlON);
            this._URlObjNum=URLObj;
		}
        public Postopen(URLObj,UrlON=false):void
        {
            Yfqian.log.On();
            var url:string = GameTips.URLID+GameTips.TipsObj[URLObj].UrlId;
            var loader:egret.URLLoader = new egret.URLLoader();
            loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            loader.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.offPostComplete,this);       
            loader.load(new egret.URLRequest(url));
            
            //网络加载页面
            
            trace.log(url+": huode :"+GameTips.TipsObj[URLObj].UrlWZ);
        }
        //请求完成
        private onPostComplete(event:egret.Event):void
        {
            Yfqian.log.Off();
            var loader:egret.URLLoader = <egret.URLLoader> event.target;
            var data:egret.URLVariables = loader.data;
            this.JsonTips=JSON.parse(data.toString());
            this.JsonMaxNum=this.JsonTips.info.length;//获取最大值
            trace.log("获得文字内容："+this.JsonTips.info[0].GG_List)
            }
        //请求失败
        private offPostComplete(event:egret.IOErrorEvent):void{
            //        new Yfqian_Json(this._URlObjNum,true);
        }
	}
}
