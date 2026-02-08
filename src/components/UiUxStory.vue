<template>
  <PageWrapper :title="title">
    <div class="story-wrapper">

      <!-- Hero Section -->
      <section class="hero" v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        transition="0.6s">
        <img :src="image" :alt="title" class="hero-img" />
      </section>

      <!-- Story Sections -->
      <section
        v-for="(block, index) in story"
        :key="index"
        class="story-block"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }"
      >
        <h3 class="block-title">{{ block.heading }}</h3>
        <p class="block-text">{{ block.text }}</p>

        <!-- Single Image -->
        <img 
          v-if="block.image" 
          :src="block.image" 
          class="block-img" 
          alt="story image" 
        />

        <!-- Multiple Images -->
        <div v-if="block.images" class="image-row">
          <img 
            v-for="(img, idx) in block.images"
            :key="idx"
            :src="img"
            class="block-img multi-img"
            alt="story image"
          />
        </div>
      </section>

    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import { MotionPlugin } from "@vueuse/motion";

export default {
  name: "UiUxStory",
  components: { PageWrapper },
  props: {
    title: String,
    image: String,
    story: Array, // [{ heading: "", text: "", image: "" }]
  },
};
</script>

<style scoped>
.story-wrapper {
  max-width: 900px;
  margin: auto;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-img {
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 0 14px rgba(142, 142, 142, 0.4);
}

.hero-title {
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #c2c2c2;
  text-shadow: 0 0 6px #c2c2c2;;
}

.story-block {
  background: rgba(255, 255, 255, 0.06);
  padding: 1.8rem;
  border-radius: 14px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #c2c2c2;;
}

.block-title {
  color: #c2c2c2;;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.block-text {
  color: #c2c2c2;;
  margin-bottom: 1rem;
  line-height: 1.7;
}

.block-img {
  width: 100%;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 0 10px rgba(255, 176, 103, 0.25);
}

.image-row {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.multi-img {
  width: 50%;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 176, 103, 0.25);
}
</style>
