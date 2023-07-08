<template>

<Nav />
<div class="w-screen h-screen flex flex-row  justify-around bg-cover " style="background-image: url('https://img.freepik.com/free-vector/wave-textures-white-background-vector_53876-60286.jpg?w=2000')">
<div class="border-2 border-cyan-600 h-1/2 w-1/2  rounded-2xl place-self-center backdrop-blur-lg p-8 shadow-2xl">
    <div class="font-extrabold text-6xl text-amber-300">Welcome to our website kindly log in with Twitter</div>
    <div>LOG in with twitter</div>
    <button class="bg-orange-500 w-32 h-10 rounded-lg hover:shadow-2xl hover:bg-orange-700 hover:w-36 hover:h-12 transition duration-150 ease-in-out" @click="pitu">Log in</button>

</div>
</div>
</template>
















<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const pitu = async () => {
    supabase.auth.signInWithOAuth({
        provider: "twitter"
    });

    
}


</script>