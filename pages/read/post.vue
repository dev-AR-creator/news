<template>
  <div class="ml-14">
    <Nav />
  </div>

<div class="bg-gray-200 w-screen h-screen z-50 ">

  <div class="flex flex-row w-screen h-auto min-h-screen z-0 ">
    <div>
      <draw />
    </div>
    <div class=" grid grid-cols-5 w-screen gap-20 min-h-screen p-6">


      <div class="border-2  shadow-2xl shadow-yellow-400 h-fit rounded-3xl" v-for="post in listings">

       
        <v-card @click="redirect(post.id,post.view)" class="mx-auto" rounded="xl" color="grey-darken-4" max-width="600">
          <v-chip
      class="ma-2"
      color="green"
      text-color="white"
    >{{ post.view }}</v-chip>
            
          <v-img class="align-end text-white" height="300" :src=post.image cover>
            <v-card-title>{{ post.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            {{ post.loc }}
          </v-card-subtitle>

          <v-card-text>
            <div>{{ post.loc }}</div>

            <div>{{ post.wr }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              Share
            </v-btn>

            <v-btn color="orange">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div> </div>
  
</template>




<script setup>
import { post } from '@supabase/storage-js/dist/module/lib/fetch';

let content = ref(0);


definePageMeta({
  middleware: ["auth"],
});

const { data: listings } = await useFetch(`/api/userpost`);

const redirect =  (id,view) =>{
  navigateTo(`${id}/see`);
  const body={
    "id":id,
    "view":view+1 ,
  }

   $fetch("/api/update",{
  method: "post",
  body
 })

}






</script>
































