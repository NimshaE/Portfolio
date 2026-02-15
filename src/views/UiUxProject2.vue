<template>
  <UiUxStory
    title="Multi-Module Financial Platform Enhancement"
    :images="[
      require('@/assets/uiux/projects/2/pro-2-1.png'),
      require('@/assets/uiux/projects/2/pro-2-2.png'),
      require('@/assets/uiux/projects/2/pro-2-3.png'),
      require('@/assets/uiux/projects/2/pro-2-4.png')
    ]"
    summary="Led a 3+ month continuous UX evolution of a live multi-sided event platform connecting organizers, venues, cities, and government entities. Improved structural hierarchy, reduced cognitive load across complex RFP and sustainability workflows, clarified subscription and payment systems, and strengthened cross-role consistency, transforming a feature-accumulated product into a scalable, system-driven ecosystem without disrupting production."
    :highlights="[
      'Rebuilt platform-wide information hierarchy across public, dashboard, and multi-role interfaces',
      'Simplified high-friction RFP workflow, reducing decision fatigue and improving proposal evaluation clarity',
      'Modularized SDG-based sustainability benchmarking into structured, actionable dashboards',
      'Redesigned subscription lifecycle and payment approval flows for greater transparency and admin control',
      'Strengthened acquisition UX through CTA prioritization, SEO structure, and improved public-site navigation',
      'Standardized system feedback loops (email, error states, notifications) to enhance cross-touchpoint coherence'
    ]"
    pdf="/pdfs/Project2.pdf"
  />
</template>

<script>
import UiUxStory from "@/components/UiUxStory.vue";

export default {
  components: { UiUxStory },
};
</script>
