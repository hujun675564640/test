<template>
  <div class="about">
    <!-- 头部内容 -->
	  <Header />
    <!-- 轮播图 -->
    <swiper />
    <!-- 信息 -->
    <div class="info">
        <div class="box">
          <div class="pic"><img src="../images/_03.png" alt=""></div>
          <p>Full range of design services, with a strong r & d team dedicated to building the Internet education brand. By integrating the traditional education model with the growing Internet, the development of domestic online education platform is promoted to a higher level.</p>
        </div>
        <div class="box">
          <p>成都硬云科技有限公司，是一家集研发、生产和销售于一体的高新技术企业。公司成立于2019年，致力于教育信息化服务、为教育改革和发展服务、为教育科研服务。 公司秉承“拼搏、创新、谦虚、团队”的企业理念，孜孜追求科技与艺术的完美结合，与客户精诚合作，为客户提供一流的全方位的解决方案和技术服务，推动企业的信息化、国际化和网络化发展。</p>
        </div>
        <div class="box">
          <div class="pic"><img src="../images/_05.png" alt=""></div>

          <p>Adhering to the concept of "efficiency and security", we are committed to the field of Internet technology and provide Internet software development, website design, small program development and other services. At present, a set of scientific, complete and efficient operation system has been formed to provide customers with different design and development.</p>
        </div>
        <div class="box">
          <p>公司秉承“拼搏、创新、谦虚、团队”的企业理念，孜孜追求科技与艺术的完美结合，与客户精诚合作，为客户提供一流的全方位的解决方案和技术服务，推动企业的信息化、国际化和网络化发展。</p>
        </div>
        <div class="box">
          <div class="pic"><img src="../images/_10.png" alt=""></div>

          <p>We stick to the trend of the Internet age. Whether you need a simple and practical mobile APP or a large Internet service website, we have corresponding solutions. Win-win is our constant pursuit.</p>
        </div>
        <div class="box">
          <p>我们紧贴网络时代的发展潮流，不论您是需要简洁实用的手机APP，还是大型互联网服务网站，我们都有相应解决的方法，共赢是我们不变的追求。</p>
        </div>
    </div>


    <!-- 介绍 -->
    <div class="wrap">
        <div class="wrap-int">
          <h2>硬云科技</h2>
          <p>成都硬云科技有限公司，是一家集研发、生产和销售于一体的高新技术企业。</p>
          <h2>精英团队</h2>
          <p>成都硬云科技依靠一流的研发团队、严密的生产流程、强大的渠道控制能力、优秀的市场营销策略、独有的市场前瞻性及精英的销售团队，深化产品内涵，不断提升服务质量、市场占有率，在各类市场活动中崭露头角，成为教育产品行业的后起之秀。</p>
          <h2>满意服务</h2>
          <p>公司秉承“创新、共赢、高效”的企业理念，孜孜追求科技与艺术的完美结合，与客户精诚合作，为客户提供一流的全方位的解决方案和技术服务，推动企业的信息化、国际化和网络化发展。
            企业愿景：行业信息化建设的创新者
            企业价值观：创新 共赢 高效
            企业核心竞争力： 以技术进步为竞争力,以品牌设计为影响力,以注重体验为源动力,以客户满意为行动力</p>
        </div>
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import swiper from "@/components/swiper1.vue"
export default {
  data() {
    return {};
  },
  components:{
	  Header,Footer,swiper
  }
};
</script>

<style lang="scss" scoped>
.about{
  width: 100%;
  height: 100%;

  .info{
    width: 100%;
    height: 800px;
    background-color: #8b3242;
    padding: 0 5%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .box{
      width: 33.3333%;
      height: 50%;
      color: #fff;
      font-size: 15px;
      // display: flex;
      .pic{
        text-align: center;
        margin-top: 50px;
      }
      p{
        height: 189px;
        letter-spacing: 1px;
        line-height: 16px;
      }
    }
    .box:nth-child(1){
      background-color: #909bc6;
      padding: 0 50px;
      font-size: 13px;
    }
    .box:nth-child(3){
      background-color:#b7a5c7;
      padding: 0 50px;
      font-size: 13px;
    }
    .box:nth-child(5){
      background-color: #c2acb0;
      padding: 0 50px;
      font-size: 13px;

    }
    .box:nth-child(2),:nth-child(4),:nth-child(6){
        padding: 160px 50px 0 50px;
    }
  }
  .wrap{
    width: 100%;
    height: 776px;
    padding-top: 100px;
    background: url(../images/abt_bg_2.jpg) no-repeat;
    .wrap-int{
      width: 768px;
      height: 100%;
      margin: 0 auto;
      h2{
        font-size: 20px;
        color: #7c7c7c;
        height: 31px;
        line-height: 31px;
        font-weight: 300;

      }
      p{
        line-height: 32px;
        color: #fff;
      }
    }
  }

}

</style>
