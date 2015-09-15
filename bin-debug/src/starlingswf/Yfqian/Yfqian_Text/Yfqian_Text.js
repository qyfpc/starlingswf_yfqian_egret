var Yfqian;
(function (Yfqian) {
    /**
     *
     * @author
     *
     */
    var Text = (function () {
        function Text() {
        }
        var __egretProto__ = Text.prototype;
        Text.gg = function (TextObj, ColorNum, ToH, strokeNum) {
            if (ColorNum === void 0) { ColorNum = 1; }
            if (ToH === void 0) { ToH = 0.25; }
            if (strokeNum === void 0) { strokeNum = 1; }
            var lable = new egret.TextField(); //普通文本
            lable.text = TextObj;
            lable.strokeColor = 0x000000; //描边属性
            lable.stroke = strokeNum; //描边像素
            lable.width = ClassList.MaxWidth;
            //        lable.height=ClassList.MaxHeight;
            lable.textAlign = egret.HorizontalAlign.CENTER; //水平对齐
            lable.verticalAlign = egret.VerticalAlign.MIDDLE; //垂直对齐
            lable.bold = true; //粗体显示
            lable.anchorOffsetX = ClassList.MaxWidth / 2;
            lable.x = ClassList.MaxWidth / 2;
            //      lable.anchorOffsetY=lable.height*2;
            //        lable.italic=true;//斜体显示
            lable.y = ClassList.MaxHeight * ToH;
            lable.size = 30;
            switch (ColorNum) {
                case 1:
                    lable.textColor = 0x00FF00; //绿色
                    break;
                case 2:
                    lable.textColor = 0x00CCFF; //蓝色
                    break;
                case 3:
                    lable.textColor = 0xFF9933; //橙色
                    break;
                case 4:
                    lable.textColor = 0xFF0000; //红色
                    break;
                case 5:
                    lable.textColor = 0xFF00FF; //紫色
                    break;
                case 6:
                    lable.textColor = 0x999999; //灰色
                    break;
                case 7:
                    lable.textColor = 0xffff00; //黄色
                    break;
                case 8:
                    lable.textColor = 0x00ffff; //天蓝色
                    break;
                default:
                    lable.textColor = 0xffffff;
            }
            Yfqian.addMax_Ui.GameUi.addChild(lable);
            lable.scaleX = lable.scaleY = 0.8;
            TweenMax.to(lable, 0.1, { scaleX: 2, scaleY: 2 });
            setTimeout(function () {
                TweenMax.to(lable, 0.1, { bezier: [{ y: lable.y - 10 }], scaleX: 1, scaleY: 1 });
                setTimeout(function () {
                    TweenMax.to(lable, 4, { bezier: [{ y: -80 }], alpha: 0.5 });
                    setTimeout(function () {
                        Yfqian.addMax_Ui.GameUi.removeChild(lable);
                    }.bind(this), 2000);
                }.bind(this), 100);
            }.bind(this), 100);
        };
        return Text;
    })();
    Yfqian.Text = Text;
    Text.prototype.__class__ = "Yfqian.Text";
})(Yfqian || (Yfqian = {}));
//# sourceMappingURL=Yfqian_Text.js.map