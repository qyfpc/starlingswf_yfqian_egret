/**
 * Created by zmliu on 14-5-11.
 */
module starlingswf{
    /**
     * Swf文档类
     * */
    export class Swf{

        public static dataKey_Sprite:string = "spr";
        public static dataKey_Image:string = "img";
        public static dataKey_MovieClip:string = "mc";
        public static dataKey_TextField:string = "text";
        public static dataKey_Button:string = "btn";
        public static dataKey_Scale9:string = "s9";
        public static dataKey_ShapeImg:string = "shapeImg";
        public static dataKey_Component:string = "comp";
        public static dataKey_Particle:string = "particle";

        //创建对象的方法
        private _createDisplayFuns:Object;

        //swf数据
        private _swfData:Object;
        //swf资源
        private _assetManager:starlingswf.SwfAssetManager;
        //动画更新器
        public swfUpdateManager:starlingswf.SwfUpdateManager;

        constructor(swfData:Object,assetManager:starlingswf.SwfAssetManager,fps:number = 24){
            this._swfData = swfData;
            this._assetManager = assetManager;

            this._createDisplayFuns = new Object();
            this._createDisplayFuns[Swf.dataKey_Sprite] = this.createSprite;
            this._createDisplayFuns[Swf.dataKey_MovieClip] = this.createMovie;
            this._createDisplayFuns[Swf.dataKey_Image] = this.createImage;
            this._createDisplayFuns[Swf.dataKey_Button] = this.createButton;
            this._createDisplayFuns[Swf.dataKey_Scale9] = this.createS9Image;
            this._createDisplayFuns[Swf.dataKey_ShapeImg] = this.createShapeImage;
            this._createDisplayFuns[Swf.dataKey_TextField] = this.createTextField;

            this.swfUpdateManager = starlingswf.SwfUpdateManager.createSwfUpdateManager(fps);
        }

        public createSprite(name:string,data:any[] = null,sprData:any[] = null):starlingswf.SwfSprite{
            if(sprData == null){
//                trace.log("获得链接"+name);
                sprData = this._swfData[Swf.dataKey_Sprite][name];
            }

            var sprite:starlingswf.SwfSprite = new starlingswf.SwfSprite();
            var length:number = sprData.length;
            var objData:any[];
            var display:egret.DisplayObject;
            var fun:Function;
            var swf:Swf;
            for (var i:number = 0; i < length; i++) {
                objData = sprData[i];

                fun = this._createDisplayFuns[objData[1]];
                if(fun == null) continue;
                display = fun.apply(this,[objData[0],objData]);
                display.name = objData[9];
                display.x = objData[2];
                display.y = objData[3];
                if(objData[1] != Swf.dataKey_Scale9 && objData[1] != Swf.dataKey_ShapeImg){
                    display.scaleX = objData[4];
                    display.scaleY = objData[5];
                }
                display.skewX = objData[6];
                display.skewY = objData[7];
                display.alpha = objData[8];

                sprite.addChild(display);
            }

            if(data != null){
                starlingswf.SwfBlendMode.setBlendMode(sprite,<string>data[11]);
            }
            sprite.touchChildren =sprite.touchEnabled = true;//鼠标事件yfqian添加
            return sprite;
        }
        
       
        

        public createMovie(name:string,data:any[]=null):starlingswf.SwfMovieClip{
            var movieClipData:Object = this._swfData[Swf.dataKey_MovieClip][name];
            var objectCountData:Object = movieClipData["objCount"];
            var displayObjects:Object = {};
            var displayObjectArray:any[];
            var type:string;
            var count:number;
            var fun:Function;
            var objName:string;
            for(objName in objectCountData){
                type = objectCountData[objName][0];
                count = objectCountData[objName][1];

                displayObjectArray = displayObjects[objName] == null ? [] : displayObjects[objName];

                for (var i:number = 0; i < count; i++) {
                    fun = this._createDisplayFuns[type];
                    if(fun == null) continue;
                    displayObjectArray.push(fun.apply(this,[objName,null]));
                }

                displayObjects[objName] = displayObjectArray;
            }

            var mc:starlingswf.SwfMovieClip = new starlingswf.SwfMovieClip(movieClipData["frames"],movieClipData["labels"],displayObjects,this,movieClipData["frameEvents"]);
            mc.loop = movieClipData["loop"];

            if(data != null){
                starlingswf.SwfBlendMode.setBlendMode(mc,<string>data[11]);
            }
            mc.touchChildren =mc.touchEnabled = true;//鼠标事件yfqian添加
            return mc;

        }

        public createImage(name:string,data:any[] = null):egret.Bitmap{
            var imageData:number[] = this._swfData[Swf.dataKey_Image][name];

            var bitmap:egret.Bitmap = this._assetManager.createBitmap(name);

            bitmap.anchorOffsetX = imageData[0];
            bitmap.anchorOffsetY = imageData[1];

            if(data != null){
                starlingswf.SwfBlendMode.setBlendMode(bitmap,<string>data[11]);
            }
            bitmap.touchEnabled = true;//鼠标事件yfqian添加
            return bitmap;
        }

