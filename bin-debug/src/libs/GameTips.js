/**
 * Created by DELL on 2015/4/16.
 */
var GameTips = (function (_super) {
    __extends(GameTips, _super);
    function GameTips() {
        _super.call(this);
        GameTips.TipsObj[0] = { UrlId: "GGList.json?" + GameTips.version, UrlWZ: "网络连接中..." };
        GameTips.TipsObj[1] = { UrlId: "ServerList.json?" + GameTips.version, UrlWZ: "获取服务器列表，请稍后..." };
        GameTips.TipsObj[2] = { UrlId: "ModList.json?" + GameTips.version, UrlWZ: "获取卡牌列表，请稍后..." };
        GameTips.TipsObj[3] = { UrlId: "RoleList.json?" + GameTips.version, UrlWZ: "获取角色属性列表，请稍后..." };
        GameTips.TipsObj[4] = { UrlId: "PassList.json?" + GameTips.version, UrlWZ: "获取关卡属性列表，请稍后..." };
    }
    var __egretProto__ = GameTips.prototype;
    GameTips.URLID = ClassList.GameGGIp + "games/Evildoer/";
    GameTips.SdkKey = "D@M~2q%ZKc*MT9(4Sa#eR60+ee2mnfb";
    GameTips.GameKey = "Lyq0EoPvA#Vy+KvltYe47uaHvtHqI8SB";
    GameTips.TipsObj = [];
    GameTips.version = "v0.01";
    return GameTips;
})(egret.DisplayObjectContainer);
GameTips.prototype.__class__ = "GameTips";
//# sourceMappingURL=GameTips.js.map