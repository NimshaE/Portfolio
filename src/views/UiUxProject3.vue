<template>
  <UiUxStory
    title="Multi-Module Financial Platform Enhancement"
    :images="[
      require('@/assets/uiux/projects/3/pro-3-1.png'),
      require('@/assets/uiux/projects/3/pro-3-2.png'),
      require('@/assets/uiux/projects/3/pro-3-3.png'),
      require('@/assets/uiux/projects/3/pro-3-4.png')
    ]"
    summary="Led a 6+ month system-level UX modernization of a live administrative and digital presentation portal serving multiple role types. Migrated a fragmented legacy design system to a scalable component architecture, reduced navigation depth through contextual workflows, clarified role-based permissions, and introduced a new visual flowchart builder, transforming a structurally fragmented platform into a cohesive, extensible system while balancing technical and timeline constraints."
    :highlights="[
      'Migrated legacy Adobe XD system to Figma and standardized ~80% of recurring UI components into a scalable design system',
      'Reduced admin workflow friction by introducing contextual side-panel CRUD interactions, minimizing page reload dependency',
      'Clarified role-based permissions and system status visibility across multi-tier admin structures',
      'Modularized high-complexity management sections to reduce interface fragmentation and improve scalability',
      'Redesigned digital presentation editing workflows to improve continuity, status tracking, and usability',
      'Designed and delivered a drag-and-connect flowchart builder by aligning UX patterns with third-party library and engineering constraints',
      'Reduced long-term design debt while maintaining roadmap velocity in a live production environment'
    ]"
    pdf="pdfs/Project3.pdf"
  />
</template>

<script>
import UiUxStory from "@/components/UiUxStory.vue";

export default {
  components: { UiUxStory },
};
</script>
