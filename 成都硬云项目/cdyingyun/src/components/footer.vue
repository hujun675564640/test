<template>
    <footer>
        <div class="inner">
            <div class="inner-info">
                <a href="index">首页</a>|
                <a href="success">成功案例</a>|
                <a href="serve">服务项目</a>|
                <a href="about">关于我们</a>
            </div>
            <p>公司地址：成都市高新区益州大道中段1858号软件园G区G5栋3楼      邮箱：249277296@qq.com       办公QQ：249277296</p>
            <p>版权所有：成都硬云科技有限公司 蜀ICP备14008076号-1 Copyright ©2019 硬云科技 All Rights Reserved</p>
        </div>
    </footer> 
</template>
<style lang="scss" scoped>
    footer{
        width: 100%;
        height: auto;
        margin: 0 0 30px 0;
        border-top:1px solid #ccc; 
        .inner{
            width: 1112px;
            height: 84px;
            margin: 0 auto;
            // display: flex;
            // justify-content: center;
            .inner-info{
                height: 19px;
                margin: 5px 0;
                display: flex;
                justify-content: center;
                a{
                    color: #333;
                    margin: 0  10px;
                    font-size: 16px;
                }
            }
            p{
                height: 28px;
                text-align: center;
                color: #666666;
                font-size: 14px;
            }
        }
    }
</style>