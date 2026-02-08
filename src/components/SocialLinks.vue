<template>
  <div class="social-links">
    <a href="https://github.com/NimshaE" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/nimsha-erin-4b50131bb/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.researchgate.net/profile/Nimsha-Erin-Kumarage?ev=hdr_xprf" target="_blank"><i class="fab fa-researchgate"></i></a>
    <a href="https://medium.com/@nimshaerin9" target="_blank"><i class="fab fa-medium"></i></a>
  </div>
</template>

<style scoped>
.social-links {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.social-links a {
  color: #a0a0a0;
  font-size: 1.5rem;
  opacity: 0.85;
  transition: color 0.3s ease, opacity 0.3s ease;
}

.social-links a:hover {
  color: rgba(255, 255, 255);
  opacity: 1;
}

/* ✅ Responsive: move below content and center horizontally */
@media screen and (max-width: 900px) {
  .social-links {
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem auto 0 auto;
    gap: 1.5rem;
    background: rgba(0, 0, 0, 0); /* adds contrast over bg image */
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
}
</style>
