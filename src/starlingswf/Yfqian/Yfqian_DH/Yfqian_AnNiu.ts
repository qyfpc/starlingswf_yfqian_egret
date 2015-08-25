module Yfqian {
    export class AnNiu {
        public static ChatANTime;
        public constructor() {


        }
        public static retNum(AnNiuObj): any {
            //            AnNiuObj.scaleX = AnNiuObj.scaleY = 0.6;
            //            AnNiuObj.scaleX = AnNiuObj.scaleY = 0.6;
            if(AnNiuObj.scaleX == 1) {
                AnNiuObj.scaleX = AnNiuObj.scaleY = 1;
                TweenMax.to(AnNiuObj,0.1,{ scaleX: 0.75,scaleY: 0.75 });
                Yfqian.AnNiu.ChatANTime = setTimeout(function() {
                    TweenMax.to(AnNiuObj,0.1,{ scaleX: 1.1,scaleY: 1.1 });
                    Yfqian.AnNiu.ChatANTime = setTimeout(function() {
                        TweenMax.to(AnNiuObj,0.2,{ scaleX: 1,scaleY: 1 });
                    },100);
                },100);
                return true;
            } else {
                return false;
            }
        }
    }
}
