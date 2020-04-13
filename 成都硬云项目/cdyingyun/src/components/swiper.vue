<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../images/banner1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../images/banner2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../images/banner3.jpg" alt=""></div>
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
    img{
        vertical-align: top;
    }
    // 轮播图前进后退按钮
    .swiper-button-prev{
        color: #fff;
    }
    .swiper-button-next{
        color:#fff;
    }
</style>
