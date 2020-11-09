<template>
  <h1>List Couses</h1>
  <ul>
    <li v-for="(course, index) in courses" v-bind:key="index">
      {{ course.name }}
    </li>
  </ul>
  <form
    @submit.prevent="
      courses.push({ name: newCourse });
      newCourse = '';
    "
  >
    <input v-model="newCourse" />
    <button type="submit">new Course</button>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newCourse: "",
      courses: [
        { name: "NodeJs" },
        { name: "Vue" },
        { name: "React" },
        { name: "Svelte" },
      ],
    };
  },
};
</script>

<style></style>
