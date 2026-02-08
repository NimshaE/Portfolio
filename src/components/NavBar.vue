<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="index-text"> <router-link to="/" class="index-link">Nimsha Erin</router-link></div>

    <div class="nav-links">
      <!--<router-link to="/ai">AI Engineering</router-link>-->
      <router-link to="/research">Researches</router-link>
      <router-link to="/uiux">UI/UX Designing</router-link>
      <router-link to="/about">About Me</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(205, 205, 205, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.55); /* Adjust depending on your theme */
  backdrop-filter: blur(6px);      /* soft glass effect */
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.index-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.index-link {
  color: #f8f9fa;
  text-decoration: none;
}

.index-link:hover {
  opacity: 0.85;  
}

.nav-links a {
  color: #f8f9fa; 
  -webkit-text-stroke: #f8f9fa; 
  transition: all 0.35s ease;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
  margin-left: 1.5rem;
  text-decoration: none;
  font-size: 0.95rem;
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

.nav-links a:hover {
  color: #f8f9fa;        /* filled color */
  -webkit-text-stroke: 1px transparent;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>


