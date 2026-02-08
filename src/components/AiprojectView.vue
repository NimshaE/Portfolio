<template>
  <div class="ai-projects">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-card"
    >
      <img :src="project.image" :alt="project.title" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <router-link :to="project.link" class="story-link">Watch Presentation →</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AiprojectView",
  props: {
    projects: Array
  }
};
</script>

<style scoped>
.ai-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.project-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  transition: 0.3s;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(142, 142, 142, 0.4);
}
.project-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}
h3 {
  color: #c2c2c2;
  margin-bottom: 0.5rem;
}
p {
  color: #cccccc85;
}
.story-link {
  margin-top: 1rem;
  display: inline-block;
  color: #c2c2c2;
  font-weight: 600;
  text-decoration: none;
}

.story-link:hover {
  text-shadow: 1px 0 1px #f8f9fa;
}
</style>