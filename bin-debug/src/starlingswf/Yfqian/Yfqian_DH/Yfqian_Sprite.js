var Yfqian;
(function (Yfqian) {
    /**
     *
     * @author
     *
     */
    var Sprite = (function () {
        function Sprite(AnNiuObj) {
            Yfqian.Sprite.Sprite_On = true;
            AnNiuObj.anchorOffsetX = AnNiuObj.width / 2;
            AnNiuObj.anchorOffsetY = AnNiuObj.height / 2;
            AnNiuObj.x = AnNiuObj.width / 2;
            AnNiuObj.y = AnNiuObj.height / 2;
            AnNiuObj.scaleX = AnNiuObj.scaleY = 0.5;
            TweenMax.to(AnNiuObj, 0.2, { scaleX: 1.4, scaleY: 1.4 });
            setTimeout(function () {
                TweenMax.to(AnNiuObj, 0.1, { scaleX: 1, scaleY: 1 });
                setTimeout(function () {
                    TweenMax.to(AnNiuObj, 0.1, { scaleX: 1.1, scaleY: 1.1 });
                    setTimeout(function () {
                        TweenMax.to(AnNiuObj, 0.1, { scaleX: 1, scaleY: 1 });
                        Yfqian.Sprite.Sprite_On = false;
                    }, 100);
                }, 100);
            }, 200);
        }
        var __egretProto__ = Sprite.prototype;
        Sprite.Sprite_Off = function (AnNiuObj, AnNiuShpObj) {
            if (AnNiuShpObj === void 0) { AnNiuShpObj = null; }
            if (Yfqian.Sprite.Sprite_On == false) {
                AnNiuObj.anchorOffsetX = AnNiuObj.width / 2;
                AnNiuObj.anchorOffsetY = AnNiuObj.height / 2;
                AnNiuObj.x = AnNiuObj.width / 2;
                AnNiuObj.y = AnNiuObj.height / 2;
                AnNiuObj.scaleX = AnNiuObj.scaleY = 1;
                TweenMax.to(AnNiuObj, 0.1, { scaleX: 1.3, scaleY: 1.3 });
                setTimeout(function () {
                    TweenMax.to(AnNiuObj, 0.3, { scaleX: 0.01, scaleY: 0.01 });
                    setTimeout(function () {
                        AnNiuObj.visible = false;
                        if (AnNiuShpObj != null) {
                            AnNiuShpObj.visible = false;
                        }
                    }, 200);
                }, 100);
                return true;
            }
            else {
                Yfqian.Text.gg("尚未完全打开，不能关闭！", 4);
                return false;
            }
        };
        return Sprite;
    })();
    Yfqian.Sprite = Sprite;
    Sprite.prototype.__class__ = "Yfqian.Sprite";
    var Sprite_null = (function () {
        function Sprite_null(AnNiuObj) {
            Yfqian.Sprite_null.Sprite_On = true;
            AnNiuObj.visible = true;
            AnNiuObj.scaleX = AnNiuObj.scaleY = 0.1;
            TweenMax.to(AnNiuObj, 0.3, { scaleX: 1.3, scaleY: 1.3 });
            setTimeout(function () {
                TweenMax.to(AnNiuObj, 0.1, { scaleX: 1, scaleY: 1 });
                setTimeout(function () {
                    TweenMax.to(AnNiuObj, 0.1, { scaleX: 1.05, scaleY: 1.05 });
                    setTimeout(function () {
                        TweenMax.to(AnNiuObj, 0.1, { scaleX: 1, scaleY: 1 });
                        Yfqian.Sprite_null.Sprite_On = false;
                    }, 100);
                }, 100);
            }, 300);
        }
        var __egretProto__ = Sprite_null.prototype;
        Sprite_null.Sprite_Off = function (AnNiuObj, UIOff, AnNiuShpObj) {
            if (AnNiuShpObj === void 0) { AnNiuShpObj = null; }
            if (Yfqian.Sprite_null.Sprite_On == false) {
                AnNiuObj.scaleX = AnNiuObj.scaleY = 1;
                TweenMax.to(AnNiuObj, 0.1, { scaleX: 1.3, scaleY: 1.3 });
                setTimeout(function () {
                    TweenMax.to(AnNiuObj, 0.3, { scaleX: 0.01, scaleY: 0.01 });
                    setTimeout(function () {
                        if (AnNiuShpObj == true) {
                            AnNiuShpObj.visible = false;
                        }
                        else if (AnNiuShpObj == false) {
                            AnNiuShpObj.removeChild(UIOff);
                        }
                        else {
                            Yfqian.addMax_Ui.GameUi.removeChild(UIOff);
                        }
                    }, 300);
                }, 100);
                return true;
            }
            else {
                Yfqian.Text.gg("尚未完全打开，不能关闭！", 4);
                return false;
            }
        };
        return Sprite_null;
    })();
    Yfqian.Sprite_null = Sprite_null;
    Sprite_null.prototype.__class__ = "Yfqian.Sprite_null";
})(Yfqian || (Yfqian = {}));
//# sourceMappingURL=Yfqian_Sprite.js.map