# starlingswf_yfqian_egret

starlingswf对starlingswf flash 开发者来说，你更熟悉界面编辑和快速开发h5流程。


项目演示地址：
http://kungfu.sinaapp.com/html5/sg_GL_V06/


目前版本：v0.01
支持egret版本：1.70以上


-----------------------------------------------------------

v0.01主要更新：

1.修复加载错误奔溃问题
2.增加框架结构接在提示



-----------------------------------------------------------

UI资源：

  —— 下载地址：http://yunpan.cn/cmAzBCU5wrFNe  

  —— 访问密码：2431

注意：更新进度页面时，请减少图片大小，否则会出现长时间黑屏。

独立控件使用说明：
1、	对某个控件加入或去除 鼠标点击事件
	加入事件： Yfqian.TuchEvent.On(this.Sprshp); 
	去除事件： Yfqian.TuchEvent.Off(this.Sprshp);

2、	鼠标事件写法：
元件名.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function() {
trace.log("点击成功");
},this);

3、	加载网络图片
new Yfqian.Img("图片地址",显示容器)
4、	舞台窗口弹射效果：
new Yfqian.Sprite(窗口OBject);
5、	点击动画事件
if(Yfqian.AnNiu.retNum(this.Cj_qd) == true) {     
trace.log("点击成功");
}
6、	关闭窗口动画事件
if(Yfqian.Sprite.Sprite_Off(this.CreateRole_id_qr, this.Sprshp) == true) {
trace.log("点击成功");
}


