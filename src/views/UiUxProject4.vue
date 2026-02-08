<template>
  <UiUxStory
    title="Website Redesign Project"
    :image="require('@/assets/uiux/projects/hero-4.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project focused on transforming a multi-page website into a modern, CMS-ready platform. It required full redesigns of the home, product, solution, about, and news pages, along with improved structural and visual coherence.',
      },
      {
        heading: 'Problem',
        text: 'The previous website had outdated layouts, limited responsiveness, and inconsistent branding elements. Content was difficult to navigate, and several pages lacked clarity in presenting services and solutions. The site was not optimized for CMS integration or mobile users.',
        image: require('@/assets/uiux/projects/prob-4.png')
      },
      {
        heading: 'Solution',
        text: 'I analyzed benchmark references and mapped a modern UX approach. Key upgrades included redesigned navigation, intuitive CTAs, improved content hierarchy, refined branding, and more responsive layouts. Each major page was restructured with clearer messaging and interactive elements. I also created custom illustrations and 3D visuals to better communicate complex concepts such as product usage and retail system configuration. Weekly client reviews ensured continuous refinement before development handover.',
        images: [
          require('@/assets/uiux/projects/sol-7.png'),
          require('@/assets/uiux/projects/sol-8.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The redesigned site provided a cleaner, more engaging user experience with improved readability and visual consistency. Mobile responsiveness and CMS-ready structures ensured long-term scalability and easier content management. The project elevated the brand’s digital presence and delivered a polished, future-proof website.',
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
