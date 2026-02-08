<template>
  <PageWrapper :title="projectTitle">
    <div class="story-wrapper">

      <!-- Fade-in title section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="story-header"
      >
        <h2>{{ projectSubtitle }}</h2>
        <p>{{ intro }}</p>
      </div>

      <!-- Story content -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 900 } }"
        class="story-section"
      >
        <h3 class="section-title">Project Overview</h3>
        <p class="story-text">
          {{ overview }}
        </p>
      </div>

      <!-- Video section -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
        class="video-section"
      >
        <h3 class="section-title">Presentation Video</h3>
        <video controls class="story-video">
          <source :src="videoUrl" type="video/mp4" />
        </video>
      </div>

      <!-- Story continuation -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 900 } }"
        class="story-section"
      >
        <h3 class="section-title">How It Works</h3>
        <p class="story-text">
          {{ howItWorks }}
        </p>
      </div>

      <!-- Final thoughts -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 900 } }"
        class="story-section"
      >
        <h3 class="section-title">Conclusion</h3>
        <p class="story-text">
          {{ conclusion }}
        </p>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "AiProjectStory",
  components: { PageWrapper },

  data() {
    return {
      projectTitle: "AI Project Story",
      projectSubtitle: "AI Engineering – Deep Dive",
      intro:
        "This project demonstrates advanced machine learning techniques combined with real-world problem solving.",

      overview:
        "This AI project focuses on solving a real user problem with a machine learning or NLP-based solution. The goal was to design, train, optimize, and deploy a fully functioning AI model.",

      howItWorks:
        "The pipeline includes data preprocessing, model training, evaluation, and deployment. Modern tools such as TensorFlow, PyTorch, or PySpark were used depending on the project's requirements.",

      conclusion:
        "This project strengthened my understanding of AI engineering and model deployment in production settings.",

      videoUrl: "/videos/project1.mp4", // Update per project
    };
  },
};
</script>

<style scoped>
.story-wrapper {
  max-width: 850px;
  margin: auto;
  padding-bottom: 3rem;
}

.story-header {
  text-align: center;
  margin-bottom: 2rem;
}

.story-header h2 {
  color: #ffb067;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.story-section {
  margin: 2rem 0;
}

.section-title {
  color: #c97a40;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.story-text {
  color: #f6e7cb;
  line-height: 1.7;
}

.video-section {
  margin: 2.5rem 0;
  text-align: center;
}

.story-video {
  width: 100%;
  max-width: 780px;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 8px 20px rgba(255, 176, 103, 0.2);
}
</style>
