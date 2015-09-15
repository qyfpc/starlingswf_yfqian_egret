module Yfqian {
	/**
	 *
	 * @author 
	 *
	 */
	export class Yfqian_RandomName{

        
        public static Name():string{
            var textWz
            var NameAnum = Math.round( Math.random() * ( 1038 - 1 ) + 1 );
            var NameBnum = Math.round( Math.random() * ( 6961 - 1 ) + 1 );
            var NameCnum = Math.round( Math.random() * ( 212 - 1 ) + 1 );
            var GaiLv = Math.round( Math.random() * ( 10 - 1 ) + 1 );
            new Yfqian.NameList();
            if ( GaiLv == 1 )
            {
                textWz = Yfqian.NameList.NameA[NameAnum] + Yfqian.NameList.NameB[NameBnum] + Yfqian.NameList.NameC[NameCnum];
            } else
            {
                textWz = Yfqian.NameList.NameA[NameAnum] + Yfqian.NameList.NameB[NameBnum];
            }
            return textWz;
            trace.log(textWz)
        }
	}
}
