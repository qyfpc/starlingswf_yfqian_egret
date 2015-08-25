/**
 * Created by DELL on 2015/4/20.
 */
class Yfqian_Replace extends  egret.DisplayObjectContainer {
    public constructor() {
        super();

    }
    public static get(textobj,Num):boolean{
        var retOn;
        switch (Num) {
            case 1 :
                for (var i = 0; i < textobj.text.length; i++)//只允许输入数字
                {
                    if(textobj.text.charCodeAt(i)>=48&&textobj.text.charCodeAt(i)<=58){
                        retOn=true;
                    }else if(textobj.text.charCodeAt(i)==""){
                        retOn=false;
                    }else{
                        i=textobj.text.length+1;
                        retOn=false;
                    }
                }
                return retOn;
                break;
            case 2 :
                for (var i = 0; i < textobj.text.length; i++)//只允许输入数字和小写英文
                {
                    if(textobj.text.charCodeAt(i)>=48&&textobj.text.charCodeAt(i)<=58||textobj.text.charCodeAt(i)>=65&&textobj.text.charCodeAt(i)<=90){
                        retOn=true;
                    }else if(textobj.text.charCodeAt(i)==""){
                        retOn=false;
                    }else{
                        i=textobj.text.length+1;
                        retOn=false;
                    }

                }
                return retOn;
                break;
            case 3 :
                for (var i = 0; i < textobj.text.length; i++)//只允许输入数字和大写英文
                {
                    if(textobj.text.charCodeAt(i)>=48&&textobj.text.charCodeAt(i)<=58||textobj.text.charCodeAt(i)>=97&&textobj.text.charCodeAt(i)<=112){
                        retOn=true;

                    }else if(textobj.text.charCodeAt(i)==""){
                        retOn=false;
                    }else{
                        i=textobj.text.length+1;
                        retOn=false;
                    }

                }
                return retOn;
                break;
            case 4 :
                for (var i = 0; i < textobj.text.length; i++)//只允许输入数字、小写和大写英文
                {
                    if(textobj.text.charCodeAt(i)>=48&&textobj.text.charCodeAt(i)<=58||textobj.text.charCodeAt(i)>=65&&textobj.text.charCodeAt(i)<=90||textobj.text.charCodeAt(i)>=97&&textobj.text.charCodeAt(i)<=112){
                        retOn=true;
                    }else if(textobj.text.charCodeAt(i)==""){
                        retOn=false;
                    }else{
                        i=textobj.text.length+1;
                        retOn=false;
                    }
                }
                return retOn;
                break;
            case 5 :
                for (var i = 0; i < textobj.text.length; i++)//只允许输入数字、小写和大写英文
                {
                    if(textobj.text.charCodeAt(i)==32){
                        retOn=false;
                        i=textobj.text.length+1;
                    }else{
                        retOn=true;
                    }
                    trace.log(textobj.text.charCodeAt(i));
                }

                return retOn;
                break;
            default :
        }
    }
}
