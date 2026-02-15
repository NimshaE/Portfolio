<template>
  <PageWrapper title="Product Designs">
    <ProjectsView :uiuxProjects="uiuxProjects" />
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import ProjectsView from "@/components/ProjectsView.vue";
import img1 from "@/assets/uiux/uiux1.jpg";
import img2 from "@/assets/uiux/uiux2.jpg";
import img3 from "@/assets/uiux/uiux3.jpg";
import img4 from "@/assets/uiux/uiux4.jpg";


export default {
  name: "UiUxView",
  components: { PageWrapper, ProjectsView },

  data() {
    return {
      uiuxProjects: [
        {
          title: "Platform Design Enhancement",
          description: "Improved user/admin platforms with branding and mobile updates",
          image: img1,
          link: "/uiux/1"
        },
        {
          title: "Event Management Revamp",
          description: "Streamlined event workflows and scalable admin experiences",
          image: img2,
          link: "/uiux/2"
        },
        {
          title: "Portal Experience Upgrade",
          description: "Redesigned portal workflows with enhanced functionality and usability",
          image: img3,
          link: "/uiux/3"
        },
        {
          title: "Mobile Wellness Interface",
          description: "Polished mobile wellness experience through UI refinement",
          image: img4,
          link: "/uiux/4"
        }
      ],
    };
  },
};
</script>