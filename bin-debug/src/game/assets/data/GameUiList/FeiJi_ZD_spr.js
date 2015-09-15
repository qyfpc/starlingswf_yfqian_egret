var spr_Ui;
(function (spr_Ui) {
    /**
     * @登陆界面，包括角色创建
     */
    var FeiJi_ZD_spr = (function () {
        function FeiJi_ZD_spr() {
            spr_Ui.FeiJi_ZD_spr.Swf = this;
            spr_Ui.FeiJi_ZD_spr.UIFeiJi = new spr_Ui.OnChild("FeiJi");
            new FeiJi.FeiJi_ZD_Ai();
        }
        var __egretProto__ = FeiJi_ZD_spr.prototype;
        __egretProto__.Off = function (UiObj) {
            new spr_Ui.OffChild(spr_Ui.FeiJi_ZD_spr.UIFeiJi.SprUi);
        };
        return FeiJi_ZD_spr;
    })();
    spr_Ui.FeiJi_ZD_spr = FeiJi_ZD_spr;
    FeiJi_ZD_spr.prototype.__class__ = "spr_Ui.FeiJi_ZD_spr";
})(spr_Ui || (spr_Ui = {}));
