<template>
  <div class="m-auto">
    <h1 class="text-xl font-semibold my-3 text-center">
      List Courses {{ totalCourse }}
    </h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(course, index) in courses"
        v-bind:key="course.name"
      >
        <div>
          {{ course.name }}
        </div>
        <button v-on:click="removeCourse(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addCourse">
      <input
        class="border rounded"
        v-model="newCourse"
        placeholder="Input course disini"
      />
      <button class="border rounded bg-blue-700 text-white ml-5" type="submit">
        new Course
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  computed: {
    totalCourse() {
      return this.courses.length;
    },
  },
  methods: {
    addCourse() {
      if (this.newCourse !== "") {
        this.courses.push({ name: this.newCourse });
        this.newCourse = "";
      } else {
        alert("Kolom tidak boleh kosong");
      }
    },
    removeCourse(index) {
      this.courses = this.courses.filter((cours, i) => i != index);
    },
  },
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
