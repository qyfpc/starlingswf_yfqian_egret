var FeiJi;
(function (FeiJi) {
    /**
     * @登陆逻辑类
     */
    var FeiJi_ZD_Ai = (function (_super) {
        __extends(FeiJi_ZD_Ai, _super);
        function FeiJi_ZD_Ai() {
            _super.call(this);
            var aNum = 1;
            var bNum = 1;
            this.FeiJi_A(aNum);
            this.FeiJi_B(bNum);
            aNum++;
            spr_Ui.FeiJi_ZD_spr.UIFeiJi.SprUi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                this.FeiJi_A(aNum);
                this.FeiJi_B(bNum);
                aNum++;
                if (aNum == 16) {
                    aNum = 1;
                }
                bNum = Math.round(Math.random() * (3 - 1) + 1);
            }.bind(this), this);
        }
        var __egretProto__ = FeiJi_ZD_Ai.prototype;
        __egretProto__.FeiJi_A = function (FJNum) {
            this.spr_FeiJi_1.visible = false;
            this.spr_FeiJi_2.visible = false;
            this.spr_FeiJi_3.visible = false;
            this.spr_FeiJi_4.visible = false;
            this.spr_FeiJi_5.visible = false;
            this.spr_FeiJi_6.visible = false;
            this.spr_FeiJi_7.visible = false;
            this.spr_FeiJi_8.visible = false;
            this.spr_FeiJi_9.visible = false;
            this.spr_FeiJi_10.visible = false;
            this.spr_FeiJi_11.visible = false;
            this.spr_FeiJi_12.visible = false;
            this.spr_FeiJi_13.visible = false;
            this.spr_FeiJi_14.visible = false;
            this.spr_FeiJi_15.visible = false;
            switch (FJNum) {
                case 1:
                    this.spr_FeiJi_1.visible = true;
                    break;
                case 2:
                    this.spr_FeiJi_2.visible = true;
                    break;
                case 3:
                    this.spr_FeiJi_3.visible = true;
                    break;
                case 4:
                    this.spr_FeiJi_4.visible = true;
                    break;
                case 5:
                    this.spr_FeiJi_5.visible = true;
                    break;
                case 6:
                    this.spr_FeiJi_6.visible = true;
                    break;
                case 7:
                    this.spr_FeiJi_7.visible = true;
                    break;
                case 8:
                    this.spr_FeiJi_8.visible = true;
                    break;
                case 9:
                    this.spr_FeiJi_9.visible = true;
                    break;
                case 10:
                    this.spr_FeiJi_10.visible = true;
                    break;
                case 11:
                    this.spr_FeiJi_11.visible = true;
                    break;
                case 12:
                    this.spr_FeiJi_12.visible = true;
                    break;
                case 13:
                    this.spr_FeiJi_13.visible = true;
                    break;
                case 14:
                    this.spr_FeiJi_14.visible = true;
                    break;
                case 15:
                    this.spr_FeiJi_15.visible = true;
                    break;
                default:
            }
        };
        __egretProto__.FeiJi_B = function (FJNum) {
            this.spr_FeiJi_b1.visible = false;
            this.spr_FeiJi_b2.visible = false;
            this.spr_FeiJi_b3.visible = false;
            switch (FJNum) {
                case 1:
                    this.spr_FeiJi_b1.visible = true;
                    break;
                case 2:
                    this.spr_FeiJi_b2.visible = true;
                    break;
                case 3:
                    this.spr_FeiJi_b3.visible = true;
                    break;
                default:
            }
        };
        return FeiJi_ZD_Ai;
    })(FeiJi.FeiJi_ZD_Ui);
    FeiJi.FeiJi_ZD_Ai = FeiJi_ZD_Ai;
    FeiJi_ZD_Ai.prototype.__class__ = "FeiJi.FeiJi_ZD_Ai";
})(FeiJi || (FeiJi = {}));
