<template>
  <div class="ui-projects">
    <div
      v-for="(uiuxProject, index) in uiuxProjects"
      :key="index"
      class="ui-card"
    >
      <img :src="uiuxProject.image" :alt="uiuxProject.title" />

      <h3>{{ uiuxProject.title }}</h3>
      <p>{{ uiuxProject.description }}</p>

      <!-- Added Story Link -->
      <router-link
        :to="uiuxProject.link"
        class="story-link"
      >
        Read Story →
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  props: {
    uiuxProjects: Array,
  },
};
</script>

<style scoped>
.ui-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.ui-card {
  background: rgba(255, 255, 255, 0.09);
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  transition: 0.3s;
}

.ui-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(142, 142, 142, 0.4);
}

.ui-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(142, 142, 142, 0.8);
}

.story-link {
  display: inline-block;
  margin-top: 1rem;
  color: #c2c2c2;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  border-bottom: 1px solid transparent;
}

.story-link:hover {
  color: #f8f9fa;
}

h3 {
  color: #c2c2c2;
  margin-bottom: 0.5rem;
}

p {
  color: #cccccccb;
}
</style>
