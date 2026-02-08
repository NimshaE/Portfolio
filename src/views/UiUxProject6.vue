<template>
  <UiUxStory
    title="Digital Fundraising Platform Redesign"
    :image="require('@/assets/uiux/projects/hero-6.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project focused on redesigning and upgrading a digital fundraising platform, including both political and non-profit use cases. I worked on transforming an existing design into a modern, branded, and scalable system with improved user flows and admin controls.',
      },
      {
        heading: 'Problem',
        text: 'The existing interface lacked consistency, clear user journeys, and modern interaction patterns. Dashboard metrics were difficult to interpret, onboarding flows were unclear, and key features such as media handling, donations, and campaign management needed refinement.',
        images: [
          require('@/assets/uiux/projects/prob-6.png'),
          require('@/assets/uiux/projects/prob-7.png')
        ]
      },
      {
        heading: 'Solution',
        text: 'I redesigned core user flows, dashboards, and admin panels with improved layouts, filters, and data visualization. New features included campaign media handling, banner tools, email templates, payment integration, coupon management, error handling, and visibility controls. Branding updates were applied across typography, color systems, and logos. I also improved onboarding content, FAQs, and beta-to-production UI refinements.',
        images: [
          require('@/assets/uiux/projects/sol-11.png'),
          require('@/assets/uiux/projects/sol-12.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The redesign delivered a cleaner, more professional platform with improved usability and trust. Admins gained better control over campaigns and settings, while users experienced smoother registration, donation flows, and content interaction. The platform became visually consistent, easier to manage, and ready for scalable growth.',
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
