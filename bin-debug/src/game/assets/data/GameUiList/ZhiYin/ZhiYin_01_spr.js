var spr_Ui;
(function (spr_Ui) {
    /**
     * @登陆界面，包括角色创建
     */
    var ZhiYin_01_spr = (function () {
        function ZhiYin_01_spr() {
            spr_Ui.ZhiYin_01_spr.Swf = this;
            spr_Ui.ZhiYin_01_spr.UIZhiYin_01 = new spr_Ui.OnChild("XSZY", "XSZY_01");
            new ZhiYin.ZhiYin_01_Ai();
        }
        var __egretProto__ = ZhiYin_01_spr.prototype;
        __egretProto__.Off = function () {
            new spr_Ui.OffChild(spr_Ui.ZhiYin_01_spr.UIZhiYin_01.SprUi);
        };
        return ZhiYin_01_spr;
    })();
    spr_Ui.ZhiYin_01_spr = ZhiYin_01_spr;
    ZhiYin_01_spr.prototype.__class__ = "spr_Ui.ZhiYin_01_spr";
})(spr_Ui || (spr_Ui = {}));
