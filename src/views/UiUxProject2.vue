<template>
  <UiUxStory
    title="Portal Experience Upgrade"
    :image="require('@/assets/uiux/projects/hero-2.png')"
    :story="[
      {
        heading: 'Background',
        text: 'This project involved updating a large multi-module web portal used for managing business workflows and administrative operations. It required a complete UX refresh, new feature designs, and phased enhancements across several subsystems.',
      },
      {
        heading: 'Problem',
        text: 'The portal suffered from outdated layouts, fragmented flows, and limited functionality within core modules such as admin management, settings, presentations, and record handling. Important tasks were difficult to locate or manage, and overall consistency was lacking across the system.',
        image: require('@/assets/uiux/projects/prob-2.png')
      },
      {
        heading: 'Solution',
        text: 'I began by migrating existing designs to a unified design environment, establishing consistency with prior styles. I redesigned the admin portal with new terminals, management features, updated dealer group views, improved realm settings, and structured FAQs and banners. Later phases included upgrades to the presentation module, visual enhancements to slides, simplified layouts for complex sections, and the creation of a new flowchart feature based on selected library components. All updates were reviewed with clients and aligned with development feasibility.',
        images: [
          require('@/assets/uiux/projects/sol-3.png'),
          require('@/assets/uiux/projects/sol-4.png')
        ]
      },
      {
        heading: 'Impact',
        text: 'The upgraded portal delivered smoother workflows, clearer information hierarchy, and improved administrative control. Reworked modules significantly reduced effort required by users, while the new designs provided clarity, scalability, and readiness for future enhancements. The result was a cohesive, unified portal experience across business functions.',
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
