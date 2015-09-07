module Yfqian {
	/**
	 *
	 * @author 
	 *
	 */
	export class Img {
        public loader: egret.URLLoader;
        public _UI_Obj;
        public constructor(UI_Url,UI_Obj) {
            this._UI_Obj=UI_Obj
            var url: string = UI_Url;
            var imgURL:egret.URLRequest = new egret.URLRequest();
            imgURL.url=url;
            this.loader = new egret.URLLoader();            
            this.loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
            this.loader.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            this.loader.load(imgURL);
        }

        public onPostComplete(event:egret.Event):void{
            trace.log('duqu')
            var loader:egret.URLLoader = <egret.URLLoader> event.target;
            var img:egret.Bitmap = new egret.Bitmap(loader.data);
            this._UI_Obj.addChild(img);
        }
        
	}
}
