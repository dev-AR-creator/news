

<template>
<header
    class="sticky rounded-2xl top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md z-0"
  >
  <div class="flex flex-row jusrify-start gap-8 text-xl">
    <NuxtLink class="text-3xl font-mono mr-6" to="/">ARnews</NuxtLink>
   
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/add/postar">Post</NuxtLink>
    <NuxtLink to="/read/post">Read</NuxtLink>
    </div>

    <div class="flex flex-row justify-end gap-4">
    <button class="border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 hover:shadow-lg" v-if="user"><NuxtLink to="/read/${user.id}/userpost">admin</NuxtLink></button>
    <button class="border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 hover:shadow-lg" v-if="user"><NuxtLink to="/prof/login">Log out</NuxtLink></button>
    <button class="border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 hover:shadow-lg " v-else><NuxtLink to="/prof/login">Log in</NuxtLink></button>
    </div>
  </header>
</template>




<script setup>

const user = useSupabaseUser();

</script>