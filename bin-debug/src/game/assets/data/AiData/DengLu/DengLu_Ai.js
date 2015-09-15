var DengLu;
(function (DengLu) {
    /**
     * @登陆逻辑类
     */
    var DengLu_Ai = (function (_super) {
        __extends(DengLu_Ai, _super);
        function DengLu_Ai() {
            _super.call(this);
            this.spr_DengLu_ks.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                spr_Ui.DengLu_spr.Swf.Off();
                new spr_Ui.ZhiYin_01_spr();
                trace.log("点击成功");
            }, this);
            //            new spr_Ui.DengLu_spr();
        }
        var __egretProto__ = DengLu_Ai.prototype;
        return DengLu_Ai;
    })(DengLu.DengLu_Ui);
    DengLu.DengLu_Ai = DengLu_Ai;
    DengLu_Ai.prototype.__class__ = "DengLu.DengLu_Ai";
})(DengLu || (DengLu = {}));
