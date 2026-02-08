<template>
  <PageWrapper :title="research.title">
    <div class="research-details">
      <!-- Presentation -->
      <div class="presentation-wrapper">
        <iframe
          class="presentation-frame"
          :src="research.presentation"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Research Title -->
      <h2 class="section-title">Abstract</h2>
      <p class="description">{{ research.abstract }}</p>

      <!-- Sections -->
      <h2 class="section-title">Research Overview</h2>
      <p class="description"  v-html="research.overview">
      </p>

      <h2 class="section-title">Methodology</h2>
      <p class="description" v-html="research.methodology">
      </p>

      <h2 class="section-title">Findings & Results</h2>
      <p class="description" v-html="research.results">
      </p>

      <h2 class="section-title">Conclusion</h2>
      <p class="description" v-html="research.conclusion">
      </p>

      <!-- Reference/Link -->
      <div class="external-link">
        <a :href="research.link" target="_blank">View Full Publication →</a>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Research3",
  components: { PageWrapper },

  data() {
    return {
      research: {
        title: "Neural Network & Image Processing Classification for Grapes",
        presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQfIZZa5H8Qmn4te6YrTzQNpjO7nxD1QLhQBvo4nnbA3lDEuhFObuk57tuF-mbwxQ/pubembed?start=true&loop=true&delayms=3000",
        abstract:
          "This research focuses on classifying three grape types—blue (Concord), white (Thompson Seedless), and pink (Red Globe)—using Convolutional Neural Networks. After evaluating multiple CNN architectures, AlexNet was selected for its efficiency, speed, and strong performance. The model achieved a 97% test accuracy, demonstrating high reliability for fruit-image classification tasks.",
        overview:`
          <p>The goal of this study was to build a system capable of accurately identifying grape varieties using image classification.</p>
          <p>The project was structured across five areas:</p>
          <ul>
            <li><b>Introduction</b> – presented the importance of fruit classification in food quality control.</li>
            <li><b>Methodology</b> – compared CNN architectures including AlexNet, VGG, Inception, ResNet, and EfficientNet.</li>
            <li><b>Simulations</b> – detailed how AlexNet was implemented and trained.</li>
            <li><b>Results</b> – evaluated accuracy, learning curves, and confusion matrices.</li>
            <li><b>Conclusion</b> – summarized performance and potential industry applications.</li>
          </ul>
          <p>AlexNet was ultimately selected as the primary model and used exclusively for the final system.</p>
        `
        ,
        methodology:`
          <p>This study compared several popular CNN architectures to determine the most suitable model for grape classification:</p>
          <ol>
            <li><b>AlexNet</b></li>
              <ul>
                <li>Proven reliable in prior food-image studies</li>
                <li>Achieved 92.1%–99.8% accuracy in vegetable and fruit datasets</li>
                <li>Strong balance of speed, simplicity, and performance</li>
              </ul>
            <li><b>VGG (16 & 19)</b></li>
              <ul>
                <li>Deep and powerful but computationally heavy</li>
                <li>Achieved high accuracy in studies (up to 96%)</li>
                <li>Rejected because of long training times and high resource usage</li>
              </ul>
            <li><b>Inception (GoogleNet)</b></li>
              <ul>
                <li>High accuracy (~96%) in produce recognition</li>
                <li>Not selected due to overfitting on small datasets and high parameter count</li>
              </ul>
            <li><b>ResNet</b></li>
              <ul>
                <li>Excellent for deep architectures</li>
                <li>Not suitable for this task due to unnecessary complexity and heavy compute demand</li>
              </ul>
            <li><b>EfficientNet-B0</b></li>
              <ul>
                <li>Modern, scalable, and accurate (~97%)</li>
                <li>Rejected during testing because long training caused overheating and shutdowns</li>
              </ul>
          </ol>
          <p><b>Why AlexNet Was Chosen</b></p>
          <p>After all comparisons:</p>
          <ul>
            <li>AlexNet gave <b>0.5%</b> higher accuracy than EfficientNet-B0 during the same number of epochs</li>
            <li>Trained significantly faster on limited hardware</li>
            <li>Required fewer resources</li>
            <li>Delivered consistently high accuracy (>90%)</li>
          </ul>
          <p>Although AlexNet was tested for both classification and regression, it performed poorly in regression due to its architecture. Therefore, this study focuses only on classification, where AlexNet excels.</p>
        `
        ,
        results:`
          <p>The final AlexNet model achieved <b>97% test accuracy</b>, demonstrating strong feature-learning ability and reliable performance across all three grape classes.</p>
          <p><b>Key observations:</b></p>
          <ul>
            <li>The accuracy curve showed stable learning with no major signs of overfitting.</li>
            <li>The confusion matrix indicated slightly better performance on white and blue grapes, likely due to more training examples for those classes.</li>
            <li>Data augmentation (zoom, color shift, brightness variation) improved generalization by simulating real-world conditions.</li>
            <li>The model successfully handled variations in shape, color, and lighting.</li>
          </ul>
          <p>Overall, the results confirm that AlexNet is highly effective for fruit-image classification tasks.</p>
        `
        ,
        conclusion:`
          <p>This project successfully developed a grape-classification system using deep learning. AlexNet delivered strong performance with <b>97% accuracy</b>, demonstrating its suitability for agricultural automation tasks such as sorting, grading, and quality inspection.</p>
          <p>Transfer learning significantly reduced training time and improved results, making the solution practical even on limited hardware. Future enhancements may include:</p>
          <ul>
            <li>Fine-tuning AlexNet with more grape categories</li>
            <li>Integrating lightweight models (e.g., MobileNet) for real-time deployment</li>
            <li>Deploying the system in industrial environments for validation under practical conditions</li>
          </ul>
          <p>The study confirms that deep learning offers a robust, scalable solution for automated fruit classification.</p>
        `
        ,
        link: "https://github.com/NimshaE/Artificial-Intelligence-and-Machine-Vision",
      },
    };
  },
};
</script>

<style scoped>
.research-details {
  max-width: 850px;
  margin: auto;
  padding: 1rem;
}

.presentation-wrapper {
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.25);
}

.presentation-frame {
  width: 100%;
  height: 360px;
}

@media (max-width: 768px) {
  .presentation-frame {
    height: 240px;
  }
}

/* Section Titles */
.section-title {
  color: #f8f9fa;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Paragraph Styling */
.description {
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* External Publication Link */
.external-link {
  margin-top: 2.5rem;
  text-align: center;
}

.external-link a {
  color: #f8f9fa;
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
  padding-bottom: 3px;
  transition: 0.3s;
}

.external-link a:hover {
  opacity: 0.7;
}
</style>
