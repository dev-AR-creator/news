<template>
  <Nav />

<div class="flex flex-row justify-around w-screen h-auto min-h-screen border-2 p-8">
  <div class="rounded-xl basis-1/2  shadow-2xl border-2 p-8 m-16 ">
    <h1>Enter the Title</h1>
    <v-text-field v-model="name"
  clearable
  label=""
  
  variant="outlined"
></v-text-field>


<v-select v-model="location"
  clearable
  chips
  label="Select"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  variant="solo"
></v-select>


<v-textarea clearable label="Label" v-model="article" variant="outlined"></v-textarea>
<v-text-field label="Label" v-model="writer" variant="outlined"></v-text-field>
<v-text-field label="Label" v-model="image" variant="outlined"></v-text-field>


<v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn @click="forward" color="primary" v-bind="props">Post</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the bottom"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Summited succefully!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn variant="text" @click="isActive.value = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>

  </div>
</div>

{{ use.id }}

</template>


<script setup>
import { ref } from 'vue'
const use = useSupabaseUser();
const supabase = useSupabaseClient();

definePageMeta({
  middleware: ["auth"],
});

const dialog = ref(true)
const name = ref("Enter the title");
const article=ref("Enter your news");
const location=ref("");
const image=ref("image url");
const writer=ref("your name plese");
const forward = async () => {

 const body={
  "title":name.value,
    "art":article.value,
    "loc":location.value,
    "image": image.value,
    "writer":writer.value,
    "view":1,
    "veri":0,
    "user": use.value.id
 }

 const res =await $fetch("/api/artic",{
  method: "post",
  body
 })



}

const data=await useFetch()


</script>