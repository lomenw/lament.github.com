
<!--<style type="text/css">
*{ margin:0; padding:0; list-style:none;}
img{ border:0;}
.ban{ width:500px; height:600px; position:relative; overflow:hidden;margin:40px auto 0 auto;}
.ban2{ width:500px; height:500px; position:relative; overflow:hidden;}
.ban2 ul{ position:absolute; left:0; top:0;}
.ban2 ul li{ width:500px; height:500px;}
.prev{ float:left; cursor:pointer;}
.num{ height:82px;overflow:hidden; width:430px; position:relative;float:left;}
.min_pic{ padding-top:10px; width:500px;}
.num ul{ position:absolute; left:0; top:0;}
.num ul li{ width:80px; height:80px; margin-right:5px; padding:1px;}
.num ul li.on{ border:1px solid red; padding:0;}
.prev_btn1{ width:16px; text-align:center; height:18px; margin-top:40px; margin-right:20px; cursor:pointer; float:left;}
.next_btn1{  width:16px; text-align:center; height:18px; margin-top:40px;cursor:pointer;float:right;}
.prev1{ position:absolute; top:220px; left:20px; width:28px; height:51px;z-index:9;cursor:pointer;}
.next1{ position:absolute; top:220px; right:20px; width:28px; height:51px;z-index:9;cursor:pointer;}

</style>
<body>
	
<!-- 代码部分begin -->
<!--<div class="ban" id="demo1">
	<div class="ban2" id="ban_pic1">
		<div class="prev1" id="prev1">
			<img src="images/index_tab_l.png" width="28" height="51"  />
		</div>
		<div class="next1" id="next1">
			<img src="images/index_tab_r.png" width="28" height="51"  />
		</div>
		<ul>
			<li><a href="javascript:;"><img src="images/b1.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b2.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b3.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b4.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b5.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b1.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b2.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b3.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b4.jpg" width="500" height="500" /></a></li>
			<li><a href="javascript:;"><img src="images/b5.jpg" width="500" height="500" /></a></li>
		</ul>
	</div>

	</div>
</div>-->



 
<script>
jq(function(){
	jq('#demo1').banqh({
		box:"#demo1",//总框架
		pic:"#ban_pic1",//大图框架
		// pnum:"#ban_num1",//小图框架
		prev_btn:"#prev_btn1",//小图左箭头
		next_btn:"#next_btn1",//小图右箭头
		pop_prev:"#prev2",//弹出框左箭头
		pop_next:"#next2",//弹出框右箭头
		prev:"#prev1",//大图左箭头
		next:"#next1",//大图右箭头
		// pop_div:"#demo2",//弹出框框架
		pop_pic:"#ban_pic2",//弹出框图片框架
		pop_xx:".pop_up_xx",//关闭弹出框按钮
		// mhc:".mhc",//朦灰层
		autoplay:true,//是否自动播放
		interTime:5000,//图片自动切换间隔
		delayTime:400,//切换一张图片时间
		pop_delayTime:400,//弹出框切换一张图片时间
		order:0,//当前显示的图片（从0开始）
		picdire:true,//大图滚动方向（true为水平方向滚动）
		mindire:true,//小图滚动方向（true为水平方向滚动）
		min_picnum:5,//小图显示数量
		pop_up:false//大图是否有弹出框
	})
})
</script>
<!-- 代码部分end -->
