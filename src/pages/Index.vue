<template>
<Layout>
<header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1 class="masthead-heading mb-0">Avivo</h1>
        <h2 class="masthead-subheading mb-0">Vue Wordpress Gridsome Bootstrap 4 Theme</h2>
        <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
</header>
 <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="../assets/images/01.jpg" alt="01">
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">For those about to create...</h2>
            <p>Using the Vue Wordpress Gridsome Sass enabled Bootstrap 4 Avivo theme.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="../assets/images/02.jpg" alt="02">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-5">
            <h2 class="display-4">We salute you!</h2>
            <p>Because you've chosen this customizable Vue Wordpress API Gridsome Jamstack Bootstrap 4 theme to leave your mark on the world!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="../assets/images/03.jpg" alt="03">
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Let us get creating!</h2>
            <p>Start here and create somthing awesome to be remebered by!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
	
		

</Layout>
</template>
<script>
export default {
      head () {
        return {
          title: `Gridsome Vue Wordpress`,
          metaInfo: [
            {
              hid: 'description',
              name: 'description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:title',
              content: 'Gridsome Vue'
            },
            {
              property: 'og:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Gridsome Vue'
            },
            {
              name: 'twitter:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            }
          ]
        }
      }
    }
</script>
<style>
.container {
width:100%;
}
</style>
