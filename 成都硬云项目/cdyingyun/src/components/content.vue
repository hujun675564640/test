<template>
    <!-- 内容信息栏 -->
		<div class="content">
			<li>
				<img src="../images/cont1.png" alt="">
				<div class="gonggao"><a href="" style="background-color: #003c7b;">最新公告</a></div>
			</li>
			<li><img src="../images/cont1.png" alt=""></li>
			<li><img src="../images/cont1.png" alt=""></li>
			<li><img src="../images/cont1.png" alt=""></li>
			
			<!-- <div class="phone"></div> -->
			
		</div>
</template>
<style lang="scss" scoped>
    .content{
		width: 100%;
		height: 120px;
		display: flex;
		padding: 0 10%;
		align-items: center;
		justify-content: center;
		background-color: #eeeeee;
		
	}
	.content li{
		/* display: inline-block; */
		margin-right: 100px;
	}
	.content li img{
		animation: move1 1.5s ease-in-out 0.6s;
	}
	@keyframes move1 {
				/*这个就是要执行的动画*/
			    from {  transform: scale(0);  }
			    /*从它到它，scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数，这个是css3中2D的转换方法。*/
			    to {  transform: scale(1);  }
			}
	.content li:nth-child(1){
		position: relative;
	}
	.content li .gonggao{
		position: absolute;
		top: -50px;
		left: 0%;
		z-index: 100;
	}
	.content li .gonggao a{
		width: 60px;
		height: 100%;
		color: #fff;
	}
</style>