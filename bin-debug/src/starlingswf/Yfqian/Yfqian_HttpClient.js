var Yfqian_HttpClient = (function (_super) {
    __extends(Yfqian_HttpClient, _super);
    /** AS3 ZML创建，Egret Yfqian 修改
     * 请求url
     * @param url
     * @param params
     * @param completeFunction
     * @param method
     *
     */
    function Yfqian_HttpClient() {
        _super.call(this);
    }
    var __egretProto__ = Yfqian_HttpClient.prototype;
    Yfqian_HttpClient.send = function (url, params, completeFunction, timeoutFunction, method) {
        if (completeFunction === void 0) { completeFunction = null; }
        if (timeoutFunction === void 0) { timeoutFunction = null; }
        if (method === void 0) { method = "get"; }
        var request;
        if (method == "get") {
            request = Yfqian_HttpClient.getRequest(url, params);
        }
        else if (method == "post") {
            request = Yfqian_HttpClient.postRequest(url, params);
        }
        var loader = new egret.URLLoader();
        var callback = function (e) {
            loader.removeEventListener(egret.Event.COMPLETE, callback, this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, this);
            if (completeFunction != null) {
                //					trace.goto(loader.data);
                completeFunction(loader.data);
            }
        };
        var timeout = function (e) {
            loader.removeEventListener(egret.Event.COMPLETE, callback, this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, this);
            if (timeoutFunction != null) {
                timeoutFunction(loader.data);
            }
        };
        loader.addEventListener(egret.Event.COMPLETE, callback, this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, timeout, this);
        loader.load(request);
    };
    Yfqian_HttpClient.getRequest = function (url, params) {
        url += "?";
        var k;
        for (k in params) {
            url += k + "=" + params[k] + "&";
        }
        return new egret.URLRequest(url.substring(0, url.length - 1));
    };
    Yfqian_HttpClient.postRequest = function (url, params) {
        var UrlData;
        var k;
        for (k in params) {
            if (!UrlData) {
                UrlData = (k + "=" + params[k]);
            }
            else {
                UrlData += "&" + (k + "=" + params[k]);
            }
        }
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(UrlData); //"select=1&ceshi=1");
        return request;
    };
    return Yfqian_HttpClient;
})(egret.DisplayObjectContainer);
Yfqian_HttpClient.prototype.__class__ = "Yfqian_HttpClient";
