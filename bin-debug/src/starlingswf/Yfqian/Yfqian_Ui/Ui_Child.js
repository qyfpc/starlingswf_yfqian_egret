var spr_Ui;
(function (spr_Ui) {
    /**
     *
     * @唯一的标签，尽量在使用后直接销毁
     *
     */
    var Swf = (function () {
        function Swf() {
        }
        var __egretProto__ = Swf.prototype;
        Swf.OnChild = function (UiName) {
            var NameSpr = "spr_" + UiName;
            var Sprite;
            Sprite = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            Yfqian.addMax_Ui.GameUi.addChild(Sprite);
        };
        return Swf;
    })();
    spr_Ui.Swf = Swf;
    Swf.prototype.__class__ = "spr_Ui.Swf";
    /**
    * @UiName 调用资源名
    * @UiNameSpr 附属资源名
    */
    var OnChild = (function () {
        function OnChild(UiName, UiNameSpr, gtUi) {
            if (UiNameSpr === void 0) { UiNameSpr = null; }
            if (gtUi === void 0) { gtUi = null; }
            var NameSpr;
            if (UiNameSpr == null) {
                NameSpr = "spr_" + UiName;
            }
            else {
                NameSpr = "spr_" + UiNameSpr;
            }
            //trace.log(UiName+" - "+NameSpr)
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            if (gtUi == null) {
                Yfqian.addMax_Ui.GameUi.addChild(this.SprUi);
            }
            else {
                gtUi.addChild(this.SprUi);
            }
        }
        var __egretProto__ = OnChild.prototype;
        return OnChild;
    })();
    spr_Ui.OnChild = OnChild;
    OnChild.prototype.__class__ = "spr_Ui.OnChild";
    var OffChild = (function () {
        function OffChild(UiNameObj, gtUi) {
            if (gtUi === void 0) { gtUi = null; }
            if (gtUi == null) {
                Yfqian.addMax_Ui.GameUi.removeChild(UiNameObj);
            }
            else {
                gtUi.removeChild(UiNameObj);
            }
        }
        var __egretProto__ = OffChild.prototype;
        return OffChild;
    })();
    spr_Ui.OffChild = OffChild;
    OffChild.prototype.__class__ = "spr_Ui.OffChild";
    /**
    * @UiName 调用资源名
    * @UiNameSpr 附属资源名
    * @UiObj 传送一个显示容器
    */
    var OnChild_Obj = (function () {
        function OnChild_Obj(UiName, UiNameSpr, UiObj) {
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(UiNameSpr);
            UiObj.addChild(this.SprUi);
        }
        var __egretProto__ = OnChild_Obj.prototype;
        return OnChild_Obj;
    })();
    spr_Ui.OnChild_Obj = OnChild_Obj;
    OnChild_Obj.prototype.__class__ = "spr_Ui.OnChild_Obj";
    var OffChild_Obj = (function () {
        function OffChild_Obj(UiNameObj, UiObj) {
            UiObj.removeChild(UiNameObj);
        }
        var __egretProto__ = OffChild_Obj.prototype;
        return OffChild_Obj;
    })();
    spr_Ui.OffChild_Obj = OffChild_Obj;
    OffChild_Obj.prototype.__class__ = "spr_Ui.OffChild_Obj";
    var OnChild_Log = (function () {
        function OnChild_Log(UiName, UiNameSpr) {
            if (UiNameSpr === void 0) { UiNameSpr = null; }
            var NameSpr;
            if (UiNameSpr == null) {
                NameSpr = "spr_" + UiName;
            }
            else {
                NameSpr = "spr_" + UiNameSpr;
            }
            this.SprUi = new Yfqian.McData(UiName).Swf.createSprite(NameSpr);
            this.Sprshp = new egret.Shape();
            this.Sprshp.graphics.beginFill(0x000000, 1);
            this.Sprshp.graphics.drawRect(0, 0, 480, 800);
            this.Sprshp.graphics.endFill();
            this.Sprshp.alpha = 0.3;
            Yfqian.TuchEvent.On(this.Sprshp);
            Yfqian.addMax_Ui.GameUi.addChild(this.Sprshp);
            Yfqian.addMax_Ui.GameUi.addChild(this.SprUi);
            Yfqian.addMax_Ui.GameUi.setChildIndex(this.SprUi, 10000);
        }
        var __egretProto__ = OnChild_Log.prototype;
        return OnChild_Log;
    })();
    spr_Ui.OnChild_Log = OnChild_Log;
    OnChild_Log.prototype.__class__ = "spr_Ui.OnChild_Log";
    var OffChild_Log = (function () {
        function OffChild_Log(UiNameObj, UiBJObj) {
            Yfqian.addMax_Ui.GameUi.removeChild(UiNameObj);
            Yfqian.addMax_Ui.GameUi.removeChild(UiBJObj);
        }
        var __egretProto__ = OffChild_Log.prototype;
        return OffChild_Log;
    })();
    spr_Ui.OffChild_Log = OffChild_Log;
    OffChild_Log.prototype.__class__ = "spr_Ui.OffChild_Log";
})(spr_Ui || (spr_Ui = {}));
//# sourceMappingURL=Ui_Child.js.map