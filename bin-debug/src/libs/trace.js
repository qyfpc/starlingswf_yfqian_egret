/**
 * Created by DELL on 2015/3/24.
 */
var trace = (function (_super) {
    __extends(trace, _super);
    function trace() {
        _super.call(this);
    }
    var __egretProto__ = trace.prototype;
    trace.log = function (name) {
        console.log(name);
    };
    trace.goto = function (name) {
        alert(name);
    };
    trace.goSX = function (name) {
        if (name === void 0) { name = "网络异常，需要刷新游戏！"; }
        alert("网络异常需，要刷新游戏！");
        window.location.reload(); //刷新页面
    };
    return trace;
})(egret.DisplayObjectContainer);
trace.prototype.__class__ = "trace";
//# sourceMappingURL=trace.js.map