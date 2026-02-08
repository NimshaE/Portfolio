<template>
  <UiUxStory
    title="Mobile Wellness App UI Enhancements"
    :image="require('@/assets/uiux/projects/hero-8.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project focused on improving the visual quality and mobile UI of a self-guided wellness application. It was one of my first hands-on projects, where I worked closely on image optimization and mobile-first interface improvements.',
      },
      {
        heading: 'Problem',
        text: 'The platform faced visual inconsistencies, low-quality background assets, and usability issues across mobile screens. Several UI elements required refinement to improve clarity, engagement, and overall polish.',
        image: require('@/assets/uiux/projects/prob-9.png')
      },
      {
        heading: 'Solution',
        text: 'I upgraded background visuals using high-quality images optimized for mobile devices and performed detailed background removal to prepare assets for development. I also designed a branded loading animation, created new mobile screen layouts, refined an invite-flow screen, and improved the feedback interface to encourage user participation at the end of trial sessions.',
        images: [
          require('@/assets/uiux/projects/sol-15.png'),
          require('@/assets/uiux/projects/sol-16.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The platform achieved a more polished, consistent, and professional mobile experience. Improved visuals and refined UI interactions enhanced usability and user engagement, resulting in a cleaner interface aligned with the app’s wellness-focused brand.',
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
