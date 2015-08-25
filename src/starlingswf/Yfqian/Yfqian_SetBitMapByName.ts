/**
 * Created by Administrator on 2015/3/29.
 */
class Yfqian_SetBitMapByName extends  egret.DisplayObjectContainer{

   public static get(name: string):egret.Bitmap{
       var result: egret.Bitmap = new egret.Bitmap();
       var texture: egret.Texture = RES.getRes(name);
       result.texture = texture;
       return result;
   }
}