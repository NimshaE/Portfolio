<template>
  <PageWrapper title="UI / UX Projects">
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
import img5 from "@/assets/uiux/uiux5.jpg";
import img6 from "@/assets/uiux/uiux6.jpg";
import img7 from "@/assets/uiux/uiux7.jpg";
import img8 from "@/assets/uiux/uiux8.jpg";


export default {
  name: "UiUxView",
  components: { PageWrapper, ProjectsView },

  data() {
    return {
      uiuxProjects: [
        {
          title: "Corporate Website Revamp",
          description: "Modernizing company website with improved UX and new features",
          image: img1,
          link: "/uiux/1"
        },
        {
          title: "Portal Experience Upgrade",
          description: "Redesigned portal workflows with enhanced functionality and usability",
          image: img2,
          link: "/uiux/2"
        },
        {
          title: "Platform Design Enhancement",
          description: "Improved user/admin platforms with branding and mobile updates",
          image: img3,
          link: "/uiux/3"
        },
        {
          title: "Website Redesign Project",
          description: "Revamped website pages for modern, CMS-ready usability",
          image: img4,
          link: "/uiux/4"
        },
        {
          title: "Event Management Revamp",
          description: "Streamlined event workflows and scalable admin experiences",
          image: img5,
          link: "/uiux/5"
        },
        {
          title: "Fundraising Platform Redesign",
          description: "Redesigned fundraising platform with clearer user flows",
          image: img6,
          link: "/uiux/6"
        },
        {
          title: "Quiz Platform Enhancements",
          description: "Enhanced quiz flow with engaging UI and user experience refinements",
          image: img7,
          link: "/uiux/7"
        },
        {
          title: "Mobile Wellness Interface",
          description: "Polished mobile wellness experience through UI refinement",
          image: img8,
          link: "/uiux/8"
        }
      ],
    };
  },
};
</script>