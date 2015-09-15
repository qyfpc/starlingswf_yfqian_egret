/**
 * Created by DELL on 2015/3/24.
 */
class trace extends  egret.DisplayObjectContainer{

    public constructor(){
        super();
    }
    public static log(name):void{
        console.log(name)
    }
    public static goto(name):void{
        alert(name);
    }
    public static goSX(name="网络异常，需要刷新游戏！"):void{
        alert("网络异常需，要刷新游戏！");
        window.location.reload(); //刷新页面
    }
}