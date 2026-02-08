<template>
  <UiUxStory
    title="Corporate Website Revamp"
    :image="require('@/assets/uiux/projects/hero-1.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project focused on modernizing an outdated corporate website. I led the redesign effort, beginning with research into design trends and competitive benchmarks to align the new site with contemporary UX expectations.',
      },
      {
        heading: 'Problem',
        text: 'The existing site lacked visual appeal, had limited feature presentation, inconsistent layouts, and offered a weak user journey. Missing elements such as clear service highlights, interactive components, and updated branding reduced engagement and clarity.',
        image: require('@/assets/uiux/projects/prob-1.png')
      },
      {
        heading: 'Solution',
        text: 'I restructured the website with a cleaner UI, improved navigation, and added new components, including progress indicators, a technology stack carousel, updated footers, and visually enhanced backgrounds. I also designed new pages, refreshed home-page modules, introduced media elements, and consolidated key information. After multiple design reviews, I transitioned mock-ups into fully developed web pages, added global client-map visuals, refined the blog system, and redesigned the advisory login workflows.',
        images: [
          require('@/assets/uiux/projects/sol-1.png'),
          require('@/assets/uiux/projects/sol-2.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The revamp significantly improved usability, visual consistency, and feature discoverability. The website became more modern, responsive, and user-focused, with streamlined content flow and stronger brand identity, resulting in enhanced user interaction and easier navigation for both clients and internal teams.',
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
