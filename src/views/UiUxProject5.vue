<template>
  <UiUxStory
    title="Event Management Platform Revamp"
    :image="require('@/assets/uiux/projects/hero-5.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project involved continuous UI/UX enhancements for a large-scale event and venue management platform. I worked on improving landing pages, dashboards, admin tools, and core workflows through iterative design updates, research, and stakeholder feedback.',
      },
      {
        heading: 'Problem',
        text: 'The platform faced usability and consistency issues, including cluttered layouts, weak navigation, limited SEO optimization, and complex RFP and city/country workflows. Several pages lacked clarity, accessibility, and visual hierarchy, affecting both user engagement and admin efficiency.',
        image: require('@/assets/uiux/projects/prob-5.png')
      },
      {
        heading: 'Solution',
        text: 'I redesigned the landing page with improved spacing, typography emphasis, scroll interactions, clearer CTAs, and updated navigation. Multiple workflows were enhanced, including RFP creation, venue shortlisting, dashboards, and notification systems. I designed new email templates, testimonials sections, error pages, login options, city/country profile management, sustainability goal editing, and admin controls. Continuous CR-based updates improved dashboards, payment flows, partner promotions, content pages, and profile modules across organizers, cities, and venues.',
        images: [
          require('@/assets/uiux/projects/sol-9.png'),
          require('@/assets/uiux/projects/sol-10.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The platform became more intuitive, visually consistent, and scalable. Improved workflows reduced friction for organizers and administrators, enhanced content discoverability, and strengthened brand credibility. User engagement and operational clarity increased across both public-facing pages and internal dashboards.',
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
