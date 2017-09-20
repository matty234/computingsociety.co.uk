<template>
  <div>
    <b-jumbotron fluid class="darkbg logo fullscreen">
      <img src="./csinverted.png">
      <h1 class="white">Code. Play. Connect.</h1>
      <br />
      <br />
    </b-jumbotron>
    <b-jumbotron fluid class="logo fullscreen">
    </b-jumbotron>
  </div>
</template>

<style>
.darkbg {
  background-color: #282423
}

.white {
  color: #ffffff
}

.jumbotron {
  margin-bottom: 0px
}

.logo {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
}
.carousel-caption {
  right: inherit;
  bottom: inherit;
  left: inherit;
}

.fullscreen img {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

html,body{height:100%;}
.carousel,.item,.active{height:100%;}
.carousel-inner{height:100%;}

</style>
