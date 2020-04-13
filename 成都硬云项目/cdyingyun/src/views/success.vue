<template>
	<div class="success">
		<!-- 头部   -->
		<Header />
		<!-- banner 图 -->
		<div class="banner">
			<img src="http://scncry.cn/images/case_banner.jpg" alt="">
		</div>

		<!-- 内容 -->
		<Content />

		<!-- 案例盒子 -->
		<div class="caseBox">
			<div class="caseBox-main">
				<div class="top">
					<div class="tip">
						<li v-for="(item,index) in btns" :key="index" :class="activeIndex == index?'btnAtive':''"
						@click="handleToggle(index)" >{{item}}</li>
					</div>
				</div>
				<div class="bottom">
						<li v-for="(item,index) in contains" :key="index" v-show="activeIndex == index">
							<img :src="item.img" alt="" >
							<img :src="item.img1" alt="" >
							<img :src="item.img2" alt="" >
						</li>
				</div>
			</div>
		</div>

		<!-- footer -->
		<Footer />
	</div>
</template>

<script>
	import Header from "@/components/header.vue";
	import Content from "@/components/content.vue";
	import Footer from "@/components/footer.vue";
	import img1 from "../images/pic_1.jpg"
	import img2 from "../images/pic_2.jpg"
	import img3 from "../images/pic_3.jpg"
	export default {
		data(){
			return {
				btns:["系统平台","手机app","解决方案"],
				contains:[
					{img:img1,img1:img2,img2:img3},
					{img1:img1,img2:img2,img:img3},
					{img2:img1,img:img2,img1:img3}
					
				],
				activeIndex:0
			}
		},
		components:{
			Header,Content,Footer
		},
		methods:{
			handleToggle(index){
				// console.log(1)
                this.activeIndex = index;
            }
		}

	}
</script>

<style lang="scss">
	.success{
		width: 100%;
	}
	.success .banner{
		width: 100%;
		height: 400px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.success .caseBox{
		width:100%;
		height: 584px;
		.caseBox-main{
			width: 1112px;
			height: 584px;
			margin: 0 auto;
			overflow: hidden;
			.top{
				// wdith: 100%;
				height: 54px;	
				.tip{
					width: 639px;
					height: 54px;
					margin:0 auto;
					line-height: 54px;
					margin-top: 20px;
					li{
						width: 137px;
						height: 54px;
						float: left;
						text-align: center;
						margin: 0 38px;
						background: url(../images/bg_4.gif);
						cursor: pointer;
					}
					.btnActive{
						background: url(../images/bg_3.gif);
					}
				}
			}
			.bottom{
				width: 1002px;
				height: 469px;
				margin: 30px auto;
				li{
					width: 1002px;
					height: 469px;
					position: absolute;
					img{
						width: 320px;
						height: 469px;
						margin: 0 7px;
					}
				}
			}
		}
	}
</style>
