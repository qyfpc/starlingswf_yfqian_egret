var GongGao;
(function (GongGao) {
    /**
     * @登陆逻辑类
     */
    var GongGao_01_Ai = (function (_super) {
        __extends(GongGao_01_Ai, _super);
        function GongGao_01_Ai(wz, bt) {
            _super.call(this);
            GongGao.GongGao_01_Ai.GongGao_01 = this;
            this.GGUi_BT.text = bt;
            this.GGUi_WZ.text = wz;
            new Yfqian.Sprite_null(this.GGUi);
            this.GGUi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, GGTouch, this);
            var spr_gg_ui = spr_Ui.GongGao_01_spr.Swf;
            function GGTouch(e) {
                this.GGUi.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, GGTouch, this);
                spr_gg_ui.Off();
                trace.log("点击成功");
            }
        }
        var __egretProto__ = GongGao_01_Ai.prototype;
        return GongGao_01_Ai;
    })(GongGao.GongGao_01_Ui);
    GongGao.GongGao_01_Ai = GongGao_01_Ai;
    GongGao_01_Ai.prototype.__class__ = "GongGao.GongGao_01_Ai";
})(GongGao || (GongGao = {}));
