<template>
  <UiUxStory
    title="Interactive Quiz Platform Enhancements"
    :image="require('@/assets/uiux/projects/hero-7.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project involved enhancing an existing interactive quiz platform designed to engage users through gamified learning and rewards. I joined the project mid-development and contributed UI/UX improvements and new feature implementations during the early phase of my role.',
      },
      {
        heading: 'Problem',
        text: 'The platform required clearer onboarding, stronger engagement during quiz flow, and improved social sharing. Several screens lacked visual clarity, and the user journey needed refinement to keep participants informed and motivated throughout the experience.',
        image: require('@/assets/uiux/projects/prob-8.png')
      },
      {
        heading: 'Solution',
        text: 'I designed and implemented a video introduction page to explain the quiz flow, along with UI improvements across key stages of the journey. Enhancements included a simplified welcome page, an engaging loading countdown screen, improved user information and email validation, leaderboard sharing popups, refined result displays, and a cohesive wrap-up screen. Minor UI updates were also applied to align production screens with staging updates.',
        images: [
          require('@/assets/uiux/projects/sol-13.png'),
          require('@/assets/uiux/projects/sol-14.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The updates improved onboarding clarity, increased user engagement, and enhanced shareability across the platform. The quiz experience became more structured, visually engaging, and user-friendly, leading to a smoother end-to-end interaction and stronger participation.',
      }
    ]"
  />
</template>

<script>
import UiUxStory from "@/components/UiUxStory.vue";
export default {
  components: { UiUxStory },
};
</script>