        public createButton(name:string,data:any[] = null,sprData:any[] = null):starlingswf.SwfSprite{
            if(sprData == null){
                //                trace.log("获得链接"+name);
                sprData = this._swfData[Swf.dataKey_Button][name];
            }
            
            var sprite:starlingswf.SwfSprite = new starlingswf.SwfSprite();
            var length:number = sprData.length;
            var objData:any[];
            var display:egret.DisplayObject;
            var fun:Function;
            var swf:Swf;
            for (var i:number = 0; i < length; i++) {
                objData = sprData[i];
                
                fun = this._createDisplayFuns[objData[1]];
                if(fun == null) continue;
                display = fun.apply(this,[objData[0],objData]);
                display.name = objData[9];
                display.x = objData[2];
                display.y = objData[3];
                if(objData[1] != Swf.dataKey_Scale9 && objData[1] != Swf.dataKey_ShapeImg){
                    display.scaleX = objData[4];
                    display.scaleY = objData[5];
                }
                display.skewX = objData[6];
                display.skewY = objData[7];
                display.alpha = objData[8];
                
                sprite.addChild(display);
            }
            
            if(data != null){
                starlingswf.SwfBlendMode.setBlendMode(sprite,<string>data[11]);
            }
            sprite.touchChildren =sprite.touchEnabled = true;//鼠标事件yfqian添加
            var Btn = false;
            sprite.addEventListener( egret.TouchEvent.TOUCH_BEGIN, Button_On,this);
            var btnTime;
            sprite.anchorOffsetX = sprite.width / 2;
            sprite.anchorOffsetY = sprite.height / 2;
            function Button_On()
            {
                if(Btn == false) {
                    Btn = true;
                    clearTimeout(btnTime);
                    TweenMax.killTweensOf(sprite);
                    sprite.scaleX = 1;
                    sprite.scaleY = 1;
                    TweenMax.to(sprite, 0.1, {scaleY:0.65,scaleX:0.65});
                    sprite.addEventListener( egret.TouchEvent.TOUCH_END, Button_Off,this);
                    sprite.addEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, Button_Off,this);
                    sprite.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,Button_On,this);
                }
            }
            function Button_Off()
            {
                if(Btn == true) {
                    clearTimeout(btnTime)
                    Btn = false;
                    TweenMax.killTweensOf(sprite);
                    sprite.scaleX = 0.65;
                    sprite.scaleY = 0.65;
                    sprite.addEventListener( egret.TouchEvent.TOUCH_BEGIN, Button_On,this);
                    sprite.removeEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, Button_Off,this);
                    sprite.removeEventListener(egret.TouchEvent.TOUCH_END,Button_Off,this);
                    TweenMax.to(sprite, 0.2, {scaleY:1,scaleX:1});
                    btnTime = setTimeout(function() {
                            Btn = false;
//                        TweenMax.to(sprite,0.1,{ scaleY: 1,scaleX: 1 });
//                        btnTime = setTimeout(function() {
//                            TweenMax.to(sprite,0.1,{ scaleY: 1.05,scaleX: 1.05 });
//                            btnTime = setTimeout(function() {
//                                TweenMax.to(sprite,0.1,{ scaleY: 1,scaleX: 1 });
//
//                            }.bind(this),100);
//                        }.bind(this),100);
                    }.bind(this),200);

                }
            }
            return sprite;
        }
        
        public createS9Image(name:string,data:any[] = null):egret.Bitmap{
            var scale9Data:any[] = this._swfData[Swf.dataKey_Scale9][name];

            var bitmap:egret.Bitmap = this._assetManager.createBitmap(name);
            bitmap.scale9Grid = new egret.Rectangle(scale9Data[0],scale9Data[1],scale9Data[2],scale9Data[3]);

            if(data != null){
                bitmap.width = <number>data[10];
                bitmap.height = <number>data[11];
                starlingswf.SwfBlendMode.setBlendMode(bitmap,<string>data[13]);
            }
            bitmap.touchEnabled = true;//鼠标事件yfqian添加
            return bitmap;
        }

        public createShapeImage(name:string,data:any[] = null):egret.Bitmap{
            var bitmap:egret.Bitmap = this._assetManager.createBitmap(name);
            bitmap.fillMode = egret.BitmapFillMode.REPEAT;
            if(data != null){
                bitmap.width = <number>data[10];
                bitmap.height = <number>data[11];
                starlingswf.SwfBlendMode.setBlendMode(bitmap,<string>data[13]);
            }
            bitmap.touchEnabled = true;//鼠标事件yfqian添加
            return bitmap;
        }

        public createTextField(name:String,data:any[] = null):egret.TextField{
            var textfield:egret.TextField = new egret.TextField();
            if(data != null){
                textfield.width = <number>data[10];
                textfield.height = <number>data[11];
//                textfield.fontFamily ="隶书";//<string>data[12];
                textfield.textColor = <number>data[13];
                textfield.size = <number>data[14];
                textfield.textAlign = <string>data[15];
                textfield.verticalAlign=egret.VerticalAlign.MIDDLE;//垂直对齐yfqian添加
//                textfield.italic = data[16];
                textfield.bold = data[17];
                textfield.text = <string>data[18];
                starlingswf.SwfBlendMode.setBlendMode(textfield,<string>data[20]);
            }
            return textfield;
        }
    }
}
