var spr_Ui;
(function (spr_Ui) {
    /**
     * @登陆界面，包括角色创建
     */
    var GongGao_01_spr = (function () {
        function GongGao_01_spr(wz, bt) {
            if (bt === void 0) { bt = "系统提示"; }
            trace.log(11111);
            spr_Ui.GongGao_01_spr.Swf = this;
            spr_Ui.GongGao_01_spr.UIGongGao_01 = new spr_Ui.OnChild("XSZY", "XSZY_gg1");
            new GongGao.GongGao_01_Ai(wz, bt);
        }
        var __egretProto__ = GongGao_01_spr.prototype;
        __egretProto__.Off = function () {
            Yfqian.Sprite_null.Sprite_Off(GongGao.GongGao_01_Ai.GongGao_01.GGUi, spr_Ui.GongGao_01_spr.UIGongGao_01.SprUi);
        };
        return GongGao_01_spr;
    })();
    spr_Ui.GongGao_01_spr = GongGao_01_spr;
    GongGao_01_spr.prototype.__class__ = "spr_Ui.GongGao_01_spr";
})(spr_Ui || (spr_Ui = {}));
