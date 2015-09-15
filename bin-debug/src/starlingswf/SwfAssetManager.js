/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**
     * swf资源管理器
     * */
    var SwfAssetManager = (function () {
        function SwfAssetManager() {
            this._sheets = {};
            this._textures = {};
        }
        var __egretProto__ = SwfAssetManager.prototype;
        __egretProto__.addSpriteSheet = function (name, spriteSheep) {
            this._sheets[name] = spriteSheep;
        };
        __egretProto__.addTexture = function (name, texture) {
            this._textures[name] = texture;
        };
        __egretProto__.createBitmap = function (name) {
            var sheet;
            var bitmap;
            var texture;
            var key;
            for (key in this._sheets) {
                sheet = this._sheets[key];
                texture = sheet.getTexture(name);
                if (texture != null)
                    break;
            }
            if (texture == null)
                texture = this._textures[name];
            if (texture == null)
                return null;
            bitmap = new egret.Bitmap();
            bitmap.texture = texture;
            return bitmap;
        };
        return SwfAssetManager;
    })();
    starlingswf.SwfAssetManager = SwfAssetManager;
    SwfAssetManager.prototype.__class__ = "starlingswf.SwfAssetManager";
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfAssetManager.js.map