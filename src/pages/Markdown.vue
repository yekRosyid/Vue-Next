<template>
  <div class="w-full flex-wrap flex">
    <h1 class=" w-full text-center text-3xl my-4 ">MarkDown</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" v-model="text"></textarea>
      </article>
      <article class="w-1/2 border">
        {{ text }}
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "markdown",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style></style>
