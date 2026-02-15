<template>
  <PageWrapper :title="title">
    <div class="story-wrapper">

      <!-- Carousel with Vertical Indicators -->
      <section class="carousel-wrapper">
        <div class="carousel-images">
          <img
            v-for="(img, idx) in images"
            :key="idx"
            :src="img"
            :alt="`Slide ${idx + 1}`"
            :class="{ active: idx === currentIndex }"
          />
        </div>

        <!-- Vertical indicators -->
        <div class="carousel-indicators">
          <span
            v-for="(img, idx) in images"
            :key="idx"
            :class="{ active: idx === currentIndex }"
            @click="currentIndex = idx"
          ></span>
        </div>
      </section>

      <!-- Summary Section -->
      <section class="summary-block" v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }">

        <h2 class="project-title">{{ title }}</h2>

        <p class="summary-text">{{ summary }}</p>

        <!-- Highlights -->
        <ul v-if="highlights && highlights.length" class="highlight-list">
          <li v-for="(item, i) in highlights" :key="i">{{ item }}</li>
        </ul>

        <!-- View Case Study Button -->
        <a v-if="pdf" :href="pdf" target="_blank" rel="noopener" class="view-btn">
          View Case Study
        </a>

      </section>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "UiUxStory",
  components: { PageWrapper },
  props: {
    title: String,
    images: Array,
    summary: String,
    highlights: Array,
    pdf: String,
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    // Auto-slide every 4 seconds
    this.intervalId = setInterval(this.next, 4000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    next() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    },
  },
};
</script>

<style scoped>
.story-wrapper {
  max-width: 850px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Carousel wrapper */
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Images */
.carousel-images {
  flex: 1;
  position: relative;
  height: 400px; /* Taller carousel */
  overflow: hidden;
  border-radius: 14px;
}

.carousel-images img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-images img.active {
  opacity: 1;
}

/* Vertical indicators */
.carousel-indicators {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.carousel-indicators span {
  width: 6px;
  height: 60px; /* Each line represents a slide */
  background: rgba(194, 194, 194, 0.5);
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.3s, transform 0.3s;
}

.carousel-indicators span.active {
  background: #c2c2c2;
  transform: scaleX(1.5);
}

/* Summary */
.summary-block {
  background: rgba(255, 255, 255, 0.06);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #c2c2c2;
}

.project-title {
  font-size: 1.6rem;
  color: #c2c2c2;
  margin-bottom: 1rem;
}

.summary-text {
  color: #c2c2c2;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.highlight-list {
  color: #c2c2c2;
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
}

.highlight-list li {
  margin-bottom: 0.5rem;
}

/* View Button */
.view-btn {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
  background: #c2c2c2;
  color: #111;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

.view-btn:hover {
  background: #ffffff;
  transform: translateY(-2px);
}
</style>
