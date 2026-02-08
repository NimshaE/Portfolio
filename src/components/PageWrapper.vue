<template>
  <div class="page-wrapper">
    <NavBar />

    <!-- Page Title -->
    <div class="title-wrapper">
      <h1 class="page-title">{{ title }}</h1>
      <div class="neon-line"></div>
    </div>

    <!-- Page Content Slot -->
    <div class="content-area">
      <slot></slot>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2026 Nimsha Erin. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "PageWrapper",
  components: { NavBar },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  background: url("@/assets/background.png");
  color: #FDF7EF;
  font-family: "Poppins", sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
}

.title-wrapper {
  text-align: center;
  padding-top: 2rem;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0px 0px 12px rgba(142, 142, 142, 0.4);
}

.neon-line {
  margin: 0.8rem auto 1rem auto;
  width: 120px;
  height: 1px;
  background: linear-gradient(to right, transparent, #c2c2c2, transparent);
  box-shadow: 0 0 12px #c2c2c2;
  border-radius: 10px;
}

.content-area {
  padding: 2rem;
  padding-bottom: 4rem;
}

/* Footer */
.footer {
  text-align: center;
  font-size: 0.8rem;
  color: #909090;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(205, 205, 205, 0.15);
  width: 100%;
}
</style>
