module Yfqian {

    export class TuchEvent {
        public constructor(name,Off = true) {
            if(Off == true) {
                name.touchChildren = false;
                name.touchEnabled = false;
            } else {
                name.touchChildren = true;
                name.touchEnabled = true;
            }
        }
        public static On(name) {
            name.touchChildren = true;
            name.touchEnabled = true;
        }
        public static Off(name) {
            name.touchChildren = false;
            name.touchEnabled = false;
        }
    }
}
