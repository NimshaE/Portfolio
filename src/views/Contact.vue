<template>
  <PageWrapper title="Contact">
    <div class="contact-container">
      
      <div class="contact-card">
        <h2 class="subtitle">Let’s Connect</h2>
        <p class="description">
          I’m always open to collaborations, product design opportunities,
          research discussions, or just a meaningful conversation.
        </p>

        <div class="contact-items">

          <!-- Email -->
          <div class="contact-item">
            <span class="label">Email</span>
            <a href="mailto:nimshaerin9@gmail.com" class="link">
              nimshaerin9@gmail.com
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="contact-item">
            <span class="label">LinkedIn</span>
            <a 
              href="https://www.linkedin.com/in/nimsha-erin-4b50131bb/" 
              target="_blank" 
              class="link"
            >
              Nimsha Erin
            </a>
          </div>

          <!-- Resume Button -->
          <div class="resume-section">
            <a 
              :href="import.meta.env.BASE_URL + 'resume.pdf'" 
              target="_blank" 
              class="resume-button"
            >
              View Resume
            </a>
          </div>

        </div>
      </div>

    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "ContactView",
  components: { PageWrapper },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.contact-card {
  width: 100%;
  max-width: 600px;
  padding: 2.5rem;
  background: rgba(141, 141, 141, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(142, 142, 142, 0.15);
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 1rem;
  text-align: center;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  color: #c2c2c2;
  line-height: 1.6;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.85rem;
  color: #909090;
  margin-bottom: 0.3rem;
}

.link {
  font-size: 1rem;
  color: #f8f9fa;
  text-decoration: none;
  transition: 0.3s ease;
}

.link:hover {
  color: #c2c2c2;
}

/* Resume Button */
.resume-section {
  margin-top: 1.5rem;
  text-align: center;
}

.resume-button {
  display: inline-block;
  padding: 0.7rem 1.8rem;
  background: linear-gradient(to right, #c2c2c2, #ffffff);
  color: #1a1a1a;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

.resume-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

/* Responsive */
@media screen and (max-width: 768px) {
  .contact-card {
    padding: 2rem 1.5rem;
  }
}
</style>