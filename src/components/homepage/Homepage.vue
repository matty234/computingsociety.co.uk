<template>
  <div>
    <b-jumbotron fluid class="darkbg">
      <img src="./csinverted.png" class="logo fullscreen">
      <h1 class="white pb-2">Code. Play. Connect.</h1>
      <div>
        <img src="./downarrow.png" class="smallarrow">
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col">
          <img src="./rhsuwhite.png">
        </div>
      </div>
    </b-jumbotron>
    <b-jumbotron fluid class="nopadding">
      <div class="row">
        <div class="col">
          <h3>OUR HISTORY</h3>
          <p>The Computing Society of Royal Holloway, University of London was founded in late 2012. by Emil Tan, a computer science undergraduate in his second year of study. Since then it has grown into a thriving community of computer enthusiasts from all faculties of studies.
          </p>
        </div>
      </div>
    </b-jumbotron>
    <b-jumbotron fluid class="nopadding">
      <div class="row">
        <div class="col">
          <h3>AIMS</h3>
          <p>The Computing Society focuses on improving its members’ skills and aiding their interests by supplementing their degree programs with talks from professionals in industry, working in improving their skills in workshops and tutorials and making friendships and connections that will last long after they’ve finished their degrees.
          </p>
          <p>The society aims to make computing interesting and fascinating to everyone, doing this by encouraging young people to program by voluntarily teaching at primary school, hence providing their members with opportunities to work in their communities around the university campus.
          </p>
          <p>As part of its mission the Computing Society keeps it members up to date in the latest computing technologies, promoting active discussions in topics from advance information security to basic Java.
          </p>
          <p>The Computing Society aims to create a network of enthusiasts, students, academics, and professionals in the field of computing. We set to achieve this goal by encouraging open source collaboration through publications and sharing sessions, participating in regional and international conferences and competitions and creating opportunities for enthusiasts to meet like-minded people.
          </p>
        </div>
      </div>
    </b-jumbotron>

    <b-jumbotron fluid class="nopadding">
      <div class="row">
        <div class="col">
          <h3>OUR COMMITTEE</h3>
        </div>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapseE variant="secondary">2017/18</b-btn>
        <b-collapse visible id="collapseE" class="full-width">
          <b-card>
            <h4>2017/18</h4>
            <p>President - Dom Hall</p>
            <p>Vice President - Luke Johnston</p>
            <p>Treasurer - Chris Melville</p>
            <p>Communications Officer - Alex Clarke</p>
            <p>Careers Officer - Matt Brown</p>
            <p>Women's Ambassador - Dulcie Jackson</p>
            <p>Competitions Officer - Hugh Wells</p>
            <p>Secretary - Kal Chokanov</p>
            <p>First Year Representative - Benzi Mooneegan</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapseD variant="secondary">2016/17</b-btn>
        <b-collapse id="collapseD" class="full-width">
          <b-card>
            <h4>2016/17</h4>
            <p>President - Ommy Akhigbe</p>
            <p>Vice President - James Green</p>
            <p>Treasurer - Jamie Woods</p>
            <p>Communications Officer - Joe Rowell</p>
            <p>Careers Officer - Chloe Houlihan</p>
            <p>Women's Ambassador - Laura Hughes</p>
            <p>Secretary - Maximillian Berkmann</p>
            <p>First Year Representative - Freya Sheer-Hardwick</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapseC variant="secondary">2015/16</b-btn>
        <b-collapse id="collapseC" class="full-width">
          <b-card>
            <h4>2015/16</h4>
            <p>President - Christopher Harris</p>
            <p>Vice President - Ommy Akhigbe</p>
            <p>Treasurer - Wilbur Fernandes</p>
            <p>Communications Officer - William Webster</p>
            <p>Careers Officer - Eivinas Zaicevicius</p>
            <p>Women's Ambassador - Lauren Williams</p>
            <p>Secretary - Chris Maddex</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapseB variant="secondary">2014/15</b-btn>
        <b-collapse id="collapseB" class="full-width">
          <b-card>
            <h4>2014/15</h4>
            <p>President - Filippo Di Paola</p>
            <p>Vice President - Remi Jahau</p>
            <p>Treasurer - Kirin Ali</p>
            <p>Communications Officer - Omar Rahman</p>
            <p>Careers Officer - Robert Markiewicz</p>
            <p>Women's Ambassador - Bernice Soutter</p>
            <p>Secretary - Feargus Pendlebury</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapseA variant="secondary">2013/14</b-btn>
        <b-collapse id="collapseA" class="full-width">
          <b-card>
            <h4>2013/14</h4>
            <p>President - Jingwei Emil Tan</p>
            <p>Vice President -  James Black</p>
            <p>Treasurer - Meng-yi Lee</p>
            <p>Communications Officer - Slav Danchev</p>
            <p>Secretary - Christian Jank</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapse12 variant="secondary">2012/13</b-btn>
        <b-collapse id="collapse12" class="full-width">
          <b-card>
            <h4>2012/13</h4>
            <p>President - Jingwei Emil Tan</p>
            <p>Treasurer - Meng-yi Lee</p>
            <p>Secretary - Christian Jank</p>
          </b-card>
        </b-collapse>
      </div>

    </b-jumbotron>

    <b-jumbotron fluid class="nopadding">
      <div class="row">
        <div class="col">
          <h3>ACHIEVEMENTS</h3>
        </div>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapse4 variant="secondary">2017/18</b-btn>
        <b-collapse visible id="collapse4" class="full-width">
          <b-card>
            <h4>2017/18</h4>
            <p>Event of the Year Award - Royal Hackaway</p>
            <p>Society Crest Award - Dulcie Jackson</p>
            <p>Freshman of the Year Award - Hugh Wells</p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapse3 variant="secondary">2015/16</b-btn>
        <b-collapse id="collapse3" class="full-width">
          <b-card>
            <h4>2015/16</h4>
            <p>Freshman of the Year Award – Omoyeme Akhigbe
            </p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapse2 variant="secondary">2014/15</b-btn>
        <b-collapse id="collapse2" class="full-width">
          <b-card>
            <h4>2014/15</h4>
            <p>
              Department of the Year
            </p>
            <p>
              Society of the Year
            </p>
            <p>
              Skills and Employability Cup
            </p>
            <p>
              Runnymede Volunteer Award (Community Action’s
              Volunteering Group of the Year)
            </p>
            <p>
              Crest Award – Filippo Di Paola
            </p>
            <p>
              Freshman of the Year Award – Remi Jahau
            </p>
            <p>
              Runnymede Volunteer Award (Individual Award) – Feargus Pendlebury
            </p>
          </b-card>
        </b-collapse>
      </div>
      <div class="row">
        <b-btn v-b-toggle.collapse1 variant="secondary">2013/14</b-btn>
        <b-collapse id="collapse1" class="full-width">
          <b-card>
            <h4>2013/14</h4>
            <p>Society Crest Award – Jingwei Emil Tan, Christian Jank</p>
          </b-card>
        </b-collapse>
      </div>

    </b-jumbotron>
    <b-jumbotron fluid class="darkbg vercenter">
      <div class="row">
        <a href="https://www.facebook.com/groups/rhul.computingsociety/">
          <img src="./fbicon.png" class="icon">
        </a>
        <a href="https://uk.linkedin.com/in/rhul-computing-society-2a85b5147">
          <img src="./liicon.png" class="icon">
        </a>
        <a href="https://twitter.com/rhulcompsoc?lang=en">
          <img src="./twittericon.png" class="icon">
        </a>
        <a href="https://www.royalholloway.ac.uk/home.aspx">
          <img src="./rhullogo.jpg" class="icon right">
        </a>
      </div>
      <div class="row">
        <div class="col">
          <p class="white">ComputingSociety@su.rhul.ac.uk</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <small class="white">Registered Charity 1141998</small>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<style>
.smallarrow {
  width: 50px;
}

.nopadding {
  padding-bottom: 0px;
}

.vercenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  position: absolute;
  right: 0px;
}

.icon {
  height: 50px;
  width: auto;
}

.fillcol {
  width: inherit;
}

.redbg {
  background-color: #cc5544
}

.darkbg {
  background-color: #282423
}

.white {
  color: #ffffff
}

.jumbotron {
  margin-bottom: 0px;
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

.fullscreen {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.full-width {
  width: 85%
}

html,body{height:100%;}
.carousel,.item,.active{height:100%;}
.carousel-inner{height:100%;}

</style>
