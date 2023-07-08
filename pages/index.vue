<template>

	<v-app>

        <Nav />



  <!--hilight menue-->
  
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h1 font-weight-bold mb-4 ">
        ARnews
      </h1>
      <h2 class="subheading">
        Be aware of your Local Area Today!!!
      </h2>
    </div>
  </v-parallax>

<!--timeline-->







<!--the feature list-->

<div class=" w-screen flex flex-row justify-around p-4 my-8 h-auto">
 
<div>
  <v-card class="mx-auto" max-width="400">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
      cover
    ></v-img>

    <v-card-title> Explore the Local </v-card-title>

    <v-card-subtitle> </v-card-subtitle>

    <v-expand-transition>
      <div>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
<div>
  <v-card class="mx-auto" max-width="400">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
      cover
    ></v-img>

    <v-card-title> Explore the Local </v-card-title>

    <v-card-subtitle> </v-card-subtitle>

    <v-expand-transition>
      <div>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
<div>
  <v-card class="mx-auto" max-width="400">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
      cover
    ></v-img>

    <v-card-title> Explore the Local </v-card-title>

    <v-card-subtitle> </v-card-subtitle>

    <v-expand-transition>
      <div>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>



</div>

<div class="text-3xl flex flex-row justify-around w-screen h-auto p-8  ">
   <div class=" ">
    "Join our website to explore your local area click here to join our commonity "<hr/>
    <button class="h-12 w-32 border-2  bg-blue-300 rounded-lg justify-self-center hover:br-blue-400 hover:h-14 hover:w-36 ml-96 mt-16">Sign up</button>
   </div>
 </div>



<!--the feature list-->  

  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</v-app>
<aggr />

</template>



<script>
  export default {
    data: () => ({
      show: true,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
	  colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'DO YOU LACK INFORMATION ABOUT YOUR LOCAL AREA',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],




    }),
  }
</script>