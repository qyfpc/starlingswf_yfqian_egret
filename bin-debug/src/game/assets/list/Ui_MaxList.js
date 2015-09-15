var list;
(function (list) {
    /**
     *
     * @author
     *
     */
    var Ui_Load = (function () {
        function Ui_Load() {
            new list.Ui_MaxList();
        }
        var __egretProto__ = Ui_Load.prototype;
        return Ui_Load;
    })();
    list.Ui_Load = Ui_Load;
    Ui_Load.prototype.__class__ = "list.Ui_Load";
    var Ui_MaxList = (function () {
        function Ui_MaxList() {
            Yfqian.log.LogOn = false; //目前没有加载页面打开。;
            list.Ui_MaxList.UiRes[0] = ["主界面资源加载", "EgretSwf_All_ZJM", "EgretSwf_ZJM", "EgretSwf_ZJM_swf"];
            list.Ui_MaxList.UiRes[1] = ["跳转资源加载", "EgretSwf_All_Log", "EgretSwf_Log", "EgretSwf_Log_swf"];
            //            trace.log(list.Ui_MaxList.UiRes.length + " - " + list.Ui_MaxList.UiRes[0][0]);
            list.Ui_MaxList.UiMix = 0;
            list.Ui_MaxList.UiMax = list.Ui_MaxList.UiRes.length;
        }
        var __egretProto__ = Ui_MaxList.prototype;
        Ui_MaxList.UiRes = [];
        return Ui_MaxList;
    })();
    list.Ui_MaxList = Ui_MaxList;
    Ui_MaxList.prototype.__class__ = "list.Ui_MaxList";
    var dataList = (function () {
        function dataList() {
        }
        var __egretProto__ = dataList.prototype;
        dataList.urlIp = "http://www.17wgj.com";
        return dataList;
    })();
    list.dataList = dataList;
    dataList.prototype.__class__ = "list.dataList";
})(list || (list = {}));
//# sourceMappingURL=Ui_MaxList.js.map