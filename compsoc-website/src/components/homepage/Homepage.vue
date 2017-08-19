<template>
  <div>
    <b-carousel id="carousel1"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               v-model="slide"
               @slide="onSlide"
               @slid="onSlid"
   >
      <b-carousel-slide img="https://i.ytimg.com/vi/v-zRmIxSjEs/maxresdefault.jpg" class="logo" align="center">
        <div>
          <img src="./cslogo.png" class="logo">
          <h1>Code. Play. Connect.</h1>
          <h5>Want to learn how to code || code better? Looking for a job in the software development sphere? Wanna hang out with a huge group of nerds? Or maybe you'd like some cool shirts? Then join CompSoc today!</h5>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img="http://anaisdedit.com/wp-content/uploads/2013/09/tumblr_msidrsLxch1rforobo1_1280.jpg" class="logo" align="center">
        <div>
          <img src="./cslogo.png" class="logo">
          <h1>Code. Play. Connect.</h1>
          <h5>Want to learn how to code || code better? Looking for a job in the software development sphere? Wanna hang out with a huge group of nerds? Or maybe you'd like some cool shirts? Then join CompSoc today!</h5>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img="http://static.tumblr.com/e3121b9b529d7af2fe3e5c777e87f59c/wtk2rlz/YhPmpvowg/tumblr_static_b_wsunflowers.jpg" class="logo" align="center">
        <div>
          <img src="./cslogo.png" class="logo">
          <h1>Code. Play. Connect.</h1>
          <h5>Want to learn how to code || code better? Looking for a job in the software development sphere? Wanna hang out with a huge group of nerds? Or maybe you'd like some cool shirts? Then join CompSoc today!</h5>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlide (slide) {
      this.sliding = true
    },
    onSlid (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
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
</style>
