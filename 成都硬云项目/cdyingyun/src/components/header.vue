<template>
	<header>
		 <div class="img"><img src="../images/logo.png" alt=""></div>
		 <ul class="nav">
			<li><router-link class="router-link-exact-active" to="/home/index" active-class="active">首页</router-link></li>
			<li><router-link to="/home/success" active-class="active">成功案例</router-link></li>
			<li><span  @click="jump()">服务案例</span></li>
			<li><router-link to="/home/about" active-class="active">关于我们</router-link></li>
		 </ul>
		 <router-view />
	</header>
	
</template>

<script>
	export default{
		data(){
			return{
				 link:'http://www.baidu.com'
			}
		},
		
		methods:{
			jump(){
				// alert("212")
				window.open("https://www.baidu.com","_self")
			}
		}
		
	}
</script>

<style>
	 header{
		width: 100%;
		height: 100px;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
	}
	 header .img{
			width: 400px;
			height: 90px;
			margin-top: 10px;
	}
	 header .nav{
		display: flex;
		height: 100%;
	}
	 header .nav li{
		 height: 70px;
		line-height: 100px;
		margin: 0 18px;
	}
	header .nav li:hover a{
		color: #003c7b;
		border-bottom:1px solid #003c7b;
	}
	 header .nav li a{
		 display: flex;
		height: 70px;
		line-height: 100px;
		margin: 0 18px;
	}
	.active{
		
		border-bottom:1px solid #003c7b;
	}
	 header .nav li a{
		color: #000;
	}
	/* header .nav li .router-link-exact-active {
      border-bottom: 4px solid red;
    } */
</style>
