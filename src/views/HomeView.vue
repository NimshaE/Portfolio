<template>
  <div class="home-container">
    <div class="main-content">
      <!-- Left Content Panel -->
      <div class="left-panel">
        <div class="content">
          <h1 class="name">Nimsha Erin</h1>
          <p class="tagline">Product Designer · UX/UI Specialist · HCD Advocate</p>

          <nav class="nav-links">
            <router-link to="/uiux">Product Designs</router-link>
            <router-link to="/about">About Me</router-link>
            <router-link to="/contact">Contact</router-link>
          </nav>

        </div>
      </div>

      <!-- Right Visual Panel -->
      <div class="right-panel">
        <SocialLinks />
      </div>
    </div>

    <!-- ✅ Full-width footer -->
    <footer class="footer">
      <p>© 2026 Nimsha Erin. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";

export default {
  name: "HomeView",
  components: { SocialLinks },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  color: #FDF7EF;
  background: url("@/assets/index.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
}

/* Wrapper for left + right panels */
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Left Panel */
.left-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
}

/* Right Panel */
.right-panel {
  flex: 0.9;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Content Area */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 500px;
  width: 100%;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0px 0px 12px rgba(142, 142, 142, 0.4);
}

.tagline {
  color: #c2c2c2;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* NavBar */
.nav-links {
  display: flex;
  flex-wrap: wrap; /* ✅ allows wrapping on small screens */
  gap: 1.5rem;
  justify-content: flex-start;
}

.nav-links a {
  text-decoration: none;
  color: #f8f9fa; 
  -webkit-text-stroke: #f8f9fa;
  transition: all 0.35s ease;
  font-weight: 600;
  white-space: nowrap; 
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: rgb(250, 250, 250);
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}


/* ✅ Updated Footer */
.footer {
  text-align: center;
  font-size: 0.8rem;
  color: #909090;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(205, 205, 205, 0.15);
  width: 100%;
}

/* ✅ Responsive layout */
@media screen and (max-width: 900px) {
  .main-content {
    flex-direction: column;
  }

  .left-panel {
    padding: 2rem;
  }

  .right-panel {
    order: 2; /* Move to bottom */
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .name {
    font-size: 2.2rem;
  }
}
</style>
