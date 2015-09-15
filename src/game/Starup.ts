/**
 * Created by Administrator on 2015/3/29.
 */
class Starup extends egret.DisplayObject{//启动类结构不允许修改
    public constructor() {
        super();
       new initStarling(game,true,2000);//加载资源、是否答应、是否提示公司广告(0不打印)
    }
}