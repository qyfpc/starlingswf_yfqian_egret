class Main extends egret.DisplayObjectContainer{
    public static MaxStage;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.stage.frameRate = 30;
        Main.MaxStage=this.stage;
        ClassList.MaxWidth=this.stage.stageWidth;
        ClassList.MaxHeight=this.stage.stageHeight;
        new list.Ui_Load();//刷新资源列表数不允许修改
        new Starup();//项目入口不允许修改

    }
}


