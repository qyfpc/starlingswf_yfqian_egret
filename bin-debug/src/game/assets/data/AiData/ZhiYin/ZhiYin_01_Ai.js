var ZhiYin;
(function (ZhiYin) {
    /**
     * @登陆逻辑类
     */
    var ZhiYin_01_Ai = (function (_super) {
        __extends(ZhiYin_01_Ai, _super);
        function ZhiYin_01_Ai() {
            _super.call(this);
            this._mcNum = 0;
            this._mcNum = 0;
            this.spr_ZhiYin_01_mc.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                if (this._mcNum == 1) {
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h2");
                    setTimeout(function () {
                        this.StopMc(2);
                    }.bind(this), 800);
                }
                else if (this._mcNum == 2) {
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h3");
                    setTimeout(function () {
                        this.StopMc(3);
                    }.bind(this), 800);
                }
                else if (this._mcNum == 3) {
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h4");
                    setTimeout(function () {
                        this.StopMc(4);
                    }.bind(this), 800);
                }
                else if (this._mcNum == 4) {
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h5");
                    setTimeout(function () {
                        this.StopMc(8);
                    }.bind(this), 800);
                }
                else if (this._mcNum == 5) {
                }
                else if (this._mcNum == 6) {
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h7");
                    _mc.loop = true;
                    this._mcNum = 7;
                }
                else if (this._mcNum == 7) {
                    this._mcNum = 0;
                    spr_Ui.ZhiYin_01_spr.Swf.Off();
                    new spr_Ui.ZJM_spr();
                    trace.log('结束');
                    Yfqian.Text.gg("角色创建成功！", 1);
                }
                else if (this._mcNum == 8) {
                    this._mcNum = 0;
                    this.nameCJ();
                }
            }.bind(this), this);
            var _mc = this.spr_ZhiYin_01_mc;
            this.spr_ZhiYin_01_mc.gotoAndPlay("h1");
            _mc.loop = false;
            setTimeout(function () {
                this.StopMc(1);
            }.bind(this), 800);
        }
        var __egretProto__ = ZhiYin_01_Ai.prototype;
        __egretProto__.StopMc = function (McNum) {
            //                _mc.stop();
            this._mcNum = McNum;
        };
        __egretProto__.nameCJ = function () {
            var UIName;
            UIName = new spr_Ui.OnChild("XSZY", "XSZY_name");
            var CJ_GG = UIName.SprUi.getSprite("gg");
            var GG_WZ = CJ_GG.getTextField("wz");
            var GG_AN1 = CJ_GG.getButton("an1");
            var GG_AN2 = CJ_GG.getImage("an2");
            //            GG_WZ.textAlign=egret.HorizontalAlign.CENTER;//水平对齐
            GG_WZ.text = "输入名字";
            GG_WZ.type = egret.TextFieldType.INPUT; //是否可以用输入法
            GG_WZ.restrict = "\u4E00-\u9FA5a-zA-Z0-9^ ";
            GG_WZ.maxChars = 5;
            var angg = 0;
            CJ_GG.addEventListener(egret.TouchEvent.TOUCH_TAP, wzbtn, this);
            function wzbtn() {
                CJ_GG.removeEventListener(egret.TouchEvent.TOUCH_TAP, wzbtn, this);
                GG_WZ.text = "";
                trace.log("点击成功");
            }
            GG_AN1.addEventListener(egret.TouchEvent.TOUCH_TAP, AN1btn, this);
            function AN1btn() {
                CJ_GG.removeEventListener(egret.TouchEvent.TOUCH_TAP, wzbtn, this);
                GG_WZ.text = Yfqian.Yfqian_RandomName.Name();
                trace.log("点击成功:" + Yfqian.Yfqian_RandomName.Name());
            }
            GG_AN2.addEventListener(egret.TouchEvent.TOUCH_TAP, AN2btn, this);
            function AN2btn() {
                if (GG_WZ.text !== "输入名字" && GG_WZ.text !== "") {
                    CJ_GG.removeEventListener(egret.TouchEvent.TOUCH_TAP, wzbtn, this);
                    GG_AN1.removeEventListener(egret.TouchEvent.TOUCH_TAP, AN1btn, this);
                    GG_AN2.removeEventListener(egret.TouchEvent.TOUCH_TAP, AN2btn, this);
                    Yfqian.Sprite_null.Sprite_Off(CJ_GG, UIName.SprUi);
                    this._mcNum = 0;
                    this.spr_ZhiYin_01_mc.gotoAndPlay("h6");
                    setTimeout(function () {
                        this.StopMc(6);
                    }.bind(this), 800);
                }
                else {
                    Yfqian.Text.gg("您输入的角色名有误，请重试！", 4);
                }
            }
            new Yfqian.Sprite_null(CJ_GG);
        };
        return ZhiYin_01_Ai;
    })(ZhiYin.ZhiYin_01_Ui);
    ZhiYin.ZhiYin_01_Ai = ZhiYin_01_Ai;
    ZhiYin_01_Ai.prototype.__class__ = "ZhiYin.ZhiYin_01_Ai";
})(ZhiYin || (ZhiYin = {}));
