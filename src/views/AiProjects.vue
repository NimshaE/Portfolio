<template>
  <PageWrapper title="AI Engineering Projects">
    <AiprojectView :projects="projects" />
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import AiprojectView from "@/components/AiprojectView.vue";
import img1 from "@/assets/research1.jpg";

export default {
  name: "AiProjects",
  components: { PageWrapper, AiprojectView },

  data() {
    return {
      projects: [
        {
          title: "Intelligent Chatbot Assistant",
          description: "GPT-powered conversational chatbot with NLP.",
          image: img1,
          link: "/ai/1"
        },
        {
          title: "Fruit Recognition System",
          description: "CNN classification using AlexNet.",
          image: img1,
          link: "/ai/2"
        },
        {
          title: "Customer Churn Prediction",
          description: "PySpark MLlib churn model.",
          image: img1,
          link: "/ai/3"
        },
        {
          title: "AI Resume Chatbot",
          description: "Chatbot answering recruiter questions.",
          image: img1,
          link: "/ai/4"
        },
      ],
    };
  },
};
</script>

