var spr_Ui;
(function (spr_Ui) {
    /**
     * @登陆界面，包括角色创建
     */
    var ZJM_spr = (function () {
        /**
        * @使用方法：spr_Ui.ZJM_spr.UIZJM.SprUi
        */
        function ZJM_spr() {
            spr_Ui.ZJM_spr.Swf = this;
            spr_Ui.ZJM_spr.UIZJM = new spr_Ui.OnChild("ZJM"); //在舞台上生成zjm这个ui
            /**
            * @使用方法：也可以不调用类。
    
            var SprUi: starlingswf.SwfSprite;
            SprUi = new Yfqian.McData("ZJM").Swf.createSprite("ZJM");
            Yfqian.addMax_Ui.GameUi.addChild(SprUi);
            
            */
            new ZJM.ZJM_Ai();
        }
        var __egretProto__ = ZJM_spr.prototype;
        __egretProto__.Off = function () {
            new spr_Ui.OffChild(spr_Ui.ZJM_spr.UIZJM.SprUi);
        };
        return ZJM_spr;
    })();
    spr_Ui.ZJM_spr = ZJM_spr;
    ZJM_spr.prototype.__class__ = "spr_Ui.ZJM_spr";
})(spr_Ui || (spr_Ui = {}));
//# sourceMappingURL=ZJM_spr.js.map