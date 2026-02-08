<template>
  <div class="re-projects">
    <div
      v-for="(research, index) in researches"
      :key="index"
      class="research-card"
      @click="$router.push(`/research/${index + 1}`)"
    >
      <img :src="research.image" :alt="research.title" />
      <h3>{{ research.title }}</h3>

      <a
        :href="research.link"
        target="_blank"
        rel="noopener noreferrer"
        class="read-link"
        @click.stop
      >
        Read Full Publication →
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchesView",
  props: {
    researches: Array
  }
};
</script>

<style scoped>
.re-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.research-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.research-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(142, 142, 142, 0.4);
}
.research-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(142, 142, 142, 0.8);
}
h3 {
  color: #e6e6e6;
  margin-bottom: 0.5rem;
}

.read-link {
  display: inline-block;
  margin-top: 0.7rem;
  color: #b7b7b7;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s;
}

.read-link:hover {
  color: #f8f9fa;
  text-shadow: 0 0 8px rgba(142, 142, 142, 0.6);
}
</style>