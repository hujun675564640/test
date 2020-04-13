<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../images/1.png" alt=""></div>
            <div class="swiper-slide"><img src="../images/2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../images/3.png" alt=""></div>
            <div class="swiper-slide"><img src="../images/4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../images/5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../images/6.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop:"true",
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
           
        })        
    }
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        overflow: hidden;
        height: 500px;
        background: url(../images/abt_bg_1.jpg);
    }
    .swiper-slide{
        width: 100%;
        height: 500px;
    }
    img{
        vertical-align: top;
        width: 100%;
        height: 100%;
    }
    // 轮播图前进后退按钮
    .swiper-button-prev{
        color: #fff;
    }
    .swiper-button-next{
        color:#fff;
    }
</style>
