var Yfqian;
(function (Yfqian) {
    var TuchEvent = (function () {
        function TuchEvent(name, Off) {
            if (Off === void 0) { Off = true; }
            if (Off == true) {
                name.touchChildren = false;
                name.touchEnabled = false;
            }
            else {
                name.touchChildren = true;
                name.touchEnabled = true;
            }
        }
        var __egretProto__ = TuchEvent.prototype;
        TuchEvent.On = function (name) {
            name.touchChildren = true;
            name.touchEnabled = true;
        };
        TuchEvent.Off = function (name) {
            name.touchChildren = false;
            name.touchEnabled = false;
        };
        return TuchEvent;
    })();
    Yfqian.TuchEvent = TuchEvent;
    TuchEvent.prototype.__class__ = "Yfqian.TuchEvent";
})(Yfqian || (Yfqian = {}));
//# sourceMappingURL=Yfqian_TuchEvent.js.map