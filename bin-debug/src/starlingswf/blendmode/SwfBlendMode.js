/**
 * Created by zmliu on 14-9-25.
 */
var starlingswf;
(function (starlingswf) {
    var SwfBlendMode = (function () {
        function SwfBlendMode() {
        }
        var __egretProto__ = SwfBlendMode.prototype;
        SwfBlendMode.setBlendMode = function (display, blendMode) {
            if (SwfBlendMode.modes[blendMode]) {
                display.blendMode = blendMode;
            }
        };
        SwfBlendMode.modes = {
            "normal": true,
            "add": true
        };
        return SwfBlendMode;
    })();
    starlingswf.SwfBlendMode = SwfBlendMode;
    SwfBlendMode.prototype.__class__ = "starlingswf.SwfBlendMode";
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfBlendMode.js.map