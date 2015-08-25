module Yfqian {
	/**
	 *@Yfqian.SaveALoad.set 记录数据
     *@Yfqian.SaveALoad.get 读取数据数据
	 */
	export class SaveALoad {
        public static set(NameKey,valueNum:any):void{//记录数据
            egret.localStorage.setItem(NameKey,valueNum);
        }
        public static get(NameKey):any{//读取数据
            var valueNum=egret.localStorage.getItem(NameKey);
            return valueNum;
        }
        public static Del(NameKey):void{//删除数据
            egret.localStorage.removeItem(NameKey);
        }
        public static DelAll():void{//清空数据
            egret.localStorage.clear();
        }
	}
}
