var Yfqian;
(function (Yfqian) {
    /**
     *
     * @author
     *
     */
    var Yfqian_RandomName = (function () {
        function Yfqian_RandomName() {
        }
        var __egretProto__ = Yfqian_RandomName.prototype;
        Yfqian_RandomName.Name = function () {
            var textWz;
            var NameAnum = Math.round(Math.random() * (1038 - 1) + 1);
            var NameBnum = Math.round(Math.random() * (6961 - 1) + 1);
            var NameCnum = Math.round(Math.random() * (212 - 1) + 1);
            var GaiLv = Math.round(Math.random() * (10 - 1) + 1);
            new Yfqian.NameList();
            if (GaiLv == 1) {
                textWz = Yfqian.NameList.NameA[NameAnum] + Yfqian.NameList.NameB[NameBnum] + Yfqian.NameList.NameC[NameCnum];
            }
            else {
                textWz = Yfqian.NameList.NameA[NameAnum] + Yfqian.NameList.NameB[NameBnum];
            }
            return textWz;
            trace.log(textWz);
        };
        return Yfqian_RandomName;
    })();
    Yfqian.Yfqian_RandomName = Yfqian_RandomName;
    Yfqian_RandomName.prototype.__class__ = "Yfqian.Yfqian_RandomName";
})(Yfqian || (Yfqian = {}));
