var spr_Ui;
(function (spr_Ui) {
    /**
     * @登陆界面，包括角色创建
     */
    var DengLu_spr = (function () {
        function DengLu_spr() {
            spr_Ui.DengLu_spr.Swf = this;
            spr_Ui.DengLu_spr.UIDengLu = new spr_Ui.OnChild("DengLu");
            new DengLu.DengLu_Ai();
            var ggText = "公平游戏告知书：\n(如果您修改数据，将会错过以下游戏内容)\n\n1、无法加入星际排名。\n2、无法掠夺星际战舰。\n3、无法更换设备游戏。\n4、无法邀请朋友加入星际舰队。";
            new spr_Ui.GongGao_01_spr(ggText, "危险警告");
            //            this.logGG();
            //            Yfqian.log.On();       
        }
        var __egretProto__ = DengLu_spr.prototype;
        __egretProto__.Off = function () {
            new spr_Ui.OffChild(spr_Ui.DengLu_spr.UIDengLu.SprUi);
        };
        __egretProto__.logGG = function () {
            var url = list.dataList.urlIp + "/game/sq/server/data/gonggao.php";
            var params;
            Yfqian_HttpClient.send(url, params, function (data) {
                trace.log("返回信息" + data.toString());
                new spr_Ui.GongGao_01_spr(data.toString());
                Yfqian.log.Off();
            }.bind(this), function (data) {
                trace.goSX("错误");
            }, "post");
        };
        return DengLu_spr;
    })();
    spr_Ui.DengLu_spr = DengLu_spr;
    DengLu_spr.prototype.__class__ = "spr_Ui.DengLu_spr";
})(spr_Ui || (spr_Ui = {}));
