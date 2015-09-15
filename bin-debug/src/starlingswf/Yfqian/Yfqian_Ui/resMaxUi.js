var Yfqian;
(function (Yfqian) {
    /**
     *
     * @author
     *
     */
    var resMaxUi = (function () {
        function resMaxUi(gotoName) {
            this.sjDel = 0;
            this.fst = true;
            Yfqian.resMaxUi.This_resMaxUi = this;
            this._UiMix = 0;
            this._UiMax = list.Ui_MaxList.UiRes.length;
            this._gotoName = gotoName;
            this.setUi(gotoName);
        }
        var __egretProto__ = resMaxUi.prototype;
        __egretProto__.setUi = function (gotoName) {
            if (list.Ui_MaxList.UiMix < list.Ui_MaxList.UiMax) {
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
                RES.loadConfig("resource/EgretSwf/EgretSwf.json", "resource/EgretSwf/");
                RES.loadGroup(list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][1]);
                new Yfqian.loading(gotoName, list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][0], list.Ui_MaxList.UiMix, list.Ui_MaxList.UiMax); //进度条逻辑，可关闭
            }
            else {
                clearTimeout(Yfqian.loading.loadingOn.stopSettime);
                new gotoName();
            }
        };
        __egretProto__.onConfigComp = function (event) {
            this.countGroupError = 0;
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComp, this);
        };
        __egretProto__.onResourceLoadErr = function (event) {
            if (++this.countGroupError < 3) {
                RES.loadGroup(event.groupName);
            }
            else {
                /// 弹出网络失去连接提示等
                trace.goSX("弹出网络失去连接提示等");
            }
        };
        __egretProto__.onResourceLoadComplete = function (event) {
            if (event.groupName == list.Ui_MaxList.UiRes[list.Ui_MaxList.UiMix][1]) {
                //                trace.log("完成更新");
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
                list.Ui_MaxList.UiMix++;
                trace.log("获得：" + list.Ui_MaxList.UiMix);
                //                Yfqian.resMaxUi.This_resMaxUi.setUi(this._gotoName);
                Yfqian.loading.loadingOn.JingDu_Off();
            }
        };
        return resMaxUi;
    })();
    Yfqian.resMaxUi = resMaxUi;
    resMaxUi.prototype.__class__ = "Yfqian.resMaxUi";
    var McData = (function () {
        function McData(UIName, fps) {
            if (fps === void 0) { fps = 12; }
            var UIObj = {
                UISwf: "EgretSwf_" + UIName + "_swf",
                UISheet: "EgretSwf_" + UIName
            };
            Yfqian.McData.EventUi = this;
            var swfData = RES.getRes(UIObj.UISwf);
            var spriteSheet = RES.getRes(UIObj.UISheet);
            var assetsManager = new starlingswf.SwfAssetManager();
            assetsManager.addSpriteSheet(UIObj.UISheet, spriteSheet);
            this.Swf = new starlingswf.Swf(swfData, assetsManager, fps);
            //            trace.log("资源获得");
        }
        var __egretProto__ = McData.prototype;
        return McData;
    })();
    Yfqian.McData = McData;
    McData.prototype.__class__ = "Yfqian.McData";
})(Yfqian || (Yfqian = {}));
//# sourceMappingURL=resMaxUi.js.map