
module egret {

	export class MainTest extends DisplayObjectContainer{		
		public static load
		public constructor(){		
			super();
			var baifen:number = 0
//			MainTest.load = new Loader();
			MainTest.load.load(new URLRequest("Main.swf"));
			MainTest.load.contentLoaderInfo.addEventListener(Event.COMPLETE,this.completeHandler,this);
			MainTest.load.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS,function(e:ProgressEvent):void{
//				trace(e.bytesLoaded/e.bytesTotal*100);
				baifen=this.e.bytesLoaded/e.bytesTotal*100;
				this.console.log(baifen);
				
			},this);
		}
		public completeHandler(e:Event):void{
//			this.console.log(123)
			this.addChild(MainTest.load);
		}
	}
}