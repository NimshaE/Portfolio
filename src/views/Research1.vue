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
      <p class="description" v-html="research.overview">
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
  name: "Research1",
  components: { PageWrapper },

  data() {
    return {
      research: {
        title: "Hybrid CNN-Transformer Architecture for Enhanced Breast Cancer Detection",
        presentation: "https://docs.google.com/presentation/d/e/2PACX-1vRVmTggmavSj6ImZgKQMrvzFKM4MO4IfTOZKIZRM2knfQ-sMP_McaVbsyvrRu2V3Q/pubembed?start=true&loop=true&delayms=3000",
        abstract:
          "This research proposes a Hybrid CNN-Transformer model to improve breast cancer detection and segmentation from ultrasound images. CNNs extract local spatial features, while Transformers capture global context—creating a complementary architecture suitable for medical imaging. The model integrates attention-based explainability tools (Grad-CAM, Transformer attention maps) to support clinical interpretation. Pre-processing, augmentation, and multi-scale feature learning were used to overcome noise, low contrast, and irregular tumor shapes. The approach aims to deliver an interpretable, scalable, and clinically applicable diagnostic system."
        ,
        overview:`
          <p>Breast cancer remains a leading cause of mortality among women. Ultrasound imaging is widely used but suffers from noise, operator dependency, and low contrast. Traditional CAD systems struggle with variability in tumor appearance. </p>
          <p> This study addresses these challenges with a hybrid CNN-Transformer framework that improves accuracy, contextual understanding, and model explainability. It also considers dataset limitations, clinical workflow requirements, and compliance with healthcare data regulations.</p>
        `
        ,
        methodology:`
          <p>A combined Design Science Research (DSR) and SDLC Waterfall framework structured the development process.</p>
          <p>Steps included:</p>
          <ul>
            <li>Evaluating CNN, ViT, and hybrid architectures using annotated ultrasound datasets.</li>
            <li>Applying Grad-CAM and SHAP for explainability.</li>
            <li>Conducting cross-validation using metrics such as accuracy, recall, F1-score, and Dice coefficient.</li>
            <li>Deploying the model using TensorFlow Serving for real-time inference.</li>
            <li>Incorporating clinician feedback to refine model outputs and improve UI design.</li>
          </ul>
          <p>The final platform used Python (backend), Vue.js (frontend), and MySQL (database).</p>
        `
        ,
        results:`
          <p>The hybrid <b>ResNet18 + Vision Transformer</b> model achieved a <b>97.79%</b> validation accuracy, outperforming standalone CNNs (88–95%).</p>
          <p>Key outcomes include:</p>
          <ul>
            <li>CNNs captured fine-grained features like edges and textures.</li>
            <li>Transformers modeled global dependencies and tissue context.</li>
            <li>Pre-processing (CLAHE) significantly enhanced lesion visibility.</li>
            <li>Augmentations (ElasticTransform, MotionBlur, CoarseDropout) improved generalization.</li>
            <li>Misclassification mainly occurred in the benign class, suggesting opportunities for refined augmentations or GAN-based synthetic data.</li>
          </ul>
          <p>Overall, the hybrid architecture showed superior segmentation and classification performance.</p>
        `
        ,
        conclusion:`
          <p>This research demonstrates that combining CNNs and Transformers provides a powerful and interpretable approach for breast cancer ultrasound analysis. With high accuracy and clear attention-based explanations, the model shows strong potential for clinical integration. Future improvements include fine-tuning Transformer layers, optimizing the model for real-time deployment (TensorRT/ONNX), and training on larger multi-institution datasets to improve generalizability.</p>
          <p>This hybrid system lays the foundation for accessible and reliable AI-driven breast cancer detection</p>
        `
        ,
        link: "https://www.researchgate.net/publication/396252575_A_Hybrid_CNN-Transformer_Approach_for_Breast_Cancer_Detection_and_Segmentation_from_Ultrasound_Images",
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
