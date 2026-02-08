<template>
  <PageWrapper title="Research Publications">
    <ResearchesView :researches="researches" />
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import ResearchesView from "@/components/ResearchesView.vue";
import img1 from "@/assets/research/research1.jpg";
import img2 from "@/assets/research/research2.jpg";
import img3 from "@/assets/research/research3.jpg";
import img4 from "@/assets/research/research4.jpg";

export default {
  name: "Researches",
  components: { PageWrapper, ResearchesView },

  data() {
    return {
      researches: [
        {
          title: "Hybrid CNN-Transformer Architecture for Enhanced Breast Cancer Detection",
          abstract:
            "A combined CNN-ViT model improves ultrasound-based breast cancer detection and segmentation accuracy.",
          image: img1,
          link: "https://www.researchgate.net/publication/396252575_A_Hybrid_CNN-Transformer_Approach_for_Breast_Cancer_Detection_and_Segmentation_from_Ultrasound_Images",
        },
        {
          title: "Predictive Modeling Techniques for Accurate Bank Customer Churn Analysis",
          abstract:
            "Multiple machine-learning classifiers analyze customer behaviour to predict churn and support retention strategies.",
          image: img2,
          link: "https://www.researchgate.net/publication/395026367_Bank_Churn_Analysis",
        },
        {
          title: "Deep Learning-Based Machine Vision System for Grape Variety Classification(3 Grape Varieties)",
          abstract:
            "CNN models classify grape varieties using image features to enhance automated agricultural sorting.",
          image: img3,
          link: "https://github.com/NimshaE/Artificial-Intelligence-and-Machine-Vision",
        },
        {
          title: "Predictive Analytics System for Chronic Disease Risk Assessment(3 Chronic Diseases)",
          abstract:
            "ACTCLINICA uses health data analytics to predict diabetes, stroke, and hypertension risks accurately.",
          image: img4,
          link: "https://www.researchgate.net/publication/395025883_Chronic_Disease_Prediction_System_for_Diabetes_Stroke_and_Hypertension",
        },
      ],
    };
  },
};
</script>
