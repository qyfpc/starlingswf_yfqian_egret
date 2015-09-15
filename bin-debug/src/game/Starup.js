/**
 * Created by Administrator on 2015/3/29.
 */
var Starup = (function (_super) {
    __extends(Starup, _super);
    function Starup() {
        _super.call(this);
        new initStarling(game, true, 2000); //加载资源、是否答应、是否提示公司广告(0不打印)
    }
    var __egretProto__ = Starup.prototype;
    return Starup;
})(egret.DisplayObject);
Starup.prototype.__class__ = "Starup";
//# sourceMappingURL=Starup.js.map