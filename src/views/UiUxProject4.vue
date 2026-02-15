<template>
  <UiUxStory
    title="Multi-Module Financial Platform Enhancement"
    :images="[
      require('@/assets/uiux/projects/4/pro-4-1.png'),
      require('@/assets/uiux/projects/4/pro-4-2.png'),
      require('@/assets/uiux/projects/4/pro-4-3.png'),
      require('@/assets/uiux/projects/4/pro-4-4.png')
    ]"
    summary="Led a 3+ month UX optimization initiative for a subscription-based wellness app, focusing on high-impact experience touchpoints affecting credibility, engagement, and trial-to-paid conversion. Enhanced visual system consistency, redesigned micro-interactions and loading states, clarified invite flows, and restructured the end-of-trial conversion moment, strengthening perceived product quality and subscription pathway clarity without requiring a full redesign."
    :highlights="[
      'Upgraded visual asset system (77+ images), standardizing resolution, scaling, and performance across mobile devices',
      'Improved perceived credibility and layout consistency through refined image processing and visual hierarchy',
      'Designed branded micro-interaction loading states to reduce perceived wait time and increase engagement continuity',
      'Optimized invite flow hierarchy and CTA clarity to reduce friction in social engagement pathways',
      'Redesigned end-of-trial conversion experience with structured value reinforcement and clearer subscription messaging',
      'Introduced feedback capture at churn-risk moment to support retention insights',
      'Delivered high-impact UX improvements within existing architecture and performance constraints'
    ]"
    pdf="/pdfs/Project4.pdf"
  />
</template>

<script>
import UiUxStory from "@/components/UiUxStory.vue";

export default {
  components: { UiUxStory },
};
</script>
