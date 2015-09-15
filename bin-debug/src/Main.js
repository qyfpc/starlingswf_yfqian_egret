var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Main.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.stage.frameRate = 30;
        Main.MaxStage = this.stage;
        ClassList.MaxWidth = this.stage.stageWidth;
        ClassList.MaxHeight = this.stage.stageHeight;
        new list.Ui_Load(); //刷新资源列表数不允许修改
        new Starup(); //项目入口不允许修改
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
//# sourceMappingURL=Main.js.map