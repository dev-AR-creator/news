<template>
    <Nav />
<div class="flex flex-row border-8 w-screen h-auto min-h-screen gap-8  p-6">
    <div class="basis-1/4 border-2 rounded-2xl shadow-2xl p-2 pt-8">

        <word />


    </div>
    <div class="basis-1/2  rounded-2xl p-4 shadow-2xl h-auto">
        <h1 class="text-7xl font-bold mt-4 p-4 text-cyan-500">{{ listing.title }}</h1>
    <div class="flex flex-box justify-between">
        <p class="text-2xl p-4  font-semibold"> <v-icon icon="mdi-map-marker"></v-icon>{{ listing.loc }}</p>
        <p class="text-2xl p-4 font-semibold"><v-icon icon="mdi-typewriter"></v-icon> {{ listing.writer }}</p>
        </div>
        <hr />
        <div class="p-6 mt-4 text-2xl   tracking-wider leading-relaxed  ">{{ listing.art }}</div>



    </div>
    <div class="basis-1/4 border-2 rounded-2xl shadow-2xl pt-6 p-2 sticky ">

        <v-card class="mx-auto" max-width="368" color="black">
    <v-card-item title="Florida"> </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6">{{ listing.loc }} </v-col>

        <v-col cols="6" class="text-right">
          <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-card>


    </div>









</div>


    


  






</template>







<script setup>




const route= useRoute();
const index=route.params.id;




let listing;


await useFetch(`/api/parti/${index}`).then((res)=>console.log(listing=res.data._value[0]))









</script>
