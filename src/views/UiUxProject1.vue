<template>
  <UiUxStory
    title="Multi-Module Financial Platform Enhancement"
    :images="[
      require('@/assets/uiux/projects/1/pro-1-1.png'),
      require('@/assets/uiux/projects/1/pro-1-2.png'),
      require('@/assets/uiux/projects/1/pro-1-3.png'),
      require('@/assets/uiux/projects/1/pro-1-4.png')
    ]"
    summary="Led a 6+ month system-level enhancement of a multi-module financial and operations platform, unifying fragmented reporting architecture, clarifying role-based workflows, and expanding subscription lifecycle UX. Rebuilt the design foundation, standardized financial reporting templates, reduced GL input errors through structured logic, and launched a cross-platform time-tracking module, transforming a feature-heavy system into a scalable, governance-driven product ecosystem."
    :highlights="[
      'Rebuilt centralized design system in Figma, standardizing grids, components, and reporting templates across modules',
      'Redesigned financial reporting architecture (P&L, Balance Sheet, GST/VAT, Executive Summary, Aged Payables) with unified filtering, exports, and hierarchy logic',
      'Reduced manual GL entry errors by replacing free-text inputs with structured dropdown-based selection aligned to backend accounting logic',
      'Clarified multi-role architecture (Users, Accountants, Owners, Admins) to reduce permission ambiguity and cognitive overload',
      'Expanded subscription lifecycle UX beyond checkout, introducing structured trial logic, lockout states, retention flows, and admin overrides',
      'Designed and launched a desktop + mobile time-tracking module aligned with financial reporting and export workflows',
      'Reduced design debt and enabled scalable module expansion without disrupting legacy backend systems'
    ]"
    :pdf="`${process.env.BASE_URL}pdfs/Project1.pdf`"
  />
</template>

<script>
import UiUxStory from "@/components/UiUxStory.vue";

export default {
  components: { UiUxStory },
};
</script>
