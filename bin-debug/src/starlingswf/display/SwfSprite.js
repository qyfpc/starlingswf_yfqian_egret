/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**Sprite*/
    var SwfSprite = (function (_super) {
        __extends(SwfSprite, _super);
        function SwfSprite() {
            _super.apply(this, arguments);
        }
        var __egretProto__ = SwfSprite.prototype;
        __egretProto__.getTextField = function (name) {
            return this.getChildByName(name);
        };
        __egretProto__.getMovie = function (name) {
            return this.getChildByName(name);
        };
        __egretProto__.getSprite = function (name) {
            return this.getChildByName(name);
        };
        __egretProto__.getImage = function (name) {
            return this.getChildByName(name);
        };
        __egretProto__.getButton = function (name) {
            return this.getChildByName(name);
        };
        return SwfSprite;
    })(egret.DisplayObjectContainer);
    starlingswf.SwfSprite = SwfSprite;
    SwfSprite.prototype.__class__ = "starlingswf.SwfSprite";
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfSprite.js.map