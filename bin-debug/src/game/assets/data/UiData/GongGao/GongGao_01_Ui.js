var GongGao;
(function (GongGao) {
    var GongGao_01_Ui = (function () {
        function GongGao_01_Ui() {
            this.GGUi = spr_Ui.GongGao_01_spr.UIGongGao_01.SprUi.getSprite("gg");
            this.GGUi_BT = this.GGUi.getTextField("bt");
            this.GGUi_WZ = this.GGUi.getTextField("wz");
            this.GGUi_AN = this.GGUi.getImage("an1");
            this.GGUi_WZ.verticalAlign = egret.VerticalAlign.TOP; //垂直对齐
        }
        var __egretProto__ = GongGao_01_Ui.prototype;
        return GongGao_01_Ui;
    })();
    GongGao.GongGao_01_Ui = GongGao_01_Ui;
    GongGao_01_Ui.prototype.__class__ = "GongGao.GongGao_01_Ui";
})(GongGao || (GongGao = {}));
