<template>
  <PageWrapper title="About Me">
    <div class="about-container">
      <!-- Left Column: Text -->
      <div class="about-text">
        <h2 class="subtitle">Who Am I?</h2>
        <p>
          I’m <strong>Nimsha Erin</strong>.
          <br>A passionate software developer,
          AI engineer and researcher with experience in building intelligent
          systems, data-driven applications, and user-centered digital products.
        </p>

        <p>
          I specialize in <strong>UI/UX Engineering</strong>, <strong>Software Development</strong>, <strong>Deep Learning</strong>, <strong>NLP</strong>, and <strong>Computer Vision</strong> . I’m also
          involved in academic research, focusing on machine learning experimentation and applied AI systems.
        </p>

        <p>
          Alongside engineering, I enjoy designing thoughtful, human-centered
          experiences in UI/UX and exploring how cross-cultural perspectives
          shape digital interaction.
        </p>

        <h2 class="subtitle">What I Do</h2>
        <ul class="skills">
          <li>AI & Machine Learning Development</li>
          <li>Research & Academic Writing</li>
          <li>Frontend Development</li>
          <li>Python Development</li>
          <li>UI/UX Design, Prototyping & UI Testing</li>
          <li>Business Analysis, Data Analysis & Visualization</li>
        </ul>

        <p class="closing">
          I'm constantly learning, building, and exploring and I'm passionate about
          creating meaningful impact through technology.
        </p>
      </div>

      <!-- Right Column: Image + Social Links -->
      <div class="about-side">
         <!--<img
          class="profile-img"
          src="@/assets/profile.png"
          alt="Profile Picture"
        />-->

        <SocialLinks />
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import SocialLinks from "@/components/SocialLinks.vue";

export default {
  name: "AboutView",
  components: { PageWrapper, SocialLinks },
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
  position: relative;
}

/* Text content */
.about-text {
  flex: 1.2;
  max-width: 700px;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 0.5rem;
}

.about-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #c2c2c2;
}

/* Skills list */
.skills {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.skills li {
  background: rgba(141, 141, 141, 0.1);
  border-left: 4px solid #f8f9fa;
  padding: 0.6rem 1rem;
  margin-bottom: 0.7rem;
  border-radius: 6px;
  color: #c2c2c2;
  font-size: 0.95rem;
}

.closing {
  margin-top: 1.5rem;
  font-style: italic;
  color: #c2c2c2;
}

/* Right side: Profile pic + Social links */
.about-side {
  flex: 0.9;
  text-align: center;
  position: relative;
}

.profile-img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 0 15px rgba(142, 142, 142, 0.5);
  border: 1.5px solid rgba(255, 255, 255);
}

/* Responsive */
@media screen and (max-width: 900px) {
  .about-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-text {
    text-align: left;
  }

  .profile-img {
    margin-bottom: 1.5rem;
  }
}
</style>

