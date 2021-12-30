<template>
  <div class="good-info-container">
    <div class="title">Crazy dinerbiu 拷贝</div>
    <div class="container">
      <div class="bigImage">
        <div>
          <img
            src="https://storage.googleapis.com/assets.axieinfinity.com/axies/5511/axie/axie-full-transparent.png"
            alt=""
          />
        </div>
      </div>
      <div class="containerInfo">
        <div class="infoItem">
          <div class="InfoTitle">About 拷贝</div>
          <div class="infoBox">
            <div class="aboutTop">
              <div>
                <p>quantity</p>
                <div class="one">999</div>
              </div>
              <div>
                <p>material scinence</p>
                <div class="tow">Stone materials</div>
              </div>
            </div>
            <div class="aboutBottom">
              <p>OWNER 拷贝</p>
              <p class="userInfo">
                <span>Mr.FR </span>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem beatae deleniti quis. Quis magni
                voluptatem quos, eos repudiandae dignissimos, magnam molestiae
                quia repellendus, perferendis hic ab doloremque! Qui,
                accusantium tempore!
              </p>
            </div>
          </div>
        </div>
        <div class="infoItem">
          <div class="InfoTitle">Effect</div>
          <div class="infoBox">
            <div class="Effect">
              <p class="EffectInfo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum a sed laborum. Ullam praesentium porro a tenetur odit
                corporis, voluptas voluptatem dolores nemo nesciunt quaerat
                libero consectetur dolore temporibus quisquam.
              </p>
            </div>
          </div>
        </div>
        <div class="infoItem">
          <div class="InfoTitle">Detailed information</div>
          <div class="infoBox">
            <div class="Detailed">
              <div>
                <p><span>Score：</span>4.3%</p>
                <p><span>Energy：</span>100</p>
              </div>
              <div>
                <p><span>Profit：</span>1300F</p>
                <p><span>Day： </span>5000</p>
              </div>
              <div>
                <p><span>Grade:</span>♥♥</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.good-info-container {
  width: 100%;
}
.good-info-container .title {
  color: white;
  font-size: 23px;
}
.good-info-container .container {
  display: flex;
  justify-content: space-between;
}
.good-info-container .container > div {
  width: 50%;
  box-sizing: border-box;
}
.good-info-container .container .bigImage {
  width: 249px;
  /* height: 241px; */
  flex: 1;
  align-self: flex-start;
}
.good-info-container .container .bigImage div {
  width: 249px;
  height: 241px;
  margin: 50px auto;
}
.good-info-container .container .bigImage img {
  width: 100%;
  height: 100%;
}

/* 第一 部分 */
.good-info-container .container .containerInfo .infoItem {
  width: 100%;
  margin-bottom: 40px;
}
.good-info-container .container .containerInfo .infoItem .InfoTitle {
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-size: 22px;
}
.good-info-container .container .containerInfo .infoItem .infoBox {
  box-sizing: border-box;
  padding: 20px;
  background: #282b39;
  border-radius: 6px;
}
.containerInfo .infoItem .infoBox .aboutTop {
  display: flex;
  margin-bottom: 20px;
}
.containerInfo .infoItem .infoBox .aboutTop > div {
  margin-right: 30px;
}
.containerInfo .infoItem .infoBox .aboutTop > div p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #a3abcc;
}
.containerInfo .infoItem .infoBox .aboutTop > div div {
  height: 26px;
  line-height: 26px;
  border-radius: 4px;
  padding: 2px 10px;
  min-width: 111px;
  color: white;
  margin-top: 10px;
}
.containerInfo .infoItem .infoBox .aboutTop > div .one {
  background: #1337df;
}
.containerInfo .infoItem .infoBox .aboutTop > div .tow {
  border: 1px solid #a3abcc;
}

.containerInfo .infoItem .infoBox .aboutBottom p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #a3abcc;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.containerInfo .infoItem .infoBox .aboutBottom .userInfo {
  margin-top: 10px;
}
.containerInfo .infoItem .infoBox .aboutBottom .userInfo span {
  font-size: 1.2rem;
}
/* 第二部分 */
.containerInfo .infoItem .infoBox .Effect .EffectInfo {
  color: white;
}

/* 第三块开始 */
.containerInfo .infoItem .infoBox .Detailed {
  display: flex;
  justify-content: space-between;
}

.containerInfo .infoItem .infoBox .Detailed div {
  display: flex;
  flex-direction: column-reverse;
}
.containerInfo .infoItem .infoBox .Detailed div p {
  line-height: 30px;
  color: white;
  font-weight: 600;
}
.containerInfo .infoItem .infoBox .Detailed div p span {
  font-weight: normal;
  display: inline-block;
  width: 80px;
  text-align: right;
}
</style>
