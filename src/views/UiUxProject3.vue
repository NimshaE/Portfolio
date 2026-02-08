<template>
  <UiUxStory
    title="Platform Design Enhancement"
    :image="require('@/assets/uiux/projects/hero-3.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This multi-phase platform project covered UX improvements for both user and admin systems, including accounting tools, reports, dashboards, and mobile time-tracking. Work included branding updates, major new feature additions, and design support throughout development.',
      },
      {
        heading: 'Problem',
        text: 'The existing platform lacked visual consistency, had limited reporting capabilities, and required new modules for financial management, user roles, transactions, and mobile attendance tracking. Branding inconsistencies and outdated UI patterns created usability gaps.',
        image: require('@/assets/uiux/projects/prob-3.png')
      },
      {
        heading: 'Solution',
        text: 'I redesigned the platform’s visual identity starting with logo modernization. I added new financial features, enhanced settings and reports, improved user management, and expanded the dashboard with analytical components. I created mock-ups for pricing, subscription flows, billing, and email notifications. Additional scopes included advanced accountant modules, asset management, tax reports, and admin subscription controls.For mobile, I designed time-tracking wireframes and mock-ups supporting attendance logging, workspace management, and role-based access. Designs were continuously validated with client and development teams.',
        images: [
          require('@/assets/uiux/projects/sol-5.png'),
          require('@/assets/uiux/projects/sol-6.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The redesigned platform delivered stronger branding, clearer workflows, and vastly expanded system capabilities. Users gained improved reporting, easier navigation, and mobile access to essential features. The project strengthened platform reliability, improved design–development alignment, and enhanced overall user satisfaction across both desktop and mobile experiences.',
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
